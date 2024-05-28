const personagem = document.querySelector('.personagem');
const milho = document.querySelector('.milho');

const pular = () =>{
    personagem.classList.add('pulo');

    setTimeout(() => {
        personagem.classList.remove('pulo');
    }, 500)
}

const loop = setInterval( () => {
    const milhoPosicao = milho.offsetLeft;
    const personagemPosicao = +window.getComputedStyle(personagem).bottom.replace('px', '');

    if (milhoPosicao <= 77 && milhoPosicao > 0 && personagemPosicao <95){
        milho.style.animation = 'none';
        milho.style.left = `${milhoPosicao}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosicao}px`;

        personagem.src = './img/personagem04.png';
        personagem.style.width = '180px';
        
        clearInterval(loop);
    }
}, 10)
 
document.addEventListener('keydown', pular);