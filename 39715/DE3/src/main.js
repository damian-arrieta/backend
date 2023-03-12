const fs = require('fs');

class ProductManager {

    constructor(path) {
        this.products = [];
        this.id = 0;
        this.path = path;
    }

    writeFile = async (data) => {
        try {
            await fs.promises.writeFile(
                this.path, JSON.stringify(data)
            )
        }

        catch (err) {
            console.log(err);
        }
    }

    getProducts = async () => {
        try {
            const objs = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(objs);
        }

        catch (err) {
            if (err.message.includes('no such file or directory'))
            return [];

            else console.log(err.message);
        }
    }

    addProduct = async (product) => {
        const db = await this.getProducts();

        try {
            let newId = Math.max(...db.map(product => product.id), 0) + 1;
            if (isNaN(newId) || newId === undefined) {
                newId = 1;
            }

            const newProduct = { ...product, id: newId };

            db.push(newProduct);

            await this.writeFile(db);

        }

        catch (err) {
            console.log(err.message);
        }
    }

    getProductById = async (id) => {
        const products = await this.getProducts();

        try {
            const product = products.find(p => p.id === id);
            if (!product) {
                console.log(`Product with ID ${id} not found`);
                return {};
            }

            return product;
        } catch (err) {
            console.log(err.message);
        }
    };

    updateProduct = async (id, product) => {
        const products = await this.getProducts();
        const updatedProducts = products.map(p => (p.id === id ? { ...p, ...product } : p));
        await this.writeFile(updatedProducts);
    }

    deleteProduct = async (id) => {
        let products = await this.getProducts();

        try {
            products = products.filter(product => product.id !== id);
            await this.writeFile(products);
        }

        catch (err) {
            console.log(err.message);
        }
    }
}

let products = new ProductManager('products.txt');

const test = async () => {
    let product = {
        title: 'Producto 1',
        description: 'Sin Descripcion',
        price: 10,
        thumbnail: 'sin imagen',
        code: 'Producto1',
        stock: 1
    };

    await products.addProduct(product);

    product = {
        title: 'Producto 2',
        description: 'Sin Descripcion',
        price: 10,
        thumbnail: 'Sin imagen',
        code: 'Producto2',
        stock: 1
    }

    await products.addProduct(product);

    product = {
        title: 'Producto 3',
        description: 'Sin Descripcion',
        price: 10,
        thumbnail: 'Sin imagen',
        code: 'Producto3',
        stock: 1
    }

    await products.addProduct(product);

    product = {
        title: 'Producto 4',
        description: 'Sin Descripcion',
        price: 10,
        thumbnail: 'Sin imagen',
        code: 'Producto4',
        stock: 1
    }

    await products.addProduct(product);

    product = {
        title: 'Producto 5',
        description: 'Sin Descripcion',
        price: 10,
        thumbnail: 'Sin imagen',
        code: 'Producto5',
        stock: 1
    }

    await products.addProduct(product);
}

test();

module.exports = ProductManager;