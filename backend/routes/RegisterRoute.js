import express from 'express';

import {
    getAllRegisters,
    getRegisterById,
    createRegister,
    updateRegister,
    deleteRegister,
} from '../controllers/registerController.js';

const registerrouter = express.Router();

registerrouter.get('/', getAllRegisters);
registerrouter.get('/:id', getRegisterById);
registerrouter.post('/', createRegister);
registerrouter.patch('/:id', updateRegister);
registerrouter.delete('/:id', deleteRegister);

export default registerrouter;