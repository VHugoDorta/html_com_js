function validar(){
    var elemento1 = document.getElementById('valor1').value;
   var elemento2 = document.getElementById('valor2').value;
   elemento1 = parseFloat(elemento1);
   elemento2 = parseFloat(elemento2);

   const mensagemsucesso = ("Validação concluída, pois o campo B está maior que o campo A");
    const mensagemfalha = ("Campo B menor ou igual ao Campo A, tente novamente");

if (elemento1 >= elemento2) {
    const stylefalha = document.querySelector('.mensagemdefalha');
        stylefalha.innerHTML = mensagemfalha;
        stylefalha.style.display = 'block';
        setTimeout(function(){
            location.reload();
        }, 2000);
    }
    else{
        const stylesucesso = document.querySelector('.mensagemdesucesso');
    stylesucesso.innerHTML = mensagemsucesso;
    stylesucesso.style.display = 'block';
    }
    setTimeout(function(){
        location.reload();
    }, 2000);
    return false;
}





