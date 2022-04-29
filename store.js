/// TEMPLATES

const productCardTemplate =
    `<div>
    <div class="overflow-hidden rounded-xl relative transform hover:-translate-y-1 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card">
        <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
        <div class="relative group z-10 px-5 pt-10 space-y-6 movie_info" data-lity="">
            <div class="poster__info align-self-end w-full">
                <div class="h-60"></div>
                <div class="space-y-6 detail_info">
                    <div class="flex flex-col space-y-2 inner">
                        <h3 class="text-2xl font-bold text-white">{{name}}</h3>
                        <div class="mb-0 text-lg text-gray-400">{{subtitle}}</div>
                    </div>
                    <div class="flex flex-row justify-between datos">
                        <div class="flex flex-col datos_col">
                            <div class="price">{{price}}</div>
                            <div class="text-sm text-gray-400">Precio</div>
                        </div>
                        <div class="flex flex-col datos_col">
                            <div class="size">{{size}}</div>
                            <div class="text-sm text-gray-400">Tamaño</div>
                        </div>
                        <div class="flex flex-col datos_col">
                            <div class="expDate">{{expDate}}</div>
                            <div class="text-sm text-gray-400">Fecha de exp.</div>
                        </div>
                    </div>
                    <div class="flex flex-col overview">
                        <div class="flex flex-col"></div>
                        <div class="text-xs text-gray-400 mb-2">Descripción</div>
                        <p class="text-xs text-gray-100 mb-4 leading-4 text-gray-300">
                            {{description}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <img class="absolute inset-0 transform w-full -translate-y-4" src="{{image}}">
        <div class="poster__footer flex flex-row relative pb-5 z-10 my-4">
            <a class="flex items-center py-3 px-4 rounded-full mx-auto text-white bg-indigo-600 border-2 border-indigo-600 hover:bg-transparent"
               href="{{contact}}" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
                <div class="text-sm text-white ml-2">
                    Comprar ahora
                </div>
            </a></div>
    </div>
</div>
`;

const growingFollowersTemplate =
`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="#26ad31">
  <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>`;

const decreasingFollowersTemplate =
`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="#df4a4a">
  <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>`;

const followersBlockTemplate =  `
<p class="text-xs text-gray-500 mt-1">
{{increase}}
{{followers}} suscriptores
</p>
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
            <p class="text-xs text-gray-600 mt-3">Copia el enlace y pega en tu navegador si falla al abrir</p>
            {{xdTeam}}
        </div>`;

const xdTeamTemplate = `
<button data-id="{{id}}" data-verified="false" class="xd-team-action inline-block bg-red-600 border-2 border-red-600 hover:bg-transparent px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:text-red-500">
    Denegar
</button>
<button data-id="{{id}}" data-verified="true" class="xd-team-action inline-block bg-green-600 border-2 border-green-600 hover:bg-transparent px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:text-green-500">
    Aprobar
</button>
<button data-id="{{id}}" class="xd-team-trash inline-block bg-red-700 border-2 border-red-700 hover:bg-transparent px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:text-red-600">
    Eliminar
</button>`;

const tagTemplate = `<span class="m-1 bg-gray-800 text-gray-400 rounded-full px-2 font-bold text-xs leading-loose">{{name}}</span>`;
const categoryButtonTemplate = `
<button data-action="{{alias}}"
    class="category-filter inline-block my-1 p-4 py-3 my-1 overflow-hidden font-medium text-gray-500 border-2 border-gray-500 hover:text-indigo-500 hover:border-indigo-500 rounded-full shadow-md group">
    {{name}}
</button>`;

const products = [
    {
        name: 'Jujutsu Kaisen 0',
        subtitle: 'Fight what\'s within.',
        price: '$123.00',
        size: '1.23GB',
        expDate: '2021-02-24',
        image: 'https://image.tmdb.org/t/p/w342/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg',
        contact: 'https://t.me/x_orders_group',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse id nam nulla omnis. Accusamus, aspernatur dignissimos dolor doloribus enim facilis incidunt, ipsa magnam maxime natus quis reprehenderit sequi, voluptatum.'
    },
];

/// CONSTANTS

const API_URL = 'https://xd-core-api.onrender.com';
// const API_URL = 'http://127.0.0.1:3000';
const RECORDS_PER_PAGE = 8;
const categoryNames = {
    '': 'Todas',
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

const renderProductList = (products) => {
    document.getElementById('list')
        .innerHTML = products.map(product => renderProductCard(product)).join('');
}

const renderProductCard = (product) => {
    const props = Object.keys(product);
    let productCard = productCardTemplate;
    for (const prop of props) {
        productCard = productCard.replace(new RegExp('{{' + prop + '}}', 'g'), product[prop]);
    }
    return productCard;
}

const renderChannelList = (channels, reset = false) => {
    const content = document.getElementById('list')
        .innerHTML;
    const channelsContent = channels.map(channel => renderChannelCard(channel)).join('');
    document.getElementById('list')
        .innerHTML = reset ? channelsContent : content + channelsContent;
}

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
    const increase = channel.growing ? growingFollowersTemplate : decreasingFollowersTemplate;
    followersBlock = followersBlock.replace(new RegExp('{{increase}}', 'g'), increase);
    channelCard = channelCard.replace(new RegExp('{{followers_block}}', 'g'), followersBlock);
    const tags = channel.categories.map(
        (category) => tagTemplate.replace(new RegExp('{{name}}', 'g'), categoryNames[category] || category)
    ).join('');
    channelCard = channelCard.replace(new RegExp('{{tags}}', 'g'), tags);
    const xdTeam = window.localStorage.getItem('xdTeam');
    const xdTeamActions = xdTeam ? xdTeamTemplate.replace(new RegExp('{{id}}', 'g'), channel._id) : '';
    channelCard = channelCard.replace(new RegExp('{{xdTeam}}', 'g'), xdTeamActions);

    return channelCard;
}

