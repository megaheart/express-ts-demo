import type { Express } from 'express';

export function configRoutes(app: Express) {
    app.get('/', (req, res) => {
        res.send('Hello, World! ');
    });
    app.get('/linh', (req, res) => {
        res.send('Welcome to Linh\'s page! I am Linh, I am handsome, right?');
    });
    app.get('/json', (req, res) => {
        res.json({ message: 'Hello, World!' });
    });
    app.get('/checkWeather', (req, res) => {
        // Check query parameters "from" and "to" and parse them to Date
        const from = req.query.from as string;
        const to = req.query.to as string;
        if (!from || !to) {
            res.status(400).json({ message: 'Missing query parameters "from" or "to"' });
            return;
        }
        const fromDate = Date.parse(from);
        const toDate = Date.parse(to);
        if (isNaN(fromDate) || isNaN(toDate)) {
            res.status(400).json({ message: '"from" or "to" don\'t have valid date format' });
            return;
        }
        // Check the value of "from" and "to"
        if (from > to) {
            res.status(400).json({ message: '"from" must be less than "to"' });
            return;
        }
        const weathers = ['sunny', 'rainy', 'cloudy', 'windy', 'stormy', 'snowy', 'foggy', 
            'hail', 'thunderstorm', 'cold', 'hot', 'cool', 'warm', 'freezing', 'boiling'];
        const days:{date:Date, weather:string}[] = [];

        // Generate random weather for each day from "from" to "to"
        let currentDate = fromDate;
        while (currentDate <= toDate) {
            const randomWeather = weathers[Math.floor(Math.random() * weathers.length)];
            days.push({ date: new Date(currentDate), weather: randomWeather });
            currentDate += 24 * 60 * 60 * 1000;
        }

        res.json({
            days: days
        });
    });
}