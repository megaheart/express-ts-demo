import express from 'express';
import { configRoutes, logRequest } from './route';

const app = express();
const port = +(process.env.WEB_PORT || 7000);

app.use(logRequest);
configRoutes(app);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${port}`);
});
