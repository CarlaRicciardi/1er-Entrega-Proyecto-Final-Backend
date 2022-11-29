const fs = require('fs');

class Contenedor {
  constructor(file) {
    this.file = file;
  }

  async save(objectProduct) {
    const data = await fs.promises.readFile(this.file, 'utf-8');
    const dataParse = JSON.parse(data);

    const id = dataParse.length + 1;

    objectProduct.id = id;

    dataParse.push(objectProduct);

    const dataString = JSON.stringify(dataParse, null, 2);
    await fs.promises.writeFile(this.file, dataString);
  }

  async getById(id) {
    const data = await fs.promises.readFile(this.file, 'utf-8');
    const dataParse = JSON.parse(data);
    //lo parseo para convertirlo en array y asi obtener el id mediante find
    const product = dataParse.find((product) => product.id == id);

    if (product) {
      return product;
    } else {
      return 'product not find';
    }
  }

  async getAll() {
    const data = await fs.promises.readFile(this.file, 'utf-8');
    return JSON.parse(data);
  }

  async deleteById(id) {
    try {
      const products = await this.getAll();
      const productFind = products.find((el) => el.id == id);
      if (!productFind) return console.log('el id no existe');
      const filtradoId = products.filter((e) => e.id != id);
      await fs.promises.writeFile(this.file, JSON.stringify(filtradoId));
      console.log('producto eliminado');
    } catch (err) {
      console.log(err);
    }
  }

  async deleteAll() {
    await fs.writeFileSync(this.file, '[]');
    console.log('Se han eliminado todos los productos');
  }

  async update(id, name, description, cod, img, price, stock) {
    const productos = await this.getAll();
    const producto = productos.find((product) => product.id == id);

    producto.name = name;
    producto.description = description;
    producto.cod = cod;
    producto.img = img;
    producto.price = price;
    producto.stock = stock;

    console.log(producto);
    await fs.promises.writeFile(this.file, JSON.stringify(productos));
    return producto;
  }
}

module.exports = Contenedor;
