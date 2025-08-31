const recordName = document.querySelector("main").dataset.record;
const favButton = document.querySelector("#favButton");

if(!localStorage.getItem("userFavourite")){
    localStorage.setItem("userFavourite", JSON.stringify([]));
}

function getFavourites(){
    return JSON.parse(localStorage.getItem("userFavourite")) || []; 
}

function saveFavourites(favourites) {
    localStorage.setItem("userFavourite", JSON.stringify(favourites));
}

function toggleFavourite(recordTitle){
    let favourites = getFavourites();

     if (favourites.includes(recordTitle)) {
        favourites = favourites.filter(fav => fav !== recordTitle);
        favButton.textContent = "Add to favourites";
    } else {
        favourites.push(recordTitle);
        favButton.textContent = "Remove from favourites";
    }
    saveFavourites(favourites)
}

