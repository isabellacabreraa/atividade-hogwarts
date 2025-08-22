import express from "express";
import bruxos from "./src/data/bruxos.js";

const app = express();
app.use(express.json());

const serverPort = 3000;

app.get("/",(req, res) => {
    res.send("Servidor funcionando...");
})

app.get("/bruxos", (req, res) => {
  res.json(bruxos);
});

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

app.listen(serverPort, () => {
    console.log("Servidor está rodando...");
});