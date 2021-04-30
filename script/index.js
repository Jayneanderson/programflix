const elem = document.querySelectorAll('.item')
const titulo = document.querySelector('.titulo');
const capa = document.querySelector('.conteudo-principal');
const descricao = document.querySelector('.descricao');

//pegando o id do + lista

/* Pegando dados da capa */
const capaConteudo = document.querySelector('.imagem')
const minhaLista = document.querySelector('#lista');

//console.log(imgConteudo)

elem.forEach(item => item.addEventListener('click', function () {
    const img = item.firstElementChild;
    const name = img.getAttribute('name');
    const imgConteudo = capaConteudo.lastElementChild;

    if (name == 'android') {
        titulo.textContent = "Android";
        descricao.textContent = "Android é um sistema operacional baseado no núcleo Linux, desenvolvido por um consórcio de desenvolvedores conhecido como Open Handset Alliance, sendo o principal colaborador o Google."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/android.jpg') no-repeat";
        capa.style.backgroundSize = "cover";
        imgConteudo.setAttribute("src", "../img/capa/android-capa.png")
        minhaLista.setAttribute('name', 'android')

    } else if (name == 'c') {
        titulo.textContent = "Linguagem C";
        descricao.textContent = "C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização, criada em 1972 por Dennis Ritchie na empresa AT&T Bell Labs para desenvolvimento do sistema operacional Unix."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/c_capa.png') no-repeat";
        capa.style.backgroundSize = "cover";
        minhaLista.setAttribute('name', 'c')

    } else if (name == 'java') {
        titulo.textContent = "Java";
        descricao.textContent = "Java é uma linguagem de programação segura, robusta, orientada a objetos e de alto nível. Java foi desenvolvido pela Sun Microsystems (que agora é subsidiária da Oracle) no ano de 1995. Leia agora as notícias mais quentes da linguagem."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/java.png') no-repeat";
        capa.style.backgroundSize = "cover";
        imgConteudo.setAttribute("src", "../img/capa/java-capa.png")
        minhaLista.setAttribute('name', 'java')

    } else if (name == 'php') {
        titulo.textContent = "PHP";
        descricao.textContent = "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/php_capa.png') no-repeat";
        capa.style.backgroundSize = "cover";

    } else if (name == 'c++') {
        titulo.textContent = "C++";
        descricao.textContent = "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/c++.png') no-repeat";
        capa.style.backgroundSize = "cover";

    } else if (name == 'js') {
        titulo.textContent = "JavaScript";
        descricao.textContent = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/javascript.jpg') no-repeat";
        capa.style.backgroundSize = "cover";

    } else if (name == 'kotlin') {
        titulo.textContent = "Kotlin";
        descricao.textContent = "otlin é uma Linguagem de programação multiplataforma, orientada a objetos e funcional, concisa e estaticamente tipada, desenvolvida pela JetBrains em 2011, que compila para a Máquina virtual Java e que também pode ser traduzida para a linguagem JavaScript e compilada para código nativo."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/kotlin.jpg') no-repeat";
        capa.style.backgroundSize = "cover";

    } else if (name == 'python') {
        titulo.textContent = "Python";
        descricao.textContent = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/python.jpg') no-repeat";
        capa.style.backgroundSize = "cover";

    } else if (name == 'ruby') {
        titulo.textContent = "Ruby";
        descricao.textContent = "Ruby é uma linguagem de programação interpretada multiparadigma, de tipagem dinâmica e forte, com gerenciamento de memória automático, originalmente planejada e desenvolvida no Japão em 1995, por Yukihiro Matz Matsumoto, para ser usada como."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/ruby.jpg') no-repeat";
        capa.style.backgroundSize = "cover";

    } else if (name == 'sql') {
        titulo.textContent = "SQL";
        descricao.textContent = "Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/sql.png') no-repeat";
        capa.style.backgroundSize = "cover";

    } else if (name == 'c#') {
        titulo.textContent = "C#";
        descricao.textContent = "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java."
        capa.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/capa/csharp.png') no-repeat";
        capa.style.backgroundSize = "cover";
    }

}))

const Linguagem = {
    abrir() {
        //abrir detalhes
        //para isso, preciso adicioanr a classe active em conteudo-linguagem
        document.querySelector('.conteudo-linguagem')
            .classList.add('active');
    },

    fechar() {
        document.querySelector('.conteudo-linguagem')
            .classList.remove('active');

    }
}


const Lista = {
    add() {
        
        console.log(minhaLista)
        
    },
    
    remove() {
        
    }
}

