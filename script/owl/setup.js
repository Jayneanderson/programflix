//configuração do owl-carolsel
$('.owl-carousel').owlCarousel({
    loop:false,/* informa que eu quero um loop, ou seja, repetir mesmo que acabe as imagens */
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

const elem = document.querySelectorAll('.item')
const titulo = document.querySelector('.titulo');
const capa = document.querySelector('.conteudo-principal');
const descricao = document.querySelector('.descricao');

if(elem[0]) {
    elem[0].addEventListener('click', function(){
        titulo.textContent = "Android";
        descricao.textContent = "Android é um sistema operacional baseado no núcleo Linux, desenvolvido por um consórcio de desenvolvedores conhecido como Open Handset Alliance, sendo o principal colaborador o Google."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/android.jpg') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}

if(elem[1]) {
    elem[1].addEventListener('click', function(){
        titulo.textContent = "Linguagem C";
        descricao.textContent = "C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização, criada em 1972 por Dennis Ritchie na empresa AT&T Bell Labs para desenvolvimento do sistema operacional Unix."
        //colocar capa de linguagem C aqui
        //capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/android.jpg') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}

if(elem[2]) {
    elem[2].addEventListener('click', function(){
        titulo.textContent = "Java";
        descricao.textContent = "Java é uma linguagem de programação segura, robusta, orientada a objetos e de alto nível. Java foi desenvolvido pela Sun Microsystems (que agora é subsidiária da Oracle) no ano de 1995. Leia agora as notícias mais quentes da linguagem."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/java.png') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}

if(elem[3]) {
    elem[3].addEventListener('click', function(){
        titulo.textContent = "PHP";
        descricao.textContent = "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/php.jpg') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}

if(elem[4]) {
    elem[4].addEventListener('click', function(){
        titulo.textContent = "C++";
        descricao.textContent = "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}

if(elem[5]) {
    elem[5].addEventListener('click', function(){
        titulo.textContent = "JavaScript";
        descricao.textContent = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/javascript.jpg') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}

if(elem[6]) {
    elem[6].addEventListener('click', function(){
        titulo.textContent = "Kotlin";
        descricao.textContent = "otlin é uma Linguagem de programação multiplataforma, orientada a objetos e funcional, concisa e estaticamente tipada, desenvolvida pela JetBrains em 2011, que compila para a Máquina virtual Java e que também pode ser traduzida para a linguagem JavaScript e compilada para código nativo."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/kotlin.jpg') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}

if(elem[7]) {
    elem[7].addEventListener('click', function(){
        titulo.textContent = "Python";
        descricao.textContent = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/python.jpg') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}

//modelo
if(elem[100]) {
    elem[100].addEventListener('click', function(){
        titulo.textContent = "";
        descricao.textContent = ""
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/') no-repeat";
        capa.style.backgroundSize = "cover";
    }) 
}


