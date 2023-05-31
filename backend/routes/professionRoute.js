import express from 'express';

import {
    getAllProfessions,
    getProfessionById,
    getProfessionByIdDepartment,
    createProfession,
    updateProfession,
    deleteProfession,
} from '../controllers/professionController.js';

const professionrouter = express.Router();

professionrouter.get('/', getAllProfessions);
professionrouter.get('/:id', getProfessionById);
professionrouter.get('/department/:id', getProfessionByIdDepartment);
professionrouter.post('/', createProfession);
professionrouter.patch('/:id', updateProfession);
professionrouter.delete('/:id', deleteProfession);

export default professionrouter;