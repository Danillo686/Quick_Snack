// contexts/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [cardapio, setCardapio] = useState([
    { id: "1", nome: "Coxinha", descricao: "Frango com catupiry", preco: 5.0, imagem: "https://placehold.co/300x150?text=Coxinha" },
    { id: "2", nome: "Pastel", descricao: "Carne bem recheado", preco: 6.5, imagem: "https://placehold.co/300x150?text=Pastel" },
    { id: "3", nome: "Suco Natural", descricao: "Suco de laranja fresco", preco: 4.0, imagem: "https://placehold.co/300x150?text=Suco" },
    { id: "4", nome: "Sanduíche", descricao: "Presunto e queijo", preco: 7.0, imagem: "https://placehold.co/300x150?text=Sanduiche" },
    { id: "5", nome: "Refrigerante", descricao: "Lata gelada", preco: 5.5, imagem: "https://placehold.co/300x150?text=Refri" },
    { id: "6", nome: "Bolo", descricao: "Bolo de chocolate", preco: 4.5, imagem: "https://placehold.co/300x150?text=Bolo" },
  ]);

  const [carrinho, setCarrinho] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, cardapio, setCardapio, carrinho, setCarrinho }}>
      {children}
    </UserContext.Provider>
  );
};
