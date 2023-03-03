import ProductManager from "./ProductManager.js";

const manager = new ProductManager('./products.json');

const test = async () => {
    console.log(await manager.getProducts());

    const product = {
        title: 'Producto 1',
        description: 'Descripcion',
        price: 1,
        thumbnail: 'Sin Imagen',
        code: 'Producto1',
        stock: 1
    };

    await manager.addProducts(product);

    console.log(await manager.getProducts());

    console.log(await manager.getProductById(1));


    const productUpdated = {
        title: 'Producto 1 Actualizado',
        description: 'Descripcion',
        price: 1,
        thumbnail: 'Sin Imagen',
        code: 'Producto1',
        stock: 1
    };

    await manager.updateProducts(1, productUpdated);

    console.log(await manager.getProducts());

}

test();