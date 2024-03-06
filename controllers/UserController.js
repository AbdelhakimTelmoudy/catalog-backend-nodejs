const { generateToken } = require("../middleware/jwt-verify");


let users = [
    { username: 'user1',password: '1234',role: 'USER' },
    { username: 'admin',password: '1234',role: 'ADMIN' }
];


exports.register= async  (req, res) => {
    const { username, password, role } = req.body;
    
    if (users.some(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already taken' });
    }

    const newUser = { username, password, role };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
}

exports.login= async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = generateToken(user);

    res.json({ message: 'Login successful', token });
}

exports.logout= async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Failed to logout' });
        }
        res.clearCookie('sessionID');
        res.json({ message: 'Logout successful' });
    });
}