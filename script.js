function DD() {
    document.getElementById("Dropdownmap").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var Dropdownmap = document.getElementById("Dropdownmap");
      if (Dropdownmap.classList.contains('show')) {
        Dropdownmap.classList.remove('show');
      }
  }
}
