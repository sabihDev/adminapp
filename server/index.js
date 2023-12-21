import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/mangement.js';
import salesRoutes from './routes/sales.js';

/* DATA IMPORT */
import User from './models/User.js';
import Transaction from './models/Transactions.js';
import Product from './models/Products.js';
import ProductStat from './models/ProductStat.js';
import OverallStat from './models/OverallStat.js';
import AffiliateStat from './models/AffiliateStat.js';
import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } from './data/index.js';

/* CONFIGURATIONS */
dotenv.config({ path: '.env' });
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9001;
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        /* ONLY ADD DATA ONE TIME */
        // AffiliateStat.insertMany(dataAffiliateStat);
        // OverallStat.insertMany(dataOverallStat);
        // ProductStat.insertMany(dataProductStat);
        // Product.insertMany(dataProduct);
        // User.insertMany(dataUser);
        // Transaction.insertMany(dataTransaction);
    })
    .catch((error) => {
        console.error(`${error} did not connect`);
    });
