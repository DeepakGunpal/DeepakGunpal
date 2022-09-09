const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

app.use('/public', express.static('public'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp'),
    createParentPath: true,
    limits: { fileSize: 1024 * 1024 * 2 }
}));

let docUrl = [];

app.get('/', async (req, res, next) => {
    res.render('index', {
        data: docUrl
    });
});

app.post('/single', async (req, res, next) => {
    try {
        const file = req.files.mFile;
        console.log(file)
        //* creating own file name
        const fileName = new Date().getTime().toString() + path.extname(file.name);
        const savePath = path.join(__dirname, 'public', 'uploads', fileName);
        //? __dirname provides the absolute path of current executing js file. i.e. app.js
        //? never save file by the name with which they are coming (to prevent overwritting)

        if (file.truncated) throw new Error('File size is too big...');
        // if (file.mimetype !== 'image/png') throw new Error('Only png file accepted here');

        await file.mv(savePath);
        console.log("host :", req.headers.host)
        docUrl.push('http://' + req.headers.host + `/uploads/` + fileName);
        res.redirect('/');

    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
});

app.post('/multiple', async (req, res, next) => {
    try {
        const files = req.files.mFiles;
        console.log(files)

        // let promises = [];
        // //* creating own file name

        // files.forEach(file => {
        //     const fileName = new Date().getTime().toString() + path.extname(file.name);
        //     const savePath = path.join(__dirname, 'public', 'uploads', fileName);
        //     promises.push(file.mv(savePath));
        // })

        //? using map

        const promises = files.map(file => {
            const fileName = new Date().getTime().toString() + path.extname(file.name);
            docUrl.push('http://' + req.headers.host + `/uploads/` + fileName);
            const savePath = path.join(__dirname, 'public', 'uploads', fileName);
            return file.mv(savePath);
        })

        await Promise.all(promises);

        res.redirect(`/`)

    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
});

app.listen(3000, () => console.log('🚀 server on port 3000'));