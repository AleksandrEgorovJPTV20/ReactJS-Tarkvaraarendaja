import Register from "../models/register.js";
//read all
export const getAllRegisters = async (req, res) => {
    try {
        const registers = await Register.findAll();
        res.json(registers);
    } catch (error) {
        res.json({ message: error.message });
    }
};
//read by id
export const getRegisterById = async (req, res) => {
    try {
        const register = await Register.findAll({
            where: { id: req.params.id },
        });
        res.json(register[0]);
    }   catch (error){
        res.json({ message: error.message });
    }
};
//create
export const createRegister = async (req,res) => {
    try {
        await Register.create(req.body);
        res.json({
            message: 'Register Created',
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
//update
export const updateRegister = async (req, res) => {
    try {
        await Register.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: 'Register Updated',
        });
    }   catch (error) {
        res.json({ message: error.message });
    }
};
//delete
export const deleteRegister = async (req, res) => {
    try {
        await Register.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: 'Register Deleted',
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
