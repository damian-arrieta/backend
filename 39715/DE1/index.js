class ProductManager {
    constructor () {
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        let codeExist = false;

        this.products.forEach((product) => {
            if (product.code === code) {
                codeExist = true
            } 
        });

        if (!codeExist) {
            if (title && description && price && thumbnail && code && stock) {
                const product = {
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock,
                    id: this.products.length + 1
                }
                this.products.push(product);
            }
            else {
                console.log('Error: Deben completarse todos los campos');
            }
        }
        else {
            console.log('Error: El campo "Code" ya existe');
        }
    }

    getProducts = () => {
        console.log(this.products);
    }

    getProductsById = (productId) => {
        const productExist = this.products.find((product) => product.id === productId);
        let result = this.products.filter(product => product.id === productId);

        if (!productExist) {
            console.log('Not found');
            return;
        }

        else {
            console.log(result);
        }
    }
}

const productManager = new ProductManager ();
productManager.addProduct('Producto 1', 'Descripcion', 1, 'Imagen no cargada', 'Codigo 1', 1);
productManager.addProduct('Producto 2', 'Descripcion', 1, 'Imagen no cargada', 'Codigo 2', 1);
productManager.getProducts();
productManager.getProductsById(2);
productManager.getProductsById(5);
productManager.addProduct('Producto', 'Descripcion', 1, 'Imagen no cargada', 'Codigo 2', 1);