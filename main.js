function chooseFavorite() {
    return favorites[Math.floor(Math.random(0, favorites.length))];
}

function chooseToHike() {
    let temp = toHike[Math.floor(Math.random(0, toHike.length))];
    console.log(toHike)
    console.log(temp)
    return temp
}

let currentTrail = {};
function pickTrail() {
    console.log("picking trail")
    if(Math.random() < 0.5) {
        console.log("if")
        currentTrail = chooseFavorite();
        $(".star").show();
    } else {
        console.log("else")
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
    console.log("updating page")
    console.log(currentTrail)
    $(".text").text(currentTrail.name);
    $(".go").attr("href", currentTrail.go);
}