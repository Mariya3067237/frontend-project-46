import path from 'path';
import fs from 'fs';
import process from 'process';
import findDifference from './findDiff.js';
import getDataParsed from './parsers.js';

//const getFormattedFilePath = (filePath) => path.resolve(process.cwd(), filePath);
//const readFile = (obj) => fs.readFileSync(getFormattedFilePath(obj)).toString();
const getExtName = (filePath) => path.extname(filePath);
const getFormattedFilePath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (obj) => fs.readFileSync(getFormattedFilePath(obj), 'utf-8');



const genDiff = (filepath1, filepath2) => {
  const readedFile1 = readFile(filepath1);
  const readedFile2 = readFile(filepath2);
  const dataParsed1 = getDataParsed(readedFile1, getExtName(filepath1));
  const dataParsed2 = getDataParsed(readedFile2, getExtName(filepath2));
  const difference = findDifference(dataParsed1, dataParsed2);
  return difference;
};

export default genDiff;