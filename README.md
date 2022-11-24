## Proyecto Final

Coder House - Desarrollo Backend - curso 43495

Alumna : Carla Ricciardi

## Rutas de PRODUCTOS

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Verb</th>
      <th scope="col">path</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Get</td>
      <td><a href="http://localhost:8080/api/productos" target="_blank">Get products</td>
      <td>Devuelve todos los productos</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Get</td>
      <td><a href="http://localhost:8080/api/productos/1" target="_blank"/>Get product by id</td>
      <td>Devuelve un producto segun el id</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Post</td>
      <td><a href="http://localhost:8080/api/productos" target="_blank"/>Add product</td>
      <td>Devuelve todos los productos <strong>testear en Postman</strong> </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Put</td>
      <td><a href="http://localhost:8080/api/productos/3" target="_blank"/>Edit product</td>
      <td>Edita un producto segun su id, <strong>testear en Postman</strong> </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Delete</td>
      <td><a href="http://localhost:8080/api/productos/:id" target="_blank"/>Remove product</td>
      <td>Elimina un producto por id <strong>testear en Postman</strong>  </td>
     </tr>
  </tbody>
</table>

## Rutas de CARRITO

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Verb</th>
      <th scope="col">path</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Get</td>
      <td><a href="http://localhost:8080/api/carrito/" target="_blank"/>Get carts</td>
      <td>Devuelve todos los carritos</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Get</td>
      <td><a href="http://localhost:8080/api/carrito/1" target="_blank"/>Get cart by id</td>
      <td>Devuelve un carrito segun el id</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Get</td>
      <td><a href="http://localhost:8080/api/carrito/1/productos" target="_blank"/>Get product from cart</td>
      <td>Devuelve los productos de un carrito </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Post</td>
      <td><a href="http://localhost:8080/api/carrito/" target="_blank"/>Create cart </td>
      <td>Agrega un carrito <strong>testear en Postman</strong>Crea un carrito</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Post</td>
      <td><a href="http://localhost:8080/api/carts/1/productos" target="_blank"/>Add product in cart</td>
      <td>Agrega a un carrito especifico un producto <strong>testear en Postman</strong>  </td>
     </tr>
      <tr>
      <th scope="row">6</th>
      <td>Delete</td>
      <td><a href="http://localhost:8080/api/carrito/:id" target="_blank"/>Clean cart</td>
      <td>Vacia un carrito segun su id</td>
     </tr>
       <tr>
      <th scope="row">7</th>
      <td>Delete</td>
      <td><a href="http://localhost:8080/api/carts/2/productos/1" target="_blank"/>Remove product from cart</td>
      <td>Elimina de un carrito  un producto por id  <strong>testear en Postman</strong>  </td>
     </tr>
  </tbody>
</table>
