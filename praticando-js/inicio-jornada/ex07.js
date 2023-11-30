/* 
    buscando e contando dados em Arrays 
    
Baseando no Array de livros por categoria abaixo, faça os seguintes desafios

    * contar o número de categorias e o número de livros em cada categoria
    * contar o número de autores
    * mostrar livros do autor auguto cury
    * transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",    
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {   
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",     
            },
        ],
    },
];

const totalCategories = booksByCategory.length  //contar as categorias do array

console.log(totalCategories)

for (let category of booksByCategory) {
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors()

function booksOfAuthor(author) {
    let books = [];
    for(let category of booksByCategory) {
            for (let book of category.books) {
        if(book.author === author) {
            books.push( book.title)
        }
    }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor("George S. Clason")