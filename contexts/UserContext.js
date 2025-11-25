// contexts/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [cardapio, setCardapio] = useState([
    {
      id: "1",
      nome: "Coxinha",
      descricao: "Frango com catupiry",
      preco: 5.0,
      imagem: "https://imagens.jotaja.com/produtos/b9e897e7-6533-469d-b25c-cb37edad18cb.jpg"
    },
    {
      id: "2",
      nome: "Pastel",
      descricao: "Carne bem recheado",
      preco: 6.5,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1b-Iyr_3SYUupEvwCzwHNw7iSyFX_Go4tQA&s"
    },
    {
      id: "3",
      nome: "Suco Natural",
      descricao: "Suco de laranja fresco",
      preco: 4.0,
      imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/14090813/Suco-de-laranja-1.webp"
    },
    {
      id: "4",
      nome: "Sanduíche",
      descricao: "Presunto e queijo",
      preco: 7.0,
      imagem: "https://assets.unileversolutions.com/recipes-v2/99461.jpg"
    },
    {
      id: "5",
      nome: "Refrigerante",
      descricao: "Lata gelada",
      preco: 5.5,
      imagem: "https://wx.mlcdn.com.br/ponzi/production/portaldalu/43225.jpg"
    },
    {
      id: "6",
      nome: "Bolo",
      descricao: "Bolo de chocolate",
      preco: 4.5,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-eSgBSgDV5cYoqiEo1_85g_xweURzH-kuw&s"
    },
  ]);

  const [carrinho, setCarrinho] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, cardapio, setCardapio, carrinho, setCarrinho }}>
      {children}
    </UserContext.Provider>
  );
};
