if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('service worker is registered', reg))
    .catch((err) => console.log('servive worker not registered',err));
}