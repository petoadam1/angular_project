import * as express from 'express';
import { HibaController } from './src/controller/hibak.controller';
import { HomeroController } from './src/controller/homero.controller';
import { MeresController} from './src/controller/meres.controller';

export function getRouter() {
    const router = express.Router();

    const homeroCtrl = new HomeroController();
    const meresCtrl = new MeresController();
    const hibaCtrl = new HibaController();

    router.get('/api/homerok', homeroCtrl.getAll);
    //router.get('/api/products/search', homeroCtrl.search);
    router.get('/api/homerok/:id', homeroCtrl.getOne);
    router.post('/api/homerok', homeroCtrl.create);
    router.put('/api/homerok', homeroCtrl.update);
    //router.delete('/api/homerok/:id', homeroCtrl.delete);

    router.get('/api/meresek', meresCtrl.getAll);
    //router.get('/api/meresek/search', meresCtrl.search);
    router.get('/api/meresek/:id', meresCtrl.getOne);
    router.post('/api/meresek', meresCtrl.create);
    router.put('/api/meresek', meresCtrl.update);
    //router.delete('/api/meresek/:id', meresCtrl.delete);

    router.get('/api/hibak', hibaCtrl.getAll);
    //router.get('/api/hibak/search', hibaCtrl.search);
    router.get('/api/hibak/:id', hibaCtrl.getOne);
    router.post('/api/hibak', hibaCtrl.create);
    router.put('/api/hibak', hibaCtrl.update);
    //router.delete('/api/hibak/:id', hibaCtrl.delete);

    return router;
}