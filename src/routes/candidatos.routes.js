import { Router } from "express";

const candidatosRoutes = Router();

let candidatos = [
   {
    id: Math.floor(Math.random() * 1000000),
    nome: "Capitã Lucimara Fake",
    partido: "PSD",
    idade: 42,
    segundo: true, // Concorrente ao segundo mandato
    propostas: [
        "Aumento do salário mínimo",
        "Redução de impostos",
        "Mais investimentos em educação",
    ],
   },
];

candidatosRoutes.get("/", (req, res) => {
    return res.status(200).json(candidatos);
});

candidatosRoutes.post("/", (req, res) => {
    const {
        nome,
        partido,
        idade,
        segundo,
        propostas,
    } = req.body;

    // Validação dos campos nome e partido
    if (!nome || !partido) {
        return res.status(400).send({
            message: "O nome ou o partido não foi preenchido, criança aleatória!",
        });
    }

    // Validação de idade 
    if (idade < 18) {
        return res.status(400).send({
            message: " O candidato não possui idade suficiente para participar deste debate!",
        });
    }

    const novoCandidato = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        partido,
        idade,
        segundo,
        propostas,
    };

    candidatos.push(novoCandidato);

    return res.status(201).json({
        message: "Candidato cadastrado com sucesso!",
        novoCandidato,
    });
});

candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const candidatos = candidatos.find((politico) => politico.id == id );

    if(!candidato) {
        return res.status(404).json({ message: "Candidato não encontrado!"});
    }

    return res.status(200).json(candidato);
});

candidatosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
})















//Rota para criar uma nova emoção
candidatosRoutes.post("/", (req, res) => {
  const {nome, cor } = req.body
  const novaEmocao = {
    id: emocoes.length + 1,
    nome: nome,
    cor: cor
  }
  emocoes.push(novaEmocao)
  return res.status(201).send ( emocoes )
});

//Rota para buscar uma emoção pelo id
candidatosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  //console.log(id);
  const emocao = emocoes.find((emotion) => emotion.id == id )

  if (!emocao) {
    return res.status(404).send({
      message: "Emoção não encontrada!",
    });
  }

  return res.status(200).send({
    message: "Emoção encontrada",
    emocao,
  });
});

 
candidatosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;

  const emocao = emocoes.find((emotion) => emotion.id == id )

  if (!emocao) {
    return res.status(404).send({
      message: "Emoção não encontrada!",
    });
  }


const {nome, cor } = req.body;
emocao.nome = nome;
emocao.cor = cor;

return res.status(200).send({
  message: "Emoção atualizada",
  emocao,
});
});

candidatosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  const emocao = emocoes.find((emotion) => emotion.id == id )

  if (!emocao) {
    return res.status(404).send({
      message: "Emoção não encontrada!",
    });
  }

  emocoes = emocoes.filter((emotion) => emotion.id != id );


  return res.status(200).send({
    message: "Emoção deletada!",
    emocao,
  });
});


export default candidatosRoutes