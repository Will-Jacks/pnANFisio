import { newArr } from "../app.js";

const booksList = document.getElementsByClassName('books-list');

function renderBooks(newArr) {
    if(newArr) {
        console.log(newArr);
    }
}

window.addEventListener("submitComplete", (event)=> {
    const newArr = event.detail;
    renderBooks(newArr);
})

renderBooks();