import { fetchApi } from "./scripts/fetchApi.js";

const form = document.getElementById("form-search");
const input = document.getElementById("input-form-search");
let newArr;
form.addEventListener('submit', async (e)=> {
    

    try {
        const apiData = await fetchApi(); // Busca o retorno do fetchAPI
        
        newArr = apiData.filter((books)=> {
            return books.name.includes((input.value).toLowerCase());
        }); // Filtra os livros de acordo com o valor do input

        //Dispara um evento quando a promise for resolvida, para consumir em outro arquivo
        const event = new CustomEvent("submitComplete", { detail: newArr});
        window.dispatchEvent(event);

    } catch(error) {
        console.error("Erro ao buscar o dado da API: ", error);
    }
});

export { newArr }