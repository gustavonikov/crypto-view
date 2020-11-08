import axios from 'axios';

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${process.env.CRYPTO_COMPARE_KEY}`
    }
});
