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


    addProducts = async (product) => {
        const db = await this.getProducts();

        try {
            let newId = Math.max(db.map(product => product.id)) +1;

            const newProduct = { ...product, id: newId };

            db.push(newProduct);

            await this.writeFile(db);

        }

        catch (err) {
            console.log(err.message);
        }

    }


    getProductById = async (id, product) => {
        const products = await this.getProducts();

        const newProduct = product;

        try {
            const updateProducts = products.map((product) => {
                if (product.id === id) {
                    return { ...product, ...newProduct };
                }

                else {
                    return { ...product }
                }
            });

            await this.writeFile(updateProducts);
        }

        catch (err) {
            console.log(err.message);
        }
    }


    updateProducts = async (id, product) => {

        const products = await this.getProducts();
        
        const newProduct = product;

        try {
            const updateProducts = products.map((product) => {
                if (product.id === id) {
                    return { ...product, ...newProduct };
                }
                else {
                    return { ...product }
                }
            })

            await this.writeFile(updateProducts);

        }

        catch (err) {
            console.log(err.message);
        }
    }


    deleteProduct = async (id) => {
        let products = await this.getProducts();

        try {
            products = products.filter(product => product.id != id);
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
        title: 'CDJ 3000',
        description: 'Mejore su poder creativo con nuestro multirreproductor insignia evolucionado, el CDJ-3000',
        price: 2400,
        thumbnail: 'https://deejaystore.com.ar/1119-large_default/pioneer-cdj-900-nexus.jpg',
        code: 'CDJ3000B',
        stock: 8
    };

    await products.addProducts(product);

    product = {
        title: 'Producto 2',
        description: 'Descripción producto 2',
        price: 1000,
        thumbnail: 'Sin imagen',
        code: 'PROD2',
        stock: 8
    }

    await products.addProducts(product);

    product = {
        title: 'Producto 3',
        description: 'Descripción producto 3',
        price: 1000,
        thumbnail: 'Sin imagen',
        code: 'PROD3',
        stock: 8
    }

    await products.addProducts(product);

    product = {
        title: 'Producto 4',
        description: 'Descripción producto 4',
        price: 1000,
        thumbnail: 'Sin imagen',
        code: 'PROD4',
        stock: 8
    }

    await products.addProducts(product);

    product = {
        title: 'Producto 5',
        description: 'Descripción producto 5',
        price: 1000,
        thumbnail: 'Sin imagen',
        code: 'PROD5',
        stock: 8
    }

    await products.addProducts(product);
}
 test();
module.exports = ProductManager;