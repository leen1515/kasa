export function getByIdTags (logementList, logementID) {
  const logementId = logementList.find((logement) => logement.id === logementID);
  return logementId.tags;
}
