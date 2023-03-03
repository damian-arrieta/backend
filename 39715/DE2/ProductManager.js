import fs from 'fs';

export default class ProductManager {

    constructor (path) {
        this.path = path;
    }

    getProducts = async () => {
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
            const products = await this.getProducts();
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
        const products = await this.getProducts();
    
        const product = products.find((p) => p.id === productId);
    
        if (!product) {
            console.error('Product not found');
            return;
        }
    
        return product;
    };

    updateProducts = async (id, newProduct) => {
        const products = await this.getProducts();
    
        const updatedProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, ...newProduct };
            } else {
                return product;
            }
        });
    
        await fs.promises.writeFile(this.path, JSON.stringify(updatedProducts, null, '/t'));
    };

    deleteProduct = async (id) => {
        let products = await this.getProducts();
    
        try {
            products = products.filter(product => product.id !== id);
            await fs.promises.writeFile(path, JSON.stringify(products, null, '/t'));
        } catch (error) {
            console.log(error.message);
        }
    };
}