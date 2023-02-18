// Récupère les boîtes de dialogue modales
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Récupère les boutons qui ouvrent les boîtes de dialogue modales
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Récupère les boutons pour fermer les boîtes de dialogue modales
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// Ferme la boîte de dialogue modale si l'utilisateur clique en dehors de celle-ci
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// Quand l'utilisateur clique sur le bouton 1, ouvre la boîte de dialogue modale 1
btn1.onclick = function() {
  modal1.style.display = "block";
}

// Quand l'utilisateur clique sur le bouton 2, ouvre la boîte de dialogue modale 2
btn2.onclick = function() {
  modal2.style.display = "block";
}

// Quand l'utilisateur clique sur le bouton 3, ouvre la boîte de dialogue modale 3
btn3.onclick = function() {
  modal3.style.display = "block";
}

// Quand l'utilisateur clique sur le bouton pour fermer la boîte de dialogue modale 1, la ferme
span1.onclick = function() {
  modal1.style.display = "none";
}

// Quand l'utilisateur clique sur le bouton pour fermer la boîte de dialogue modale 2, la ferme
span2.onclick = function() {
  modal2.style.display = "none";
}

// Quand l'utilisateur clique sur le bouton pour fermer la boîte de dialogue modale 3, la ferme
span3.onclick = function() {
  modal3.style.display = "none";
}
