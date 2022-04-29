/// TEMPLATES
const followersBlockTemplate =  `
<p class="text-xs text-gray-500 mt-1">{{followers}} suscriptores</p>
`;
        
const channelCardTemplate = `
        <div class="channel-card bg-gray-900 font-semibold text-center rounded-xl shadow-lg p-10 max-w-xs border-gray-700 border-2 hover:border-indigo-800 transition-colors ease-in delay-50 mx-auto">
            <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto border-gray-700 border-2" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" data-blink-src="{{image}}" alt="channel image">
            <h1 class="font-bold text-lg text-white">{{name}}</h1>
            {{followers_block}}
            <div class='mb-1 mt-2 flex flex-wrap justify-center'>{{tags}}</div>
            <p class="text-xs text-gray-400 mt-4">{{description}}</p>
            <a href="{{url}}" target="_blank" class="inline-block bg-indigo-600 border-2 border-indigo-600 hover:bg-transparent px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:text-indigo-500">
                Acceder
            </a>
        </div>`;

const tagTemplate = `<span class="m-1 bg-gray-800 text-gray-400 rounded-full px-2 font-bold text-xs leading-loose">{{name}}</span>`;
const categoryCheckboxTemplate = `
<label class="inline-flex items-center mt-3 mr-4 cursor-pointer" >
    <input type="checkbox" class="categories-selector form-checkbox h-5 w-5 text-gray-600" data-category="{{alias}}">
    <span class="ml-2 text-gray-600">{{name}}</span>
</label>`;

/// CONSTANTS

const API_URL = 'https://xd-core-api.onrender.com';
// const API_URL = 'http://127.0.0.1:3000';
const categoryNames = {
    'movies': 'Películas',
    'series': 'Series',
    'youtube': 'YouTube',
    'animes': 'Animes',
    'mangas': 'Mangas',
    'doramas': 'Doramas',
    'shows': 'Shows',
    'games': 'Juegos',
    'music': 'Música',
    'programs': 'Programas',
}

/// FUNCTIONS

const renderChannelCard = (channel) => {
    const props = Object.keys(channel);
    let channelCard = channelCardTemplate;
    for (const prop of props) {
        channelCard = channelCard.replace(new RegExp('{{' + prop + '}}', 'g'), channel[prop]);
    }
    let followersBlock = '';
    if (channel.followers && channel.followers !== '-') {
        followersBlock = followersBlockTemplate.replace(new RegExp('{{followers}}', 'g'), channel.followers);
    }
    channelCard = channelCard.replace(new RegExp('{{followers_block}}', 'g'), followersBlock);
    const tags = channel.categories?.map(
        (category) => tagTemplate.replace(new RegExp('{{name}}', 'g'), categoryNames[category] || category)
    ).join('') || '';
    channelCard = channelCard.replace(new RegExp('{{tags}}', 'g'), tags);
    return channelCard;
}

const renderCategoryCheckBoxes = (categories) => {
    const categoryAlias = Object.keys(categories);
    let categoryCheckBoxes = '';
    for (const alias of categoryAlias) {
        categoryCheckBoxes += categoryCheckboxTemplate
        .replace(new RegExp('{{alias}}', 'g'), alias)
        .replace(new RegExp('{{name}}', 'g'), categories[alias]);
    }
    document.getElementById('categoryList').innerHTML = categoryCheckBoxes;
}

const getCategories = () => {
    return $('input.categories-selector:checked').map((index, el) => {
        return $(el).attr('data-category');
    }).toArray();
}

///

let loading = false;
let skip = 0;
let q = '';
let category = '';
let channelData = {};

// Fetch channels
renderCategoryCheckBoxes(categoryNames);
document.getElementById('previewBtn').onclick = function () {
    var url = document.getElementById('url').value;
    if (url && !loading) {
        loading = true;
        document.getElementById('previewBtn').innerText = 'Cargando metadatos...';
        var metasUrl = `${API_URL}/metas`;
        var type = url.includes('t.me') ? 'telegram' : 'website';
        fetch(metasUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify({
                url, type
            })
        })
        .then(response => response.json())
        .then(data => {
            data.categories = getCategories();
            document.getElementById('channelPreview').innerHTML = renderChannelCard(data);
            document.getElementById('submitHint').classList.remove('hidden');
            document.getElementById('submitBtn').classList.remove('hidden');
            document.getElementById('previewBtn').innerText = 'Actualizar';
            loading = false;
            channelData = data;
        }).catch((e) => {
            loading = false;
            document.getElementById('previewBtn').innerText = 'Actualizar';
            console.log(e)
        });
    } else {
        alert('Introduzca un enlace!');
    }
};

document.getElementById('submitBtn').onclick = function () {
    if (confirm('Confirma que quiere enviar esta solicitud?') && !loading) {
        var createChannelUrl = `${API_URL}/channels`;
        loading = true;
        fetch(createChannelUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(channelData)
        })
        .then(response => response.json())
        .then((res) => {
            if (res.statusCode && res.statusCode >= 400) {
                alert('Ha ocurrido un error al enviar la solicitud. Puede que tu canal ya fuera enviado o faltan datos en tu solicitud.');
            } else {
                alert('Se ha enviado su solicitud!');
            }
            loading = false;
        }).catch((e) => {
            loading = false;
            console.log(e);
            alert('Ha ocurrido un error al enviar la solicitud. Puede que tu canal ya fuera enviado o faltan datos en tu solicitud.');
        });
    }
}
