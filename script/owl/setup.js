$('.owl-carousel').owlCarousel({
    loop:true,/* informa que eu quero um loop, ou seja, repetir mesmo que acabe as imagens */
    margin:10, /* altera a margin entre as imagens */
    nav:true, /* botões de navegação */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const capa = document.querySelector('.conteudo-principal');
const titulo = document.querySelector('.titulo');
const item = document.querySelector('.img');

console.log(titulo)

item.addEventListener('click', mudarImagem) 

function mudarImagem() {
    titulo.style.color = "red";
    capa.style = "background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa1_opt.png')";
}

