const express = require("express");
const data = require("./data");
const app = express();
const PORT = 7000;

app.use(express.json());

app.get("/characters", (req, res) => {
  const charactersList = Object.keys(data.characters).map((id) => ({ ...data.characters[id], id }));

  res.send(charactersList);
});

app.get("/character/:id", (req, res) => {
  const { id } = req.params;
  const character = data.characters[id];

  if (!character) {
    return res.status(404).send(`Unable to find character with id: ${id}`);
  }

  res.send({ ...character, id });
});

app.get("/character/:id/droids", (req, res) => {
  const { id } = req.params;
  const character = data.characters[id];

  if (!character) {
    return res.status(404).send(`Unable to find character with id: ${id}`);
  }

  const droidIds = character.droids;
  const droids = droidIds.map((droidId) => ({ ...data.droids[droidId], id: droidId }));

  res.send(droids);
});

app.post("/character/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const character = data.characters[id];

  if (!character) {
    return res.status(404).send(`Unable to find character with id: ${id}`);
  }

  data.characters[id] = {
    id,
    ...character,
    ...body,
  };

  res.send(data.characters[id]);
});

app.get("/droid/:id", (req, res) => {
  const { id } = req.params;
  const droid = data.droids[id];

  if (!droid) {
    return res.status(404).send(`Unable to find droid with id: ${id}`);
  }

  res.send({ ...droid, id });
});

app.listen(PORT, () => {
  console.log(`
    🚀  Server is running!
    📭  Query at http://127.0.0.1:${PORT}/
  `);
});
