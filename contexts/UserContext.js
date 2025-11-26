import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme } from "../contexts/theme"; // importa paletas

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Usuário fictício (nome e matrícula)
  const [user, setUser] = useState({ nome: "", matricula: "" });

  // Histórico de compras
  const [historico, setHistorico] = useState([]);

  // Tema claro/escuro
  const [tema, setTema] = useState("light");

  // Cardápio fixo
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

  // Carrinho
  const [carrinho, setCarrinho] = useState([]);

  // Paleta de cores atual
  const themeColors = tema === "light" ? lightTheme : darkTheme;

  // Carregar dados persistidos ao iniciar
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const userData = await AsyncStorage.getItem("usuario");
        const historicoData = await AsyncStorage.getItem("historico");
        const temaData = await AsyncStorage.getItem("tema");

        if (userData) setUser(JSON.parse(userData));
        if (historicoData) setHistorico(JSON.parse(historicoData));
        if (temaData) setTema(temaData);
      } catch (error) {
        console.log("Erro ao carregar dados:", error);
      }
    };
    carregarDados();
  }, []);

  // Salvar usuário
  const salvarUsuario = async (novoUsuario) => {
    setUser(novoUsuario);
    await AsyncStorage.setItem("usuario", JSON.stringify(novoUsuario));
  };

  // Adicionar compra ao histórico
  const adicionarCompra = async (compra) => {
    const novoHistorico = [...historico, compra];
    setHistorico(novoHistorico);
    await AsyncStorage.setItem("historico", JSON.stringify(novoHistorico));
  };

  // Alternar tema
  const alternarTema = async () => {
    const novoTema = tema === "light" ? "dark" : "light";
    setTema(novoTema);
    await AsyncStorage.setItem("tema", novoTema);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        salvarUsuario,
        historico,
        adicionarCompra,
        tema,
        alternarTema,
        themeColors, // 🔑 exposto para todas as telas
        cardapio,
        setCardapio,
        carrinho,
        setCarrinho,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
