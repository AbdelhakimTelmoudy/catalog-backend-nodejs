


let products = [
    { id: 1, name: 'Product 1', description:'Product 1',price: 10 },
    { id: 2, name: 'Product 2', description:'Product 2',price: 20 },
    { id: 3, name: 'Product 3',description:'Product 3', price: 30 },
    { id: 4, name: 'Product 4',description:'Product 4', price: 40 },
    { id: 5, name: 'Product 5', description:'Product 5',price: 50 },
    { id: 6, name: 'Product 6', description:'Product 6',price: 60 },
    { id: 7, name: 'Product 7', description:'Product 7',price: 70 },
    { id: 8, name: 'Product 8', description:'Product 8',price: 80 },
    { id: 9, name: 'Product 9', description:'Product 9',price: 90 },
    { id: 10, name: 'Product 10', description:'Product 10',price: 100 }
];



exports.getAllProducts= async (req, res) => {
    res.json(products);
};

exports.getProductByID = async  (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
};

exports.saveProduct= async (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        res.status(400).send('Name and price are required');
        return;
    }
    const id = products.length + 1;
    const newProduct = { id, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
}

exports.updateProduct= async  (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        if (name) products[productIndex].name = name;
        if (price) products[productIndex].price = price;
        res.json(products[productIndex]);
    } else {
        res.status(404).send('Product not found');
    }
}

exports.deleteProductById= async  (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Product not found');
    }
}