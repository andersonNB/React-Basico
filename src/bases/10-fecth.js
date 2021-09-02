const apiKey = '3H827UpW5XbozD8RX0pcgtDrsN0xhQ52';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion.then(res => res.json())
.then(({data}) => {
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

})
.catch(console.warn)