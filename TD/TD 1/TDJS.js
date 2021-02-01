function videnom(){
   if (document.getElementById("nom").value.length > 0) {
       return true
   }   
    else  {
        document.getElementById("noms").innerHTML = "Saisis incorrecte"
   };
};

function videprenom(){
    if (document.getElementById("prenom").value.length > 0) {
        return true
    }   
     else  {
         document.getElementById("prenoms").innerHTML = "Saisis incorrecte"
    };
 };
