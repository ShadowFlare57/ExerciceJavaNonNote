 /* Déclaration de variable avant la fonction pour la création de tableau */

var stock = 0;
var produit = [];


function result()
{
    var i
    var noms = document.getElementById('nom').value;
    var nbr = document.getElementById('nombre').value;
    var thune = document.getElementById('prix').value;
    var text = '';

    /* Ajout des noms des produits et de la quantité */

    produit.push(noms);
    stock = stock + (nbr*thune);
    produit.sort();

    for (i=0; i<produit.length; i++) {
        text+= produit[i]+ '<br>'
    }
    /* Récupération des valeurs des variables dans le HTML */
    
    document.getElementById('nomproduit').innerHTML = 'Nom des produits en stock : <br>' +text;
    document.getElementById('totalstock').innerHTML = 'Total du prix dans le stock = ' +stock+ ' €';
    document.getElementById('nom').value='';
    document.getElementById('quantite').value='';
    document.getElementById('prix').value='';

}