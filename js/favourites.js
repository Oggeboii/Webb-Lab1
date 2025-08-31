const elUserFavourites = document.querySelector("#favouriteList");
const url = '/data/playlist.json';

function getFavourites(){
    return JSON.parse(localStorage.getItem("userFavourite")) || []; 
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function listFavourites(){
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            const favourites = getFavourites();
            const favRecord = data.records.filter(r => favourites.includes(r.title));

            favRecord.forEach(record => {
                let recordTitle = createNode('h3');
                recordTitle.textContent = record.title;
                append(elUserFavourites, recordTitle);
            });
        })
        .catch(function(error) {
            console.log(error);
        });
}
document.addEventListener("DOMContentLoaded", listFavourites);

