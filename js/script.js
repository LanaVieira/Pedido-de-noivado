let index = 0;

function moveSlide(direction) {
    const carrossel = document.getElementById("carrossel");
    const totalSlides = carrossel.children.length;
    const slideWidth = carrossel.children[0].offsetWidth;
    
    index = (index + direction + totalSlides) % totalSlides;
    const offset = -index * slideWidth;
    carrossel.style.transform = `translateX(${offset}px)`;
}

function abrirModal() {
    document.getElementById("meuModal").style.display = "block";
}

function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}

// Música de fundo
window.onload = function () {
    let audio = new Audio("audio/musica.mp3");
    audio.loop = true;
    audio.play().catch(error => console.log("A reprodução automática foi bloqueada pelo navegador."));
};
