// src/app/api/route.js

import { NextRequest, NextResponse } from "next/server";

// Definição dos dados de filmes e gêneros
const filmes = [
  {
    id: 1,
    nome: "Interstellar",
    genero: "Ficção Científica",
    imagem_url: "https://i.pinimg.com/originals/24/a7/dd/24a7ddc20cbba87eb9042febd09a048a.jpg",
    url_filme: "https://www.imdb.com/title/tt0816692/"
  },
  {
    id: 2,
    nome: "The Shawshank Redemption",
    genero: "Drama",
    imagem_url: "https://images-na.ssl-images-amazon.com/images/I/717W9DCnyzL.jpg",
    url_filme: "https://www.imdb.com/title/tt0111161/"
  },
  {
    id: 3,
    nome: "Inception",
    genero: "Ficção Científica",
    imagem_url: "https://images-na.ssl-images-amazon.com/images/I/81p+xe8cbnL._RI_.jpg",
    url_filme: "https://www.imdb.com/title/tt1375666/"
  },
  {
    id: 4,
    nome: "The Godfather",
    genero: "Crime, Drama",
    imagem_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg",
    url_filme: "https://www.imdb.com/title/tt0068646/"
  },
  {
    id: 5,
    nome: "The Dark Knight",
    genero: "Ação, Crime, Drama",
    imagem_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/The_Dark_Knight.jpg/512px-The_Dark_Knight.jpg",
    url_filme: "https://www.imdb.com/title/tt0468569/"
  },
  {
    id: 6,
    nome: "Fight Club",
    genero: "Drama",
    imagem_url: "https://images-na.ssl-images-amazon.com/images/I/71QPnEkXygS.jpg",
    url_filme: "https://www.imdb.com/title/tt0137523/"
  },
  {
    id: 7,
    nome: "The Matrix",
    genero: "Ação, Ficção Científica",
    imagem_url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg",
    url_filme: "https://www.imdb.com/title/tt0133093/"
  },
  {
    id: 8,
    nome: "Forrest Gump",
    genero: "Drama, Romance",
    imagem_url: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg",
    url_filme: "https://www.imdb.com/title/tt0109830/"
  },
  {
    id: 9,
    nome: "Pulp Fiction",
    genero: "Crime, Drama",
    imagem_url: "https://vertentesdocinema.com/wp-content/uploads/2022/01/pulp-fiction-2.jpeg",
    url_filme: "https://www.imdb.com/title/tt0110912/"
  },
  {
    id: 10,
    nome: "The Lord of the Rings: The Fellowship of the Ring",
    genero: "Aventura, Drama, Fantasia",
    imagem_url: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY879_.jpg",
    url_filme: "https://www.imdb.com/title/tt0120737/"
  },
  {
    id: 11,
    nome: "The Silence of the Lambs",
    genero: "Crime, Drama, Thriller",
    imagem_url: "https://m.media-amazon.com/images/I/61806LSjYhL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    url_filme: "https://www.imdb.com/title/tt0102926/"
  },
  {
    id: 12,
    nome: "The Green Mile",
    genero: "Crime, Drama, Fantasia",
    imagem_url: "https://m.media-amazon.com/images/I/51mvJdnlXrL._AC_.jpg",
    url_filme: "https://www.imdb.com/title/tt0120689/"
  },
  {
    id: 13,
    nome: "Schindler's List",
    genero: "Biografia, Drama, História",
    imagem_url: "https://m.media-amazon.com/images/I/71EtVRky4eL._AC_SY879_.jpg",
    url_filme: "https://www.imdb.com/title/tt0108052/"
  },
  {
    id: 14,
    nome: "Goodfellas",
    genero: "Biografia, Crime, Drama",
    imagem_url: "https://m.media-amazon.com/images/I/61mNMoD4YrL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    url_filme: "https://www.imdb.com/title/tt0099685/"
  },
  {
    id: 15,
    nome: "The Godfather: Part II",
    genero: "Crime, Drama",
    imagem_url: "https://m.media-amazon.com/images/I/51KSlBeZYcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    url_filme: "https://www.imdb.com/title/tt0071562/"
  },
  {
    id: 16,
    nome: "The Lord of the Rings: The Two Towers",
    genero: "Aventura, Drama, Fantasia",
    imagem_url: "https://m.media-amazon.com/images/I/81wByEaQrlL._AC_SY879_.jpg",
    url_filme: "https://www.imdb.com/title/tt0167261/"
  },
  {
    id: 17,
    nome: "Se7en",
    genero: "Crime, Drama, Mistério",
    imagem_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/27/Seven_1995.jpg/512px-Seven_1995.jpg"
  },
  {
    id: 18,
    nome: "Gladiator",
    genero: "Ação, Aventura, Drama",
    imagem_url: "https://m.media-amazon.com/images/I/51cV7a82q+L._AC_SY300_SX300_.jpg"
  },
  {
    id: 19,
    nome: "Titanic",
    genero: "Drama, Romance",
    imagem_url: "https://m.media-amazon.com/images/I/619sVTc1mwL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    id: 20,
    nome: "Braveheart",
    genero: "Biografia, Drama, História",
    imagem_url: "https://m.media-amazon.com/images/I/719f8nWVRnL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    id: 21,
    nome: "The Departed",
    genero: "Crime, Drama, Thriller",
    imagem_url: "https://m.media-amazon.com/images/I/71JMspdKpAL.jpg"
  },
  {
    id: 22, 
    nome: "The Usual Suspects",
    genero: "Crime, Drama, Mistério",
    imagem_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/UsualSuspects1995.jpg/512px-UsualSuspects1995.jpg"
  },
  { 
    id: 23,
    nome: "The Lion King",
    genero: "Animação, Aventura, Drama",
    imagem_url: "https://cdn.culturagenial.com/imagens/lionkingposter-cke.jpg"
  },
  {
    id: 24,
    nome: "The Sixth Sense",
    genero: "Drama, Mistério, Suspense",
    imagem_url: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/4AfSDjjCy6T5LA1TMz0Lh2HlpRh.jpg"
  },
 
  
  

];

// Handler para a rota GET
export async function GET() {
  try {
    // Retorna os dados dos filmes como JSON
    return NextResponse.json(filmes);
  } catch (error) {
    // Em caso de erro, retorna uma resposta de erro com status 500
    return NextResponse.error('Erro interno do servidor', { status: 500 });
  }
};
