function clock() {
    let clck = new Date();
    document.getElementById("clock").textContent = clck.toLocaleTimeString("cs-CZ");
    document.getElementById("date").textContent = clck.toLocaleDateString("cs-CZ");
}

clock();
setInterval(clock, 1000);