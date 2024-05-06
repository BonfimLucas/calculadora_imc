function MeuEscopo(){

    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');
    const texto_abaixo = document.querySelector('#texto_subtitulo');
    
    function cancelaEnvio(evento){
        evento.preventDefault();

        const peso = form.querySelector('#peso_Usuario');
        const altura = form.querySelector('#altura_Usuario');

        const imcDoUsuario = peso.value / (altura.value * altura.value);

        if(imcDoUsuario === Number){
            resultado.innerHTML = `<p>${imcDoUsuario.toFixed(2)}</p>`;

            if(imcDoUsuario < 18.5){
                texto_abaixo.innerHTML = `<p>Abaixo do peso</p>`
                texto_abaixo.style.color = 'FireBrick'

            }
            else if(imcDoUsuario > 18.5 && imcDoUsuario < 24.9){
                texto_abaixo.innerHTML = `<p>Peso normal</p>`
                texto_abaixo.style.color = 'ForestGreen'

            }
            else if(imcDoUsuario > 25 && imcDoUsuario <29.98){
                texto_abaixo.innerHTML = `<p>Sobrepeso</p>`
                texto_abaixo.style.color = 'DarkOrange'

            }
            else if(imcDoUsuario > 30 && imcDoUsuario < 34.9){
                texto_abaixo.innerHTML = `<p>Obesidade Grau 1</p>`
                texto_abaixo.style.color = 'FireBrick'
                
            }
            else if(imcDoUsuario > 35 && imcDoUsuario < 39.9){
                texto_abaixo.innerHTML = `<p>Obesidade Grau 2</p>`
                texto_abaixo.style.color = 'DarkRed'
            }
            else if(imcDoUsuario > 40){
                texto_abaixo.innerHTML = `<p>Obesidade Grau 3</p>`
                texto_abaixo.style.color = 'Maroon'
            }
        }
        else{
            resultado.innerHTML = `<p>Por favor digite um numero valido.</p>`
        }
    }

    form.addEventListener('submit', cancelaEnvio);
}

MeuEscopo();
