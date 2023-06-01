import express from 'express';

import {
    getAllDepartments,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment,
} from '../controllers/profefessionController.js';

const departmentrouter = express.Router();

departmentrouter.get('/', getAllDepartments);
departmentrouter.get('/:id', getDepartmentById);
departmentrouter.post('/', createDepartment);
departmentrouter.patch('/:id', updateDepartment);
departmentrouter.delete('/:id', deleteDepartment);

export default departmentrouter;