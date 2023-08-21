export function getByIdStars (logementList, logementID) {
  const logementId = logementList.find((logement) => logement.id === logementID);
  return logementId.rating;
}
