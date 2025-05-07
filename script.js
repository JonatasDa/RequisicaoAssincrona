document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('submit');
    const resultado = document.getElementById('resultado');

button.addEventListener('click', function(){
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `dados.php?n1=${n1}&n2=${n2}`, true);
    xhr.onload = function(){
        if(xhr.status === 200){
            resultado.innerHTML = "Resultado da soma: " + xhr.responseText;
        } else{
            resultado.innerHTML = "Erro na requisição: " + xhr.status;
        }
    }
    xhr.onerror = function(){
        resultado.innerHTML = 'Erro na requisição'
    }
    xhr.send();
  });
});