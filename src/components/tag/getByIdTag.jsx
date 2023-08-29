/** @name components */

/**
 *
 * for to find accomodation width the same id than id in url, used for wordkeys
 * @param {array} logementList array for all accomodations
 * @param {string} logementID id in url
 * @returns {array} accomodation's wordkeys property
 */

export function getByIdTags (logementList, logementID) {
  const logementId = logementList.find((logement) => logement.id === logementID);
  return logementId.tags;
}
