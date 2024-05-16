const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}

app.get('/profile', (req, res) => {
    const data = readJsonFile('./data/profile.json');
    res.json(data);
});

app.get('/services', (req, res) => {
    const data = readJsonFile('./data/services.json');
    const category = req.query.category;

    if (!category || !data.some(service => service.category === category)) {
        return res.json(data);
    }

    const filteredServices = data.filter(service => service.category === category);
    res.json(filteredServices);
});

app.get('/steps', (req, res) => {
    const data = readJsonFile('./data/steps.json');
    res.json(data);
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