const renderCategoryButtons = (categories) => {
    const categoryAlias = Object.keys(categories);
    let categoryButtons = '';
    for (const alias of categoryAlias) {
        categoryButtons += categoryButtonTemplate
        .replace(new RegExp('{{alias}}', 'g'), alias)
        .replace(new RegExp('{{name}}', 'g'), categories[alias]);
    }
    document.getElementById('categoryButtons').innerHTML = categoryButtons;
}

///

let loading = false;
let skip = 0;
let q = '';
let category = '';

const updateLoadMore = (l = false) => {
    loading = l;
    if (loading) {
        document.getElementById('loadMore').innerHTML = 'Cargando...';
    } else {
        document.getElementById('loadingList').classList.add('hidden');
        document.getElementById('loadingList').classList.add('lg:hidden');
        document.getElementById('list').classList.remove('hidden');
        document.getElementById('list').classList.remove('lg:hidden');
        document.getElementById('loadMore').innerHTML = 'Cargar más';
    }
}

const loadChannels = (reset = false) => {
    if (reset) {
        skip = 0;
    }
    const isXDTeam = !!window.localStorage.getItem('xdTeam');
    const channelsApi = `${API_URL}/channels?skip=${skip}&limit=${RECORDS_PER_PAGE}&category=${category}&q=${q}&xdTeam=${isXDTeam}`;
    fetch(channelsApi).then((res) => {
        res.json().then((json) => {
            renderChannelList(json.data, reset);
            if (isXDTeam) {
                createXDTeamHooks();
            }
            if (json.hasMore && json.data.length) {
                document.getElementById('loadMore').classList.remove('hidden');
            } else {
                document.getElementById('loadMore').classList.add('hidden');
            }
            if (!json.data.length && reset) {
                document.getElementById('notResults').classList.remove('hidden');
            } else {
                document.getElementById('notResults').classList.add('hidden');
            }
            updateLoadMore(false)
        });
    }).catch(() => {
        updateLoadMore(false)
    })
}

const verifyChannel = (id, verified) => {
    const token = window.localStorage.getItem('xdTeam');
    const metasUrl = `${API_URL}/channels/verify/${id}?verified=${verified}&token=${token}`;
    fetch(metasUrl, {
        mode: 'no-cors',
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': token,
        })
    })
    .then(res => {
        if (res.statusCode && res.statusCode >= 400) {
            alert('Ha ocurrido un error al enviar su solicitud: ' + res.message);
        } else {
            alert(`Se ha ${verified ? 'Aprobado' : 'Denegado'} el canal!`);
        }
    }).catch((e) => {
        alert('Ha ocurrido un error al enviar su solicitud: ' + e.message);
    });
}

const deleteChannel = (id) => {
    const token = window.localStorage.getItem('xdTeam');
    const metasUrl = `${API_URL}/channels/delete/${id}?token=${token}`;
    fetch(metasUrl, {
        mode: 'no-cors',
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': token,
        })
    })
    .then(res => {
        if (res.statusCode && res.statusCode >= 400) {
            alert('Ha ocurrido un error al enviar su solicitud: ' + res.message);
        } else {
            alert(`Se ha eliminado el canal!`);
        }
    }).catch((e) => {
        alert('Ha ocurrido un error al enviar su solicitud: ' + e.message);
    });
}

// Fetch channels
renderCategoryButtons(categoryNames);
loadChannels(true);
document.getElementById("loadMore").onclick = function () {
    if (!loading) {
        skip += RECORDS_PER_PAGE;
        updateLoadMore(true);
        loadChannels();
    }
};

// Events
const filters = document.getElementsByClassName("category-filter");
for (const filter of filters) {
    filter.onclick = function (e) {
        category = filter.getAttribute('data-action');
        if (!loading) {
            loadChannels(true);
            updateLoadMore(true);
        }
    };
}

document.getElementById("search").onkeyup = function () {
    q = document.getElementById('search').value;
    if (!loading || !q) {
        loadChannels(true);
        updateLoadMore(true);
    }
};

document.getElementById("xdBtn").onclick = function () {
    var val = window.prompt("XD Team", "");
    if (val.length === 36) {
        window.localStorage.setItem('xdTeam', val);
    } else {
        window.localStorage.setItem('xdTeam', '');
    }
};

const createXDTeamHooks = () => {
    const xdTeamGoods = document.getElementsByClassName("xd-team-action");
    for (const xdTeamGood of xdTeamGoods) {
        xdTeamGood.onclick = function (e) {
            const id = xdTeamGood.getAttribute('data-id');
            const verified = xdTeamGood.getAttribute('data-verified') === 'true';
            if (confirm(`Confirma que quiere ${verified ? 'aprobar' : 'denegar'} este canal?`) && !loading) {
                verifyChannel(id, verified);
            }
        };
    }
    const xdTeamTrashEls = document.getElementsByClassName('xd-team-trash');
    for (const xdTeamTrash of xdTeamTrashEls) {
        xdTeamTrash.onclick = function (e) {
            const id = xdTeamTrash.getAttribute('data-id');
            if (confirm(`Confirma que quiere eliminar este canal?`) && !loading) {
                deleteChannel(id);
            }
        };
    }
}

// Fetch products
// const demoProducts = [];
// for (let i = 0; i < 12; i++ ) {
//     demoProducts.push(...products);
// }
// renderProductList(demoProducts);

