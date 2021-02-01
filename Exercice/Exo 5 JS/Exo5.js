function classe(){
var prenom = ['Cédric' , 'Bernard' , 'Joseph' , 'Aurélie' , 'Chloé' , 'Anthony' , 'Denis' , 'Catherine'];
var i;
var nbr ='';

for (i=0; i < prenom.length; i++)
{
    console.log(prenom[i]);
    nbr += prenom[i]+ '<br>';
}
document.getElementById('eleve').innerHTML = 'Il y a ' + prenom.length + ' élèves dans la classe, voici leurs prénoms: <br>' + nbr;
}