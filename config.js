import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/test";
export const PORT_APP = process.env.PORT_APP || 4000;

export const CLOUD_NAME_CLOUDINARY = process.env.CLOUD_NAME_CLOUDINARY;
export const API_KEY_CLOUDINARY = process.env.API_KEY_CLOUDINARY;
export const API_SECRET_CLOUDINARY = process.env.API_SECRET_CLOUDINARY;
