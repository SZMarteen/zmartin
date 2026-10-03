let tajneCislo = Math.floor(Math.random() * 100) + 1;
let pokusy = 0;
let konec = false;
 
function hadej() {
    // Po výhře tlačítko spustí novou hru
    if (konec) {
        novaHra();
        return;
    }
 
    let pole = document.getElementById("tip");
    let tip = Number(pole.value);
 
    // Kontrola, jestli je číslo v pořádku
    if (pole.value === "" || tip < 1 || tip > 100) {
        document.getElementById("zprava").textContent = "Napiš číslo od 1 do 100.";
        return;
    }
 
    pokusy = pokusy + 1;
    document.getElementById("pokusy").textContent = pokusy;
 
    // Uprostřed stránky se ukáže číslo, které uživatel napsal
    document.getElementById("cislo").textContent = tip;
 
    if (tip === tajneCislo) {
        document.getElementById("sipka").textContent = "✔";
        document.getElementById("zprava").textContent = "Správně! Trvalo ti to " + pokusy + " pokusů.";
        document.getElementById("tlacitko").textContent = "Nová hra";
        konec = true;
    } else if (tip > tajneCislo) {
        document.getElementById("sipka").textContent = "↓";
        document.getElementById("zprava").textContent = "Moc moc, hádej menší číslo.";
    } else {
        document.getElementById("sipka").textContent = "↑";
        document.getElementById("zprava").textContent = "Moc málo, hádej větší číslo.";
    }
 
    pole.value = "";
    pole.focus();
}
 
function novaHra() {
    tajneCislo = Math.floor(Math.random() * 100) + 1;
    pokusy = 0;
    konec = false;
    document.getElementById("pokusy").textContent = 0;
    document.getElementById("cislo").textContent = "?";
    document.getElementById("sipka").textContent = "";
    document.getElementById("zprava").textContent = "Napiš svůj první tip.";
    document.getElementById("tlacitko").textContent = "Hádej";
}
 
// Enter funguje stejně jako kliknutí na tlačítko
document.getElementById("tip").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        hadej();
    }
});
 