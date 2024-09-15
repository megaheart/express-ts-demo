import express from 'express';
import { configRoutes } from './route';

const app = express();
const port = process.env.WEB_PORT || 3000;

configRoutes(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
