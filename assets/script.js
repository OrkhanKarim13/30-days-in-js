  // Klavye tuşlarını dinleme
  document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        sesCikar("notA");
    } else if (event.key === "s" || event.key === "S") {
        sesCikar("notS");
    } else if (event.key === "d" || event.key === "D") {
        sesCikar("notD");
    }
});

// Ses çalma fonksiyonu
function sesCikar(sesID) {
    var sesElementi = document.getElementById(sesID);
    sesElementi.currentTime = 0; // Sesin başa dönmesi için
    sesElementi.play(); // Ses çal
}