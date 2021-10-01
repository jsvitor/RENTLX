import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => response.json({ message: "tudo okay!" }));

app.post("/create", (request, response) => {
  const { name } = request.body;
  return response.json({ message: "cadastrado com sucesso!" });
});

app.listen(3333, () => console.log("server is running"));
