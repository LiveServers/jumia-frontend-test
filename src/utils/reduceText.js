const reduceText = (message) => {
  // eslint-disable-next-line no-nested-ternary
  return message
    ? message.length > 43
      ? message.slice(0, 43).concat(" ", "...")
      : message
    : "";
};

export default reduceText;
