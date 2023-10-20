async function fetchApi() {
    try {const url = "../public/api/books.json";
    const response = await fetch(url);
    const data = await response.json();
    return data;
    } catch(error) {
        console.error("Erro em dar fetch", error);
    }
}
export { fetchApi };