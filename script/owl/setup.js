//configuração do owl-carolsel
$('.owl-carousel').owlCarousel({
    loop: true,/* informa que eu quero um loop, ou seja, repetir mesmo que acabe as imagens */
    margin: 7, /* altera a margin entre as imagens */
    nav: false, /* botões de navegação */
    autoplay: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4,
        },
        1000: {
            items: 7
        }
    }
})

