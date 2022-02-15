function chooseFavorite() {
    return favorites[Math.floor(Math.random()*favorites.length)];
}

function chooseToHike() {
    let temp = toHike[Math.floor(Math.random()*toHike.length)];
    return temp
}

let currentTrail = {};
function pickTrail() {
    if(Math.random() < 0.5) {
        currentTrail = chooseFavorite();
        $(".star").show();
    } else {
        currentTrail = chooseToHike();
        $(".star").hide();
    }
    updatePage();
}
pickTrail();
$(".another").click(() => {
    pickTrail();
});

function updatePage() {
    $(".text").text(currentTrail.name+" - "+currentTrail.length+"mi");
    $(".go").attr("href", currentTrail.go);
}