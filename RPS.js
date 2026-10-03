let obrazky = {
    kamen: "✊",
    nuzky: "✌️",
    papir: "✋"
};
 
let nazvy = {
    kamen: "kámen",
    nuzky: "nůžky",
    papir: "papír"
};
 
// Skóre
let skoreTy = 0;
let skorePc = 0;
let skoreRemiza = 0;
 
function hraj(tvojeVolba) {
    let moznosti = ["kamen", "nuzky", "papir"];
    let pocitacVolba = moznosti[Math.floor(Math.random() * 3)];
 
    // Ukáže obě volby
    document.getElementById("tvuj").textContent = obrazky[tvojeVolba];
    document.getElementById("pocitac").textContent = obrazky[pocitacVolba];
 
    let zprava = document.getElementById("zprava");
 
    if (tvojeVolba === pocitacVolba) {
        zprava.textContent = "Remíza, oba jste vybrali " + nazvy[tvojeVolba] + ".";
        skoreRemiza = skoreRemiza + 1;
    } else if (
        (tvojeVolba === "kamen" && pocitacVolba === "nuzky") ||
        (tvojeVolba === "nuzky" && pocitacVolba === "papir") ||
        (tvojeVolba === "papir" && pocitacVolba === "kamen")
    ) {
        zprava.textContent = "Vyhrál jsi! " + nazvy[tvojeVolba] + " porazí " + nazvy[pocitacVolba] + ".";
        skoreTy = skoreTy + 1;
    } else {
        zprava.textContent = "Prohrál jsi. " + nazvy[pocitacVolba] + " porazí " + nazvy[tvojeVolba] + ".";
        skorePc = skorePc + 1;
    }
 
    // Aktualizuje skóre na stránce
    document.getElementById("skoreTy").textContent = skoreTy;
    document.getElementById("skorePc").textContent = skorePc;
    document.getElementById("skoreRemiza").textContent = skoreRemiza;
}
 