export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
const parseJson = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    throw new ParseError('Error parsing JSON');
  }
};

export {parseJson}
// END
