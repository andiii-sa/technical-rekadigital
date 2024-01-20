export const TypeBadgeLevelCostumer = (text) => {
  switch (text) {
    case "Warga":
      return "orange";
    case "Juragan":
      return "blue";
    case "Sultan":
      return "green";
    case "Konglomerat":
      return "violet";

    default:
      return "default";
  }
};
