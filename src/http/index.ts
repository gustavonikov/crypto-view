import axios from 'axios';

const apiKey = 'a7543f02b7de71e3a39020604c7581f64c94c158c75a089d8c7d2be9ba4dfc54';

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${apiKey}`
    }
});
