function getToken() {
    const fullSite = document.getElementById("site").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const site = new URL(fullSite).hostname;
    const protocol = new URL(fullSite).protocol;

    // validation
    if (!site) {
        alert('El enlace del sitio no puede estar vacío y debe ser válido!');
        return;
    }
    if (!username) {
        alert('El usuario no puede estar vacío!');
        return;
    }
    if (!password) {
        alert('La contraseña no puede estar vacía!');
        return;
    }

    const url = `https://xdownloader.surge.sh/.netlify/functions/get-token?site=${site}&username=${username}&password=${password}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            const url2 = `${protocol}//${site}/login/token.php?username=${username}&password=${password}&service=moodle_mobile_app`;
            fetch(url2)
            .then(response => response.json())
            .then(data2 => {
                document.getElementById("token").value = data2.token || data2.error || '';
                const colorClass = !!data2.error ? 'text-red-500' : '';
                document.getElementById("token").classList.remove('hidden');
                document.getElementById("token").classList.remove('text-red-500');
                document.getElementById("token").classList.add(colorClass);
                document.getElementById("loading").classList.add("hidden");
                localStorage.setItem('token', data2.token || '');
            }).catch(() => {
            });
        } else {
            document.getElementById("token").value = data.token || data.error || '';
            const colorClass = !!data.error ? 'text-red-500' : '';
            document.getElementById("token").classList.remove('hidden');
            document.getElementById("token").classList.remove('text-red-500');
            document.getElementById("token").classList.add(colorClass);
            document.getElementById("loading").classList.add("hidden");
            localStorage.setItem('token', data.token || '');
        }
    }).catch(() => {
    });
}
