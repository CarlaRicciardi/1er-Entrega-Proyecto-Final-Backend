const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const productsRouter = require('./server/products');
const cartRouter = require('./server/cart');

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(__dirname + '/client'));

//routes
app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartRouter);

const cors = require('cors');
app.use(cors({ origin: '*' }));

app.get('/*', (req, res) => {
  res.json({ error: true, descripcion: 'ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Server activo, escuchando en puerto http://localhost:${PORT}`);
});
