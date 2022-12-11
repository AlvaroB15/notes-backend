import {v2 as cloudinary} from 'cloudinary';
import {CLOUD_NAME_CLOUDINARY, API_SECRET_CLOUDINARY, API_KEY_CLOUDINARY} from '../config.js';

cloudinary.config({
    cloud_name: CLOUD_NAME_CLOUDINARY,
    api_key: API_KEY_CLOUDINARY,
    api_secret: API_SECRET_CLOUDINARY
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'notes'
    });
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id);
}
