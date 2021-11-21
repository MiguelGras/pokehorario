window.onload = function() {
    saludo();
}

function saludo() {
    var hoy = new Date();
    var hora = hoy.getHours();
    if (hora < 7 || hora > 17) {
        const h1 = document.getElementById('h1');
        let HTMLString = '<h1>¡Buenas Noches!</h1>'
        h1.innerHTML = HTMLString;
        document.body.style.backgroundColor = "#3E3730";

    } else {

        const h1 = document.getElementById('h1');
        let HTMLString = '<h1>¡Buenos Dias!</h1>'
        h1.innerHTML = HTMLString;
        document.body.style.backgroundColor = "#ee6b2f";
    }
}

window.onload = function() {
    saludo();
    console.log(getListRandom(10, 1, 10));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getListRandom(n, min, max) {
    var array = []
    for (let i = 0; i < n; i++) {
        let numr = getRndInteger(min, max);
        if (array.includes(numr)) {
            i--;
        } else {
            array.push(numr);
        }
    }
    return array;
}

function buttonOpacity() {
    if (document.getElementById("pokeball").style.opacity == "1") {
        document.getElementById("pokeball").style.opacity = "0.5";
    } else {
        document.getElementById("pokeball").style.opacity = "1";
    }
}

function listRandom() {
    buttonOpacity();
    galleryRandom(0, 10, null, null);
}

function buttonOpacity() {
    if (document.getElementById("pokeball").style.opacity == "1") {
        document.getElementById("pokeball").style.opacity = "0.5";
    } else {
        document.getElementById("pokeball").style.opacity = "1";
    }
}

function galleryRandom(min, max, images, listRnd) {
    images = document.getElementsByTagName("img");
    listRnd = getListRandom(10, 1, 10);
    for (let i = min; i < max; i++) {
        images[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG");
        console.log(images[i]);
    }
    return images;
}
