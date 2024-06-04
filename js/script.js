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
const igreja2Noite = document.querySelector('.igreja2-noite');
const lua = document.querySelector('.lua');
const casa1Noite = document.querySelector('.casa1-noite');
const casa2Noite = document.querySelector('.casa2-noite');
const igreja3Noite = document.querySelector('.igreja3-noite');
const balao1 = document.querySelector('.balao1');
const cacto1Noite = document.querySelector('.cacto1-noite');
const cacto2Noite = document.querySelector('.cacto2-noite');

const controle = 0;

document.addEventListener('DOMContentLoaded', () =>{
    while( controle < 2){
        carregarJogo();
        controle ++;
    }
    
})

/*document.addEventListener('DOMContentLoaded', () =>{
    const loop2 = setInterval(() => {
       console.log("oia")
    } , 5000);
})*/

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
        fogueira.style.animationPlayState = 'paused';
        igreja2Noite.style.animationPlayState = 'paused';
        lua.style.animationPlayState = 'paused';
        casa1Noite.style.animationPlayState = 'paused';
        casa2Noite.style.animationPlayState = 'paused';
        igreja3Noite.style.animationPlayState = 'paused';
        balao1.style.animationPlayState = 'paused';
        cacto1Noite.style.animationPlayState = 'paused';
        cacto2Noite.style.animationPlayState = 'paused';

        

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
        
        //controle = 1;
        clearInterval(loop);
    }
}, 10)


 
document.addEventListener('keydown', (event) => {
    if(event.keyCode == 32){
        pular();
    }
});

const  carregarJogo = () =>{
    sol.classList.add('sanimado');
    nuvem1.classList.add('nanimado');
    igreja1.classList.add('animada');
    milho.classList.add('animado');
    cacto1.classList.add('c1animado');
    cacto2.classList.add('c2animado');
    casa1Dia.classList.add('c1danimada');
    casa2Dia.classList.add('c2danimada');
    igreja3Dia.classList.add('i3animada');
    passaro.classList.add('panimado');
    pedra.classList.add('panimada');
    arbusto.classList.add('aanimado');
    fogueira.classList.add('fanimada');
    igreja2Noite.classList.add('i2nanimada');
    lua.classList.add('lanimada');
    casa1Noite.classList.add('c1nanimada');
    casa2Noite.classList.add('c2nanimada');
    igreja3Noite.classList.add('i3nanimada');
    balao1.classList.add('b1animado');
    cacto1Noite.classList.add('c1nanimado');
    cacto2Noite.classList.add('c2nanimado');
    fundo.classList.add('funanimado');
    chao.classList.add('chanimado');

}