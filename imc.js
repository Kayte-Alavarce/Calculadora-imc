const calcular = document.getElementById ('calcular');

 function imc () {
    const nome = document.getElementById ('nome').value;  
    const altura = document.getElementById ('altura').value; 
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');

     if (nome !== '' && altura !== '' && peso !== '' ) {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
         classificacao = 'Abaixo do Peso.';
        }else if ( valorIMC < 25) {
         classificacao = 'Peso ideal. Parabens!!!!';
        } else if (valorIMC <30){
         classificacao = 'Levemente acima do peso.';
        }else if (valorIMC < 35) {
         classificacao = 'Obesidade grau I.';
        } else if (valorIMC < 40){
         classificacao = 'Obesidade  grau II.';
        } else {
         classificacao = 'Obesidade grau III. Cuidado!!!';
        }

         resultado.textContent = `${nome} Seu IMC é ${valorIMC} você está ${classificacao}`  ;

      

     } else {
       resultado.textContent = 'preencha todos os campos!!!'
     }
 }

calcular.addEventListener ('click', imc);

