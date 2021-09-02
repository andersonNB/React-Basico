const getImagen = async () => {

    try {
      const apiKey = "3H827UpW5XbozD8RX0pcgtDrsN0xhQ52";
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`
      );
      const data = await res.json();
  
      const { url } = data.data.images.original;
      console.log(url);
      const imagen = document.createElement("img");
      imagen.src = url;
      console.log(imagen);
      document.body.append(imagen);
    } catch (error) {
        console.error(error)
    }
  };
  
  getImagen();
  
  // const apiKey = '3H827UpW5XbozD8RX0pcgtDrsN0xhQ52';
  
  // const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
  
  // peticion.then(res => res.json())
  // .then(({data}) => {
  //     const {url} = data.images.original;
  
  //     const img = document.createElement('img');
  //     img.src = url;
  
  //     document.body.append(img);
  
  // })
  // .catch(console.warn)
  