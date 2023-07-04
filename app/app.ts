import express from 'express';
import { connectToMongo } from './connection/mongo.connect';
import { registerRoutes } from './modules/routes/routes.register';

export const startServer = async () => {
    try {
        const app = express();

        await connectToMongo();
        registerRoutes(app);
        const { PORT } = process.env;
        app.listen(
            PORT,
            () => console.log(`SERVER STARTED ON PORT: ${PORT}`)
        )
    } catch (e) {
        console.error(e);
        console.error('COULD NOT START SERVER');
        process.exit(1);
    }
}