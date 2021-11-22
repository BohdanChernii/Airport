export const setTerminalColor = (planeIs) => {
  planeIs.map((item) => {
    switch (item.term) {
      case "A":
        item.color = "#63c745";
        break;

      case "D":
        item.color = "blue";
        break;
      default:
        item.color = "coral";
        break;
    }
    return item;
  });
};
