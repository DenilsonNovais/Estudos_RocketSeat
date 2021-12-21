/* 
    # Buscando e contando dados em array  #

    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios
    
        . Contar o número de categorias e o numero de livros de cada categoria
        . Contar o numero de autores
        . Mostrar livros do autor Augusto Cury
        . Transformar a função acima em uma função que ira receber o nome do autor e 
        devolver os livros deste autor
    
*/


const livrosPorCategoria = [
    {
        categoria: "Riqueza",
        livros: [
            {
                titulo: "Os segredos da mente milionária",
                autor: "T. Harv Eker",
            },
            {
                titulo: "O homem mais rico da Babilônia",
                autor: "George S. Clarson",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter",
            },

        ],
    },
    {
        categoria: "Inteligencia Emocional",
        livros: [
            {
                titulo: "Você é insubistituível",
                autor: "Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do século",
                autor: "Augusto Cury",
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey",
            },

        ], 
    },
];

//Contar o número de categorias
const totalCategorias = livrosPorCategoria.length
console.log(totalCategorias)

//Contar o numero de livros de cada categoria
//pegando uma categoria dento da categorias de livros
for(let categoria of livrosPorCategoria) {
   console.log('Total de livros da categoria: ', categoria.categoria)
   console.log(categoria.livros.length) 
}

//Contar o numero de autores
function contarAutores() {
    let autores = [];

    for(let categoria of livrosPorCategoria) {
        for(let livros of categoria.livros) {
            //Se dentro do array já estiver o nome dos autores do livro não fazer nada
            if(autores.indexOf(livros.autor) == -1) {
                autores.push(livros.autor)
            }
        }
    }

    console.log('Total de autores: ', autores.length)
}

contarAutores()

//Mostrar livros do autor Augusto Cury
function livrosAugustoCury() {
    let livros = [];

    for(let categoria of livrosPorCategoria) {
        for(let livros of categoria.livros) {
            //Se dentro do array já estiver o nome dos autores do livro não fazer nada
            if(livros.autor === "Augusto Cury") {
                livros.push(livros.titulo)
            }
        }
    }

    console.log("Livros do autor: ", livros)

}

livrosAugustoCury("Augusto Cury")


//receber o nome do autor e devolver os livros deste autor
function livrosAutor(autor) {
    let livros = [];

    for(let categoria of livrosPorCategoria) {
        for(let livros of categoria.livros) {
            //Se dentro do array já estiver o nome dos autores do livro não fazer nada
            if(livros.autor === autor) {
                livros.push (livros.titulo)
            }
        }
    }

    console.log(`Livros do autor ${autor}: ${livros.join(", ")}`)
    
}

livrosAutor("Augusto Cury")
