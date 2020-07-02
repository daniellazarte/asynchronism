//Resolve challenge with Async / await
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anf =  async (url_api) =>{
    try{
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch(error){
        console.error(error);
    } 
}

console.log('Before');
anf(API);
console.log('After');