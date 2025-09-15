# 📝 NotesVault API

A lightweight **Notes API** where users can create, update, delete, and filter notes with tags. Perfect for learning **Node.js** and **Express**! 🚀



## 📦 Features

- Create a new note with **title, content, and tags** ✏️  
- Get all notes or filter by **tag** 🔖  
- Get a single note by **ID** 🔍  
- Update notes partially (title, content, or tags) 🛠️  
- Delete notes ❌  
- Lightweight in-memory storage (for learning purposes) 🧠  



## 📁 Data Model

```json
Note {
  _id: ObjectId,
  userId: ObjectId,
  title: string,
  content: string,
  tags: [string],
  createdAt: Date
}
