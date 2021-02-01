const texte = document.querySelector("#texte");
function envoyer(){
    if (document.getElementById("age").value>=18) {
        document.getElementById("action").remove();
        texte.innerHTML = "Les information suivante vont être envoyé "+document.getElementById("nom").value+", "+document.getElementById("prenom").value; 
        
    }
    else {
        alert("Entrée refusé");
    }
}