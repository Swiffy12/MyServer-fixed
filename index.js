import express from 'express';
import { router } from './auth/router.js';


const port = 8000;
const app = express();

app.use('/auth', router);

app.listen(port, () => {
    console.log(`Сервер запущен http://localhost:${port}`);
});