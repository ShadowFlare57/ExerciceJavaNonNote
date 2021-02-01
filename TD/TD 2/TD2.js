
function monnaie()
{
    var nb1 = document.getElementById('payer').value;
    var nb2 = document.getElementById('monnaie').value;
    var result;

    result = nb2 - nb1;

    if(result > 0)
    {
        alert('Je dois au client ' +result+' €');

    }
    else
    {
        alert('Le client me doit '+(-result)+' €');
    }

}