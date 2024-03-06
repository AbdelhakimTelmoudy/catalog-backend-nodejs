let customers = [
    { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    { id: 3, name: 'Customer 3', email: 'customer3@example.com' },
    { id: 4, name: 'Customer 4', email: 'customer4@example.com' },
    { id: 5, name: 'Customer 5', email: 'customer5@example.com' }
];

exports.getAllCustomers = async (req, res) => {
    res.status(200).json(customers);
};

exports.getCustomerByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(c => c.id === id);
    if (customer) {
        res.json(customer);
    } else {
        res.status(404).send('Customer not found');
    }
};

exports.saveCustomer = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).send('Name and email are required');
        return;
    }
    const id = customers.length + 1;
    const newCustomer = { id, name, email };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
}

exports.updateCustomer = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const customerIndex = customers.findIndex(c => c.id === id);
    if (customerIndex !== -1) {
        if (name) customers[customerIndex].name = name;
        if (email) customers[customerIndex].email = email;
        res.json(customers[customerIndex]);
    } else {
        res.status(404).send('Customer not found');
    }
}

exports.deleteCustomerById = async (req, res) => {
    const id = parseInt(req.params.id);
    const customerIndex = customers.findIndex(c => c.id === id);
    if (customerIndex !== -1) {
        customers.splice(customerIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Customer not found');
    }
}
