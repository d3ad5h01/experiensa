const multer = require('multer')
const inMemoryStorage = multer.memoryStorage();
const singleFileUpload = multer({ storage: inMemoryStorage });
const azureStorage = require('azure-storage');
const getStream = require('into-stream');
const router = require("express").Router();
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

const azureStorageConfig = {
    accountName: process.env.ACCOUNTNAME,
    accountKey: process.env.ACCOUNTKEY,
    blobURL: process.env.BLOBURL,
    containerName: process.env.CONTAINERNAME,
};

const uploadFileToBlob = async (directoryPath, file) => {

    return new Promise((resolve, reject) => {

        const blobName = getBlobName(file.originalname);
        const stream = getStream(file.buffer);
        const streamLength = file.buffer.length;

        const blobService = azureStorage.createBlobService(azureStorageConfig.accountName, azureStorageConfig.accountKey);
        blobService.createBlockBlobFromStream(azureStorageConfig.containerName, `${directoryPath}/${blobName}`, stream, streamLength, err => {
            if (err) {
                reject(err);
            } else {
                resolve({ filename: blobName,
                    originalname: file.originalname,
                    size: streamLength,
                    path: `${azureStorageConfig.containerName}/${directoryPath}/${blobName}`,
                    url: `${azureStorageConfig.blobURL}${azureStorageConfig.containerName}/${directoryPath}/${blobName}` });
            }
        });
    });
};

const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    return `${identifier}-${originalName}`;
};

const imageUpload = async(req, res, next) => {
    try {
        console.log(req.body.profile);
        if(req.body.profile === 'null')
        {
            res.json({
                success: false,
                message: "File error"
            });
            return res;
        }
        const image = await uploadFileToBlob('profiles', req.file); // profiles is a directory in the Azure container
        // console.log(image);
        let url = image.url;
        let cookie = req.body.cookie;
        jwt.verify(cookie, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    message: "Cookie error"
                });
            } else {
                decoded_user = decoded;
            }
        });
        let user = await User.findOneAndUpdate(
            {_id: decoded_user._id},
            {
                $set: {
                    profile: url,
                },
            },
            {upsert: true}
        );
        return res.json(image);
    } catch (error) {
        next(error);
    }
}

const resumeUpload = async(req, res, next) => {
    try {
        console.log(req.body);
        if(req.body.resume === 'null')
        {
            res.json({
                success: false,
                message: "File error"
            });
            return res;
        }
        const resume = await uploadFileToBlob('resumes', req.file); // resumes is a directory in the Azure container
        let url = resume.url;
        let cookie = req.body.cookie;
        jwt.verify(cookie, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    message: "Cookie error"
                });
            } else {
                decoded_user = decoded;
            }
        });
        let user = await User.findOneAndUpdate(
            {_id: decoded_user._id},
            {
                $set: {
                    resume: url,
                },
            },
            {upsert: true}
        );
        return res.json(resume);
    } catch (error) {
        next(error);
    }
}


router.post('/upload/profile', singleFileUpload.single('profile'), imageUpload);
router.post('/upload/resume', singleFileUpload.single('resume'), resumeUpload);
module.exports = router;
