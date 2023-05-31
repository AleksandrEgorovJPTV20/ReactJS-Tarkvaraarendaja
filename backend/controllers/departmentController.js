import Department from "../models/department.js";
//read all
export const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (error) {
        res.json({ message: error.message });
    }
};
//read by id
export const getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findAll({
            where: { id: req.params.id },
        });
        res.json(department[0]);
    }   catch (error){
        res.json({ message: error.message });
    }
};
//create
export const createDepartment = async (req,res) => {
    try {
        await Department.create(req.body);
        res.json({
            message: 'Department Created',
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
//update
export const updateDepartment = async (req, res) => {
    try {
        await Department.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: 'Department Updated',
        });
    }   catch (error) {
        res.json({ message: error.message });
    }
};
//delete
export const deleteDepartment = async (req, res) => {
    try {
        await Department.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: 'Department Deleted',
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
