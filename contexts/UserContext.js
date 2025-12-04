import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme } from "../contexts/theme";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Feedbacks
  const [feedbacks, setFeedbacks] = useState([]);
  const adicionarFeedback = async (novoFeedback) => {
    const novos = [...feedbacks, novoFeedback];
    setFeedbacks(novos);
    await AsyncStorage.setItem("feedbacks", JSON.stringify(novos));
  };
  const limparFeedbacks = async () => {
    setFeedbacks([]);
    await AsyncStorage.removeItem("feedbacks");
  };

  // Usuário (aluno ou admin)
  const [user, setUser] = useState({ nome: "", matricula: "", tipo: "" });
  const salvarUsuario = async (novoUsuario) => {
    setUser(novoUsuario);
    await AsyncStorage.setItem("usuario", JSON.stringify(novoUsuario));
  };

  // Histórico
  const [historico, setHistorico] = useState([]);
  const adicionarCompra = async (compra) => {
    const novo = [...historico, compra];
    setHistorico(novo);
    await AsyncStorage.setItem("historico", JSON.stringify(novo));
  };

  // Tema
  const [tema, setTema] = useState("light");
  const [themeColors, setThemeColors] = useState(lightTheme);

  // Alternar tema (todos podem)
  const alternarTema = async () => {
    const novoTema = tema === "light" ? "dark" : "light";
    setTema(novoTema);
    setThemeColors(novoTema === "light" ? lightTheme : darkTheme);
    await AsyncStorage.setItem("tema", novoTema);
  };

  // Resetar para tema padrão e remover imagem
  const resetarTemaPadrao = async () => {
    const temaPadrao = tema === "dark" ? darkTheme : lightTheme;
    setThemeColors(temaPadrao);
    setBackgroundImage(null);
    await AsyncStorage.removeItem("backgroundImage");
    await AsyncStorage.setItem("tema", tema); // mantém light/dark
    await AsyncStorage.removeItem("themeColors"); // remove custom
  };

  // Imagem de fundo (apenas admin)
  const [backgroundImage, setBackgroundImage] = useState(null);
  const atualizarBackgroundImage = async (url) => {
    if (user?.tipo !== "admin") return;
    setBackgroundImage(url);
    await AsyncStorage.setItem("backgroundImage", url);
  };

  // Cardápio
  const [cardapio, setCardapioState] = useState([
    { id: "1", nome: "Coxinha", descricao: "Frango com catupiry", preco: 5.0, imagem: "https://imagens.jotaja.com/produtos/b9e897e7-6533-469d-b25c-cb37edad18cb.jpg" },
    { id: "2", nome: "Pastel", descricao: "Carne bem recheado", preco: 6.5, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1b-Iyr_3SYUupEvwCzwHNw7iSyFX_Go4tQA&s" },
    { id: "3", nome: "Suco Natural", descricao: "Suco de laranja fresco", preco: 4.0, imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/14090813/Suco-de-laranja-1.webp" },
    { id: "4", nome: "Sanduíche", descricao: "Presunto e queijo", preco: 7.0, imagem: "https://assets.unileversolutions.com/recipes-v2/99461.jpg" },
    { id: "5", nome: "Refrigerante", descricao: "Lata gelada", preco: 5.5, imagem: "https://wx.mlcdn.com.br/ponzi/production/portaldalu/43225.jpg" },
    { id: "6", nome: "Bolo", descricao: "Bolo de chocolate", preco: 4.5, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-eSgBSgDV5cYoqiEo1_85g_xweURzH-kuw&s" },
  ]);
  const atualizarCardapio = async (novoCardapio) => {
    setCardapioState(novoCardapio);
    await AsyncStorage.setItem("cardapio", JSON.stringify(novoCardapio));
  };

  // Carrinho
  const [carrinho, setCarrinho] = useState([]);

  // Função para gerar cor aleatória
  const gerarCorAleatoria = () => {
    const letras = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) cor += letras[Math.floor(Math.random() * 16)];
    return cor;
  };

  // Trocar cores aleatórias (apenas admin, persiste)
  const trocarCoresAleatorias = async () => {
    if (user?.tipo !== "admin") return;

    const novaPaleta = {
      background: gerarCorAleatoria(),
      text: gerarCorAleatoria(),
      card: gerarCorAleatoria(),
      border: gerarCorAleatoria(),
      highlight: gerarCorAleatoria(),
      buyButton: gerarCorAleatoria(),
      cartButton: gerarCorAleatoria(),
      loginAdminButton: gerarCorAleatoria(),
    };

    setThemeColors(novaPaleta);
    setTema("custom");

    await AsyncStorage.setItem("tema", "custom");
    await AsyncStorage.setItem("themeColors", JSON.stringify(novaPaleta));
  };

  // Carregar dados persistidos ao iniciar
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const userData = await AsyncStorage.getItem("usuario");
        const historicoData = await AsyncStorage.getItem("historico");
        const temaData = await AsyncStorage.getItem("tema");
        const cardapioData = await AsyncStorage.getItem("cardapio");
        const feedbacksData = await AsyncStorage.getItem("feedbacks");
        const bgImageData = await AsyncStorage.getItem("backgroundImage");

        if (userData) setUser(JSON.parse(userData));
        if (historicoData) setHistorico(JSON.parse(historicoData));
        if (cardapioData) setCardapioState(JSON.parse(cardapioData));
        if (feedbacksData) setFeedbacks(JSON.parse(feedbacksData));
        if (bgImageData) setBackgroundImage(bgImageData);

        if (temaData) {
          setTema(temaData);
          if (temaData === "dark") {
            setThemeColors(darkTheme);
          } else if (temaData === "light") {
            setThemeColors(lightTheme);
          } else if (temaData === "custom") {
            const themeData = await AsyncStorage.getItem("themeColors");
            if (themeData) setThemeColors(JSON.parse(themeData));
          }
        }
      } catch (error) {
        console.log("Erro ao carregar dados:", error);
      }
    };
    carregarDados();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        salvarUsuario,
        historico,
        adicionarCompra,
        tema,
        alternarTema,
        themeColors,
        trocarCoresAleatorias,
        resetarTemaPadrao,
        cardapio,
        setCardapio: atualizarCardapio,
        carrinho,
        setCarrinho,
        feedbacks,
        adicionarFeedback,
        limparFeedbacks,
        backgroundImage,
        setBackgroundImage: atualizarBackgroundImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
