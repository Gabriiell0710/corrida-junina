const personagem = document.querySelector('.personagem');
const milho = document.querySelector('.milho');
const fogueira = document.querySelector('.fogueira');
const sol = document.querySelector('.sol');
const nuvem1 = document.querySelector('.nuvem1');
const igreja1 = document.querySelector('.igreja1');
const casa1Dia = document.querySelector('.casa1-dia');
const cacto1 = document.querySelector('.cacto1');
const cacto2 = document.querySelector('.cacto2');
const arbusto = document.querySelector('.arbusto');
const casa2Dia = document.querySelector('.casa2-dia');
const igreja3Dia = document.querySelector('.igreja3-dia');
const passaro = document.querySelector('.passaro');
const pedra = document.querySelector('.pedra');
const fundo = document.querySelector('.fundo');
const chao = document.querySelector(".chao");

document.addEventListener('DOMContentLoaded', () =>{
    setTimeout(() => {
        fundo.classList.add('transition');
        chao.classList.add('transition');
    } , 107000);
})

const pular = () =>{
    personagem.classList.add('pulo');

    setTimeout(() => {
        personagem.classList.remove('pulo');
    }, 500)
}

const loop = setInterval( () => {
    const milhoPosicao = milho.offsetLeft;
    const pedraPosicao = pedra.offsetLeft;
    const fogueiraPosicao = fogueira.offsetLeft;

    const personagemPosicao = +window.getComputedStyle(personagem).bottom.replace('px', '');

    if (milhoPosicao <= 150 && milhoPosicao > 0 && personagemPosicao <145 || pedraPosicao <= 150 && pedraPosicao >0 && personagemPosicao <50 || fogueiraPosicao <= 175 && fogueiraPosicao >0 && personagemPosicao <135){

        sol.style.animationPlayState = 'paused';
        nuvem1.style.animationPlayState = 'paused';
        igreja1.style.animationPlayState = 'paused';
        casa1Dia.style.animationPlayState = 'paused';
        cacto1.style.animationPlayState = 'paused';
        cacto2.style.animationPlayState = 'paused';
        arbusto.style.animationPlayState = 'paused';
        casa2Dia.style.animationPlayState = 'paused';
        igreja3Dia.style.animationPlayState = 'paused';
        passaro.style.animationPlayState = 'paused';

        fogueira.style.animation = 'none';
        fogueira.style.left = `${fogueiraPosicao}px`;
        pedra.style.animation = 'none';
        pedra.style.left = `${pedraPosicao}px`;
        milho.style.animation = 'none';
        milho.style.left = `${milhoPosicao}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosicao}px`;

        personagem.src = './img/personagem04.png';
        personagem.style.width = '220px';
        
        clearInterval(loop);
    }
}, 10)


 
document.addEventListener('keydown', (event) => {
    if(event.keyCode == 32){
        pular();
    }
});