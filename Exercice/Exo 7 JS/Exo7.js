function result()
{
    var i;
    var noms = document.getElementById('nom').value;
    var nbr = document.getElementById('nombre').value;
    var thune = document.getElementById('prix').value;
    var textnom = '';
    var textnbr ='';
    var textprix = '';

    if(noms !='') {
        document.getElementById('ErreurNom').style.display="none";

    }
    else
    {
        document.getElementById('Erreurnom').style.display="inline-block";
    }
    if (nbr !='') {
        document.getElementById('ErreurNbr').style.display="none";
    }
    else
    {
        document.getElementById('ErreurNbr').style.display="inline-block";
    }
    if (thune !='') {
        document.getElementById('ErreurPrix').style.display="none";
    }
    else
    {
        document.getElementById('ErreurPrix').style.display="inline-block";
    }
}