class ProductManager {

    constructor(){
        this.products = [];
        this.id = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (this.products.find(product => product.code !== code) || this.products.length === 0) {
            if (title && description && price && thumbnail && code && stock) {
                const product = {
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock,
                    id: this.id
                };
                this.id++;
                this.products.push(product);
            }
            else {
                console.log("ERROR: Todos los campos son obligatorios");
            }
        }
        else {
            console.log("ERROR: El campo 'CODE' ya existe");
        }
    }

    getProducts(){
        console.log(this.products);
    }

    getProductById(id) {
        if (this.products.find(product => product.id === id)) {
            let result = this.products.filter(product => product.id === id);
            console.log(result);
        }
        else {
            console.log("ERROR: ID no encontrado");
        }
    }
}

let products = new ProductManager();

products.addProduct('CDJ 3000', 'Mejore su poder creativo con nuestro multirreproductor insignia evolucionado, el CDJ-3000', 1605000, 'https://deejaystore.com.ar/1119-large_default/pioneer-cdj-900-nexus.jpg', 'CDJ3000B', 8);

products.addProduct('DJM-V10', 'Forja un nuevo sonido con la DJM-V10, una nueva generación de mezcladoras surgida de ideas innovadoras.', 1600000, 'https://www.pioneerdj.com/-/media/pioneerdj/images/products/mixer/djm-v10/djm-v10-main.png?h=1170&w=1029&hash=4BE6668E0CE85C3CB91B39887F6B84F1', 'DJMV10', 4);

products.getProducts();

products.getProductById(0);

products.getProductById(5);