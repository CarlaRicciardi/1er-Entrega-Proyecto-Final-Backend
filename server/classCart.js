const { json } = require('express');
const fs = require('fs');

class Cart {
  constructor(file) {
    this.file = file;
  }

  async createCart(prodIngresado) {
    //Crea un carrito y devuelve su id.
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8');
      const arrayCart = JSON.parse(data);
      let timestamp = Date.now();
      const newCart = {
        id: arrayCart.length + 1,
        timestamp: timestamp,
        products: [prodIngresado],
      };
      arrayCart.push(newCart);
      const newArrayCart = JSON.stringify(arrayCart);
      await fs.promises.writeFile(this.file, newArrayCart);
      return newCart;
    } catch (err) {
      console.log('Hubo un error: ', err);
    }
  }

  async deleteCartById(num) {
    //Vacía un carrito y lo elimina
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8');
      const arrayObj = JSON.parse(data);
      if (arrayObj) {
        const newArray = arrayObj.filter((element) => element.id != num);
        const stringNewArray = JSON.stringify(newArray);
        await fs.promises.writeFile(this.file, stringNewArray);
      } else {
        console.log('no se pudo eliminar carrito');
      }
    } catch (err) {
      console.log(`No se encontró el objeto con id: ${id}`);
      res.json({ error: true });
    }
  }

  async getAllCart(idCart) {
    //Me permite listar todos los productos guardados en el carrito
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8');
      const arrayObj = JSON.parse(data);
      let thisCart = arrayObj.find((element) => element.id == idCart);
      if (thisCart) {
        return thisCart.products;
      } else {
        console.log('no existe ese carrito');
      }
    } catch (err) {
      console.log('Hubo un error: ', err);
    }
  }

  async addCartbyId(idCart, newProd) {
    //Para incorporar productos al carrito por su id de producto
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8');
      const arrayCart = JSON.parse(data);
      let thisCart = arrayCart.find((element) => element.id == idCart);
      if (thisCart) {
        let oldProducts = thisCart.products;
        let addedProduct = oldProducts.concat(newProd);
        let cartWithProducts = { ...thisCart, products: [...addedProduct] };
        let newArrayCart = arrayCart.map((element) => {
          if (element.id == idCart) {
            return { ...cartWithProducts };
          } else {
            return element;
          }
        });

        const stringNewArray = JSON.stringify(newArrayCart);
        console.log(stringNewArray);
        await fs.promises.writeFile(this.file, stringNewArray);
      } else {
        console.log('no existe ese carrito');
      }
    } catch (err) {
      console.log('hubo un error: ', err);
    }
  }

  async deleteProdCart(idCart, idProd) {
    //Eliminar un producto del carrito por su id de carrito y de producto
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8');
      const arrayCart = JSON.parse(data);
      let thisCart = arrayCart.find((element) => element.id == idCart);
      if (thisCart) {
        let oldProducts = thisCart.products;
        let deleteProd = oldProducts.filter((element) => element.id != idProd);
        let cartWithoutProducts = arrayCart.map((element) => {
          if (element.id == idCart) {
            return { ...cartWithoutProducts };
          } else {
            return element;
          }
        });
        const stringNewArray = JSON.stringify(newArrayCart);
        await fs.promises.writeFile(this.file, stringNewArray);
      } else {
        console.log('no existe este carrito');
      }
    } catch (err) {
      console.log('hubo un error: ', err);
    }
  }
}

module.exports = Cart;
