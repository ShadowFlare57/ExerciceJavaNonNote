function titre1()
{
    alert('ceci est titre 1');
}

function input1()
{
    console.log('ceci est mon input');
}

function select1()
{
    alert('select changé');
}

function input2()
{
    console.log('touche appuyée');
}

function input3()
{
    console.log('touche relachée');
}

function fin()
{
    confirm('Êtes-vous sûr ?');
}

function envoyer(){
    document.getElementById("action").remove();
    texte.innerHTML = "Les information suivante vont être envoyer "+nom.value+", "+prenom.value; 
}