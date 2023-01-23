class ProductManager {
    constructor(){
        this.products = [];
        this.id = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if (this.products.find(product => product.code !== code) || this.products.length === 0){
            if(title && description && price && thumbnail && code && stock){
                const product = {
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock,
                    id: this.id
                };
                this.id++
                this.products.push(product);
            } else {
                console.log('ERROR: Todos los campos son obligatorios');
            }
        } else {
            console.log('ERROR: El campo "CODE" ya existe');
        }
    }

    getProducts(){
        console.log(this.products);
    }

    getProductById(id){
        if (this.products.find(product => product.id === id)){
            let result = this.products.filter(product => product.id === id);
            console.log(result);
        } else {
            console.log('ERROR: Not Found');
        }
    }
}

let products = new ProductManager();

products.addProduct('Producto 1', 'Este es el producto 1', 1, 'Imagen producto 1', 'PRD1', 10);
products.addProduct('Producto 2', 'Este es el producto 2', 2, 'Imagen producto 2', 'PRD2', 10);
products.getProducts();
products.getProductById(1);
products.getProductById(2);