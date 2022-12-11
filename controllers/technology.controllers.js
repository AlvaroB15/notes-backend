import Technology from '../models/Technology.js';
import {deleteImage, uploadImage} from '../libs/cloudinary.js';
import fs from 'fs-extra';

export const getTechnology = async (req, res) => {
    try {
        const data = await Technology.find();
        res.send(data);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const postTechnology = async (req, res) => {
    try {
        const {title, description} = req.body;
        let image;

        if (req.files.image) {
            const result = await uploadImage(req.files.image.tempFilePath);
            fs.remove(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }

        const newTech = new Technology({title, description, image});
        await newTech.save();


        res.json(newTech);
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message});
    }
};

export const updateTechnology = async (req, res) => {
    try {
        const updateTechnology = await Technology.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.send(updateTechnology);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteTechnology = async (req, res) => {
    try {
        const techRemove = await Technology.findByIdAndDelete(req.params.id);

        if (!techRemove) return res.sendStatus(404);
        if (techRemove.image.public_id) await deleteImage(techRemove.image.public_id)

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getIdTechnology = async (req, res) => {
    try {
        const tech = await Technology.findById(req.params.id);
        if (!tech) return res.sendStatus(404);
        return res.json(tech);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
