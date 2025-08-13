import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnGST,LocalCoumnFactor}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemName,LocalCoumnGST,LocalCoumnFactor});

    return LocalFromDal;
};

export {
    postDefaultFunc
};