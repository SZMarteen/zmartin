let pocet = 0;
let best = 0;
let hraj = false;
let konec = false;
let casovac;
let konecCasu;
 
function klik() {
    if (konec) {
        novaHra();
        return;
    }

    if (!hraj) {
        hraj = true;
        konecCasu = Date.now() + 10000;
        casovac = setInterval(tik, 100);
        document.getElementById("zprava").textContent = "Klikej, ať stihneš co nejvíc!";
    }
 
    pocet = pocet + 1;
    document.getElementById("cislo").textContent = pocet;
}
 
function tik() {
    let zbyva = (konecCasu - Date.now()) / 1000;
 
    if (zbyva <= 0) {
        koncihry();
    } else {
        document.getElementById("cas").textContent = zbyva.toFixed(1) + " s";
    }
}
 
function koncihry() {
    clearInterval(casovac);
    hraj = false;
    konec = true;
 
    document.getElementById("cas").textContent = "0.0 s";
    document.getElementById("zprava").textContent = "Čas vypršel! Naklikal jsi " + pocet + " kliků (" + (pocet / 10) + " za sekundu).";
    document.getElementById("tlacitko").textContent = "Hrát znovu";
 
    if (pocet > best) {
        nejlepsi = pocet;
        document.getElementById("best").textContent = best;
    }
}
 
function novaHra() {
    pocet = 0;
    konec = false;
    document.getElementById("cislo").textContent = 0;
    document.getElementById("cas").textContent = "10.0 s";
    document.getElementById("zprava").textContent = "Klikni na tlačítko a hra začne.";
    document.getElementById("tlacitko").textContent = "Klikej!";
}
 