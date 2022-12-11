import mongoose from 'mongoose';
import {MONGO_URI} from './config.js';

export async function connectDatabase() {
    try {
        const db = await mongoose.connect(MONGO_URI);
        console.log('Database connected', db.connection.name);
    } catch (error) {
        console.log(error);
    }

}
