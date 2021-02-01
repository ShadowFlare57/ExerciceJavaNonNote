var madate = new Date();
var mois = madate.getMonth()+1;
var jours = madate.getDate();
var annee = madate.getUTCFullYear();

document.write(jours+'-'+mois+'-'+annee)

function envoyer2()
{




var chaine = document.getElementById('email').value;
var search = '@';
var position = chaine.indexOf(search);


if (!chaine.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    alert(chaine + " n'est pas une adresse valide");
}
else
{
    alert('adresse email correct')
}

return false;
}