import _ from 'lodash';

const findDifference = (filepath1, filepath2) => {
  const keys = _.union(_.keys(filepath1), _.keys(filepath2));
  const sortedKeys = _.sortBy(keys);
  const difference = sortedKeys.map((key) => {
    if (!Object.hasOwn(filepath1, key)) {
      return `+ ${key}: ${filepath2[key]}`;
    } else if (!Object.hasOwn(filepath2, key)) {
      return `- ${key}: ${filepath1[key]}`;
    } else if (filepath1[key] !== filepath2[key]) {
      return `- ${key}: ${filepath1[key]}\n+ ${key}: ${filepath2[key]}`;
    } else {
      return `  ${key}: ${filepath1[key]}`
    }
  })
  return difference.join('\n');
}

export default findDifference;