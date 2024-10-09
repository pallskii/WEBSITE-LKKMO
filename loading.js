document.addEventListener("click", function(event) {
    var logo = document.getElementById("logo");
    
    // Cek apakah klik dilakukan di luar area logo
    if (!logo.contains(event.target)) {
      window.location.href = "landingpage2.html"; // Pindah ke landingpage2.html
    }
  });
  