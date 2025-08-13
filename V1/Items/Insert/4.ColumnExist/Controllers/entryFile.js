import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnFactor = LocalRequestBody.Factor;
	let LocalCoumnGST = LocalRequestBody.GST;
	let LocalCoumnItemName = LocalRequestBody.ItemName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnItemName,LocalCoumnGST,LocalCoumnFactor});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};