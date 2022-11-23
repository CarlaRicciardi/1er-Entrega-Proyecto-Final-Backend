const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const productsRouter = require('./server/products.js');
const cartRouter = require('./server/cart.js');

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(__dirname + '/client'));

//routes
app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartRouter);

const cors = require('cors');
app.use(cors({ origin: '*' }));

// //form
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

// app.post('/api/productos', (req, res) => {
//   const body = req.body;
//   const file = req.file;
//   try {
//     contenedor.save({ ...body, thumbnail: file ? file.filename : '' });
//     res.json({ success: true, error: false });
//     console.log(body);
//   } catch (err) {
//     res.json({ error: true, err });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server activo, escuchando en puerto http://localhost:${PORT}`);
});
