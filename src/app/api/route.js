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
    nome: "Gladiator",
    genero: "Ação, Aventura, Drama",
    imagem_url: "https://m.media-amazon.com/images/I/51cV7a82q+L._AC_SY300_SX300_.jpg",
    url_filme: "https://www.imdb.com/title/tt0167261/"
  },
  {
    id: 3,
    nome: "The Lord of the Rings: The Two Towers",
    genero: "Aventura, Drama, Fantasia",
    imagem_url: "https://m.media-amazon.com/images/I/81wByEaQrlL._AC_SY879_.jpg",
    url_filme: "https://www.imdb.com/title/tt0167261/"
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
    nome: "The Lord of the Rings: The Fellowship of the Ring",
    genero: "Aventura, Drama, Fantasia",
    imagem_url: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY879_.jpg",
    url_filme: "https://www.imdb.com/title/tt0120737/"
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
    nome: "Titanic",
    genero: "Drama, Romance",
    imagem_url: "https://m.media-amazon.com/images/I/619sVTc1mwL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    url_filme: "https://www.imdb.com/title/tt0167261/"
  },
  { 
    id: 9,
    nome: "The Lion King",
    genero: "Animação, Aventura, Drama",
    imagem_url: "https://cdn.culturagenial.com/imagens/lionkingposter-cke.jpg",
    url_filme: "https://www.imdb.com/title/tt0167261/"
  },

  
  

];
// Handler para a rota POST
export async function POST(request) {
  try {
    const { nome, genero, imagem_url, url_filme } = await request.json();
    const novoFilme = {
      id: Date.now(),
      nome,
      genero,
      imagem_url,
      url_filme,
    };
    filmes.push(novoFilme);
    return NextResponse.json(novoFilme);
  } catch (error) {
    return NextResponse.error('Erro interno do servidor', { status: 500 });
  }
}

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

