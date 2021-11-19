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
        document.body.style.backgroundColor = rgb(238, 107, 47);
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