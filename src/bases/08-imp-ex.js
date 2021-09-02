import heroes, {owners} from '../data/heroes'

export const getHeroeById = (idheroe)=>{
    return heroes.find((elemento) => elemento.id === idheroe);
}

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) =>{
    return heroes.filter((elementoW) => {
        return elementoW.owner === owner;
    })
}

// console.log(getHeroesByOwner('Marvel'))

