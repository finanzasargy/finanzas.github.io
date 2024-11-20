const express = require('express');
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Clave API para proteger los endpoints sensibles
const API_KEY = '64d57b57a86d3227b097c31e';

// Base de datos simulada en memoria
let currencies = [
    { name: 'Dólar', sell: '28.44', buy: '28.20', change: '-3.38%', trend: 'down', time: new Date().toLocaleString() },
    { name: 'Euro', sell: '22.40', buy: '22.40', change: '-2.84%', trend: 'down', time: new Date().toLocaleString() },
];

// Endpoint para obtener las tasas de cambio actuales
app.get('/api/currencies', (req, res) => {
    res.json(currencies);
});

// Endpoint para actualizar o agregar una moneda
app.post('/api/currencies', (req, res) => {
    const apiKey = req.headers['x-api-key'];

    // Validar la clave API
    if (apiKey !== API_KEY) {
        return res.status(403).json({ message: 'Acceso denegado: clave API inválida' });
    }

    const { name, sell, buy, change, trend } = req.body;

    if (!name || !sell || !buy || !change || !trend) {
        return res.status(400).json({ message: 'Faltan campos requeridos en el cuerpo de la solicitud' });
    }

    const index = currencies.findIndex((currency) => currency.name === name);

    if (index !== -1) {
        // Actualizar moneda existente
        currencies[index] = {
            name,
            sell,
            buy,
            change,
            trend,
            time: new Date().toLocaleString(),
        };
        return res.json({ message: 'Moneda actualizada', currency: currencies[index] });
    } else {
        // Agregar nueva moneda
        const newCurrency = {
            name,
            sell,
            buy,
            change,
            trend,
            time: new Date().toLocaleString(),
        };
        currencies.push(newCurrency);
        return res.json({ message: 'Nueva moneda añadida', currency: newCurrency });
    }
});

// Configura el puerto para Railway o usa un valor por defecto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
