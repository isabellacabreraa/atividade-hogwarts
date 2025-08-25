import express from "express";

import dados from "./src/data/dados.js"

const { bruxos, casas, varinhas, animais, pocoes} = dados;

const app = express();
app.use(express.json());

const serverPort = 3000;

app.get("/",(req, res) => {
    res.send("Servidor funcionando...");
})

app.get("/bruxos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const bruxo = bruxos.find((b) => b.id === id);

  if (bruxo) {
    res.status(200).json(bruxo);
  } else {
    res.status(404).json({
      mensagem: "Bruxo(a) não encontrado!",
    });
  }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome;
    nome = nome.toLowerCase();

    const nomeFiltrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

    if (nomeFiltrados) {
        res.status(200).json(nomeFiltrados);
    } else {
        res.status(404).json(nomeFiltrados);
            mensagem: "Bruxo não encontrado!"
    }
})

app.get("/bruxos", (req,res) => {
  res.status(200).json(bruxos);
});

app.get("/casas", (req,res) => {
  res.status(200).json(casas);
});

app.get("/varinhas", (req,res) => {
  res.status(200).json(varinhas);
});

app.get("/animais", (req,res) => {
  res.status(200).json(animais);
});

app.get("/pocoes", (req,res) => {
  res.status(200).json(pocoes);
});

app.get("/varinhas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const varinha = varinhas.find((v) => v.id === id);

  if (varinha) {
    res.status(200).json(varinha);
  } else {
    res.status(404).json({
      mensagem: "Varinha não encontrada!",
    });
  }
});

app.get("/animais/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const animal = animais.find((a) => a.id === id);

  if (animal) {
    res.status(200).json(animal);
  } else {
    res.status(404).json({
      mensagem: "Animal não encontrado!",
    });
  }
});

app.get("/casas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const casa = casas.find((c) => c.id === id);

  if (casa) {
    res.status(200).json(casa);
  } else {
    res.status(404).json({
      mensagem: "Casa não encontrada!",
    });
  }
});

app.get("/pocoes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pocao = pocoes.find((p) => p.id === id);

  if (pocao) {
    res.status(200).json(pocao);
  } else {
    res.status(404).json({
      mensagem: "Poção não encontrada!",
    });
  }
});


app.listen(serverPort, () => {
    console.log("Servidor está rodando...");
});