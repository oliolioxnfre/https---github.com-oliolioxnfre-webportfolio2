import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// Serve static assets with a specific rule to avoid EISDIR on directories
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));

// Serve other static files from dist root
app.use(express.static(path.join(__dirname, 'dist'), {
  index: false, // Don't serve index.html automatically to allow the fallback to handle it
  redirect: false
}));

// Fallback all routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
