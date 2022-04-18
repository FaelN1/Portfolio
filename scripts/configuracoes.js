function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });
}

const apresentacao = document.querySelector('.content-info .sobre p')
typeWriter(apresentacao)



window.sr = ScrollReveal({ reset: true});
sr.reveal('#sobre', { duration: 1000 });
