const firebase = require('../db');
const firestore = firebase.firestore();

const getAllData = async (req, res, next) => {
    try {
        const type = req.params.type;
        const dataDB = await firestore.collection(type);
        const data = await dataDB.get();
        const resArray = [];
        if(data.empty) {
            res.status(404).send('No record found');
        }else {
            data.forEach(doc => {
                resArray.push(doc.data());
            });
            res.send(resArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllData
}