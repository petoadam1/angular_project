import * as express from 'express';
import { ProductController } from './src/controller/product.controller';

export function getRouter() {
    const router = express.Router();

    const productCtrl = new ProductController();

    router.get('/api/products', productCtrl.getAll);
    router.get('/api/products/search', productCtrl.search);
    router.get('/api/products/:id', productCtrl.getOne);
    router.post('/api/products', productCtrl.create);
    router.put('/api/products', productCtrl.update);
    router.delete('/api/products/:id', productCtrl.delete);

    return router;
}