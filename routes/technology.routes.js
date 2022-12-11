import {Router} from 'express';
import {
    getTechnology, postTechnology, deleteTechnology, getIdTechnology, updateTechnology
} from '../controllers/technology.controllers.js';

const router = Router();

router.get('/technology', getTechnology);

router.post('/technology', postTechnology);

router.put('/technology/:id', updateTechnology);

router.delete('/technology/:id', deleteTechnology);

router.get('/technology/:id', getIdTechnology);

export default router;