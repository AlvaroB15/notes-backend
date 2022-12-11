import express from 'express';
import fileUpload from 'express-fileupload';
import technologyRoutes from './routes/technology.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));

// Routes
app.use(technologyRoutes);

export default app;
