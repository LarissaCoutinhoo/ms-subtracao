const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ erro: 'Entrada inválida' });
  }
  const resultado = a - b;
  res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('ms-subtracao rodando na porta', PORT);
});
