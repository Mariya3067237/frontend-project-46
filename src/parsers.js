import yaml from 'js-yaml';

const getDataParsed = (filePath, fileType) => {
  if (fileType === '.json') {
    return JSON.parse(filePath);
  }
  if (fileType === '.yml' || fileType === '.yaml') {
    return yaml.load(filePath);
  }
  throw new Error('Incorrect file format.');
};

export default getDataParsed;