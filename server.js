import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000; // El puerto que ya tienes configurado

app.use(express.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para leer archivos Markdown
app.get('/api/content', (req, res) => {
  const directoryPath = path.join(process.cwd(), 'src/content/blog');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan directory' });
    }

    // Filtrar solo los archivos .md
    const markdownFiles = files.filter(file => path.extname(file) === '.md');
    res.json({ files: markdownFiles });
  });
});

// Ruta para actualizar archivos Markdown
app.post('/api/content/:filename', (req, res) => {
  const { filename } = req.params;
  const { content } = req.body;
  const filePath = path.join(process.cwd(), 'src/content/blog', `${filename}.md`);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error writing file' });
    }
    res.json({ message: 'File updated successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
