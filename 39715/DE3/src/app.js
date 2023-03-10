const express = require('express');
const ProductManager = require('./main');

const app = express();

const products = new ProductManager('products.txt');

app.get('/products', async (req, res) => {
    const { limit } = req.query;
    if (limit) {
        const productsList = await products.getProducts();
        const productsLimited = productsList.slice(0, limit);
        res.send(productsLimited);
    }
    else {
        const showProducts = await products.getProducts();
        res.send(showProducts);
    }
});

app.get('/products/:pid', async (req, res) => {
    const productId = req.params.pid;
    const showProduct = await products.getProductById(parseInt(productId), {});
    if (showProduct) {
        res.send(showProduct);
    } else {
        res.status(404).send("Product not found");
    }
})

app.listen(8080, () => console.log('Servidor funcionando'));
