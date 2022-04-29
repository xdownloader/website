const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const v = params.v;
const vData = decodeXDD(v).split('|');
const url = vData[0];
const title = vData[1];
const owner = vData[2].replace('@', '').replace('https://t.me/', '');
const password = vData[3];
const allowDownload = vData[4] && vData[4] === '1';

let success = true;
if (password) {
  const userPassword = prompt(`Ingrese la contraseña para ver el video`, ``);
  if (password !== userPassword) {
    success = false;
    alert('Contraseña Incorrecta!');
  }
}

if (success) {
  const pathname = decodeURIComponent(new URL(url).pathname);
  const parts = pathname.split('/');
  const lastSegment = parts.pop() || parts.pop();
  const fileParts = lastSegment.split('.');
  const name = fileParts.pop() && fileParts.pop();

  document.getElementById('title').innerText = title || name;
  if (owner) {
    document.getElementById('owner_wrapper').classList.remove('hidden');
    document.getElementById('owner').innerText = `@${owner}`;
    document.getElementById('owner').href = `https://t.me/${owner}`;
  }

  console.log(`Allow download ${allowDownload ? 'yes' : 'no'}`)

  const player = allowDownload ? videojs(document.querySelector('.video-js'), {
    plugins: {
      vjsdownload: {
        beforeElement: 'playbackRateMenuButton',
        textControl: 'Descargar video',
        name: 'downloadButton',
      },
    },
  }, function() {
    this.src(url);
  }) : videojs('player');
  if (!allowDownload) {
    player.src(url);
  }
}
