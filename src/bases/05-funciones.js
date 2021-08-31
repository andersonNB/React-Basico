//FUncion en js
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
  };
  
  const saludar2 = (nombre) => {
    return `Hola con una funcion de flecha, ${nombre}`;
  };
  
  const saludar3 = (nombre) => `Hola, ${nombre}`;
  const saludar4 = () => `Hola Mundo`;
  
  // console.log(saludar('Saitama'))
  console.log(saludar);
  console.log(saludar2);
  console.log(saludar3());
  console.log(saludar4());
  
  const getUser = () => {
    return {
      uid: "ABC1234",
      username: "El_papi1502",
    };
  };
  
  console.log(getUser());
  console.log("-------------------------------");
  //Tarea
  const usuarioActivo = (nombre) => {
    return {
      uid: "ABC567",
      username: nombre,
    };
  };
  
  console.log(usuarioActivo('Anderson'));
  
  /** objeto implicito
   * const getUsuarioActivo = (nombre) =>({
   *    uid:'ABC132',
   *    username: nombre    
   * })
   * 
   * const usuarioActivo = getUsuarioActivo('Goku');
   * console.log(usuarioActivo);
   * 
   */
   const arrow = () => `Hola Arrow cuando mandamos 
   un objeto implicito podemos utilizar los parentesis cuando es algo mas avanzado como un objeto`;
   console.log(arrow());
   