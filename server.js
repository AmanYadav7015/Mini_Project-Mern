const express = require("express");
const app = express();
app.use(express.json());


let notes = [];


app.get("/", (req, res) => {
  res.send("NotesVault API is running 🚀");
});

app.get("/notes", (req, res) => {
  const { tag } = req.query;

  let result = notes;

  if (tag) {
    result = notes.filter((note) => note.tags.includes(tag));
  }


  const response = result.map((note) => ({
    id: note.id,
    title: note.title,
    tags: note.tags,
    createdAt: note.createdAt,
  }));

  res.json(response);
});


app.post("/notes", (req, res) => {
  const { title, content, tags } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }

  const newNote = {
    id: Date.now().toString(),
    userId: "demoUser123", 
    title,
    content,
    tags: tags || [],
    createdAt: new Date(),
  };

  notes.push(newNote);

  res.status(201).json({ message: "Note created", note: newNote });
});

app.get("/notes/:id", (req, res) => {
  const { id } = req.params;

  const note = notes.find((n) => n.id === id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});


app.patch("/notes/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, tags } = req.body;

  const note = notes.find((n) => n.id === id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  if (title) note.title = title;
  if (content) note.content = content;
  if (tags) note.tags = tags;

  res.json({ message: "Note updated", note });
});


app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(index, 1);

  res.json({ message: "Note deleted" });
});


app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
