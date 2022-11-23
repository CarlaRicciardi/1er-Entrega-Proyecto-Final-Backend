const express = require('express');
const { Router } = express;
const cartRouter = Router();

const classCarrito = require('./classCart');
const cart = new classCarrito('./data/carrito.json');


cartRouter.post('/', async (req, res) => {
  const { name, description, cod, img, price, stock, id } = req.body;
  let newCart = await cart.createCart({
    name,
    description,
    cod,
    img,
    price,
    stock,
    id,
  });
  res.json({ idNewCart: newCart });
});

cartRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await cart.deleteCartById(id);
  res.json({ carritoEliminado: id });
});

cartRouter.get('/:id/productos', async (req, res) => {
  const { id } = req.params;
  let productsList = await cart.getAllCart(id);
  res.json({ productos: productsList });
});

cartRouter.post('/:id/productos', async (req, res) => {
  const { id } = req.params;
  let { ...newProd } = req.body;
  await cart.addCartbyId(id, newProd);
});

cartRouter.delete('/:id/productos/:id_prod', async (req, res) => {
  const { id } = req.params;
  const { id_prod } = req.params;
  await cart.deleteProdCart(id, id_prod);
});

module.exports = cartRouter;
