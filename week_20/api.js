document.addEventListener("DOMContentLoaded", function () {
    getPokemon();
})

function getPokemon() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=bsaKIckhPqZxGYBrvRNteedlrDaWuSkd19QHVe27")
        .then(response => response.json())
        .then(data => {
            console.log(data.photos)
            for (let photo of data.photos) {
                console.log(photo);
                document.getElementById("container").innerHTML += `
                <div>ID фото: ${photo.id}</div>
                <div>Дата съёмки: ${photo.earth_date}</div>
                <img src="${photo.img_src}" width= 350px>`;
            }
        })
        .catch(error => console.log(error));
}