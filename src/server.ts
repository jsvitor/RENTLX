import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ message: "tudo okay!" }));

app.listen(3333, () => console.log("server is running"));
