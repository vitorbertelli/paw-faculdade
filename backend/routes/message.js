const express = require("express");
const router = express.Router();

const Message = require("../models/message");

router.get("/", async function(req, res, next) {
  try {
    const messageFindTodos = await Message.find({});

    res.status(200).json({
      myMsgSucesso: "Mensagens recuperadas com sucesso!",
      objsMessagesRecuperados: messageFindTodos
    });
  }
  catch(error) {
    return res.status(500).json({
      myErrorTitle: "Serve-side: Um erro aconteceu ao buscar as mensagens.",
      myError: error 
    });
  }
});

router.post("/", async function(req, res, next) {
  const messsageObject = new Message({
    content: req.body.content
  });
  try {
    const messageSave = await messsageObject.save();

    res.status(201).json({
      myMsgSucesso: "Mensagem salva com sucesso!",
      objMessageSave: messageSave
    });
  }
  catch(error) {
    return res.status(500).json({
      myErrorTitle: "Serve-side: Um erro aconteceu ao salvar a mensagem.",
      myError: error 
    });
  }
});

module.exports = router;