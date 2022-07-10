import express from 'express';
import { saveDataJson, checkDataJson } from '../storage/storage.js';

const router = express.Router();

router.post('/login', (req, res) => {
    /*
    {
        "login":"swiffy",
        "pass":123
    }
    */
    req.on('data', (data) => {
        let userData = JSON.parse(data);
        if (checkDataJson(userData)){
            res.send(`Вы успешно авторизированны под логином ${userData.login}`);
        } else {
            res.send(`Такой учетной записи не существует`);
        };
    
    });
});

router.post('/register', (req, res) => {
    /*
    {
        "login":"swiffy",
        "pass":123
    }
    */
    req.on('data', (data) => {
        let userData = JSON.parse(data);
        saveDataJson(userData);
        res.send(`Вы успешно зарегестрированы под логином ${userData.login}`);
    });
});

export { router };