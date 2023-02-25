import fs from 'fs';

export default class ProductManager {

    constructor () {
        this.path = './products.json';
    }

    getProduct = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, "utf-8");
                const result = JSON.parse(data);
                console.log(result);
                return result;
              } else {
                return [];
              }
        } 
        catch (error) {
            if (error.message.includes('no such file or directory'))
            return [];

            else console.error(error.message);
        }
    }

    addProducts = async (product) => {
        try {
            const products = await this.getProduct();
            if (products.length === 0) {
              product.id = 1;
            } else {
              product.id = products[products.length - 1].id + 1;
            }
            products.push(product);
            await fs.promises.writeFile(
              this.path,
              JSON.stringify(products, null, "\t")
            );
            return product;
        }
        catch (error) {
            console.error(error.message);
        }
    }

    getProductById = async (productId) => {
        const products = await this.getProduct();

        try {
            const productExist = await products().map((product) => product.id === productId);
    
            if (!productExist) {
                console.error('Not found');
                return;
            }
    
            else {
                await fs.promises.writeFile(path, JSON.stringify(productExist, null, '/t'));
            }
        }
        catch (error) {
            console.error(error.message);
        }
    }

    updateProducts = async (id, product) => {

        const products = await this.getProduct();
        
        const newProduct = product;

        try {
            const updateProducts = products.map((product) => {
                if (product.id === id) {
                    return { ...newProduct };
                }
                else {
                    return { ...product }
                }
            })

            await fs.promises.writeFile(path, JSON.stringify(updateProducts, null, '/t'));

        }

        catch (error) {
            console.log(error.message);
        }
    }

    deleteProduct = async (id) => {
        let products = await this.getProduct();

        try {
            products = products.filter(product => product.id != id);
            await fs.promises.writeFile(path, JSON.stringify(products, null, '/t'));
        }

        catch (error) {
            console.log(error.message);
        }
    }
}