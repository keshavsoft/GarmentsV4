import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnGST,LocalCoumnFactor}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemName,LocalCoumnGST,LocalCoumnFactor});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};