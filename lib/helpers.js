import commonWords from '../data/commonWords.json';
import mbsData from '../data/MBS-JSON-20220701.json';

/**
 * Initializes an array of objects for each MBS item, with a score set to 0.
 * @returns {Array}
 */
export const initData = () => {

    let initData = [];
    for (let i = 0; i < mbsData.length; i++) {
        let dataPointMBS = { score: 0, item: mbsData[i] };
        initData.push(dataPointMBS);
    }
    return initData;
}

/**
 * Takes a string as a param.
 * Coverts to lower case.
 * Removes anything that is not a letter
 * Converts to an array.
 * Filters out common words.
 * @param {String} data.
 * @returns {Array}
 */
export const rakeFilter = (data) => {

    let filteredData = data.toLowerCase();
    filteredData = filteredData.replace(/[^a-zA-Z ]/g, '');
    filteredData = filteredData.split(' ');
    filteredData = filteredData.filter(function (el) {
        return commonWords.indexOf(el) < 0;
    });
    console.log(filteredData)
    return filteredData;
}


/**
 * Assigns accumulative score determined by word matches and Doctor Type matches.
 * Filters out results based on user entered Strength Score. Sorts in desc order.
 * @param {Array} filteredData.
 * @param {Array} doctorTypes.
 * @param {Object}initData.
 * @param {Number}strengthOfResult.
 * @return {array}
 */
export const determineScore = (filteredData, doctorTypes, initData, showTop) => {

  for (let i = 0; i < initData.length; i++) {
    if (doctorTypes.includes(initData[i].item.ProviderType)) {
      initData[i].score += 2;
    }
    for (let j = 0; j < filteredData.length; j++) {
      if (initData[i].item.Description.includes(filteredData[j])) {
        initData[i].score += 1;
      }
    }
  }
  let smartSearchResult = initData
    .sort((a, b) => (a.score > b.score ? -1 : 1))
    .slice(0, showTop);
  return smartSearchResult;
};