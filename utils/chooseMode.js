export const chooseMode = (colorMode, lM, bM, gM, pM) => {
  if (colorMode === "lightMode") return lM;
  if (colorMode === "blueMode") return bM;
  if (colorMode === "greenMode") return gM;
  if (colorMode === "purpleMode") return pM;
};
