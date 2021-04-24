function getTranslationMap(rhyme) {
  const rhymes = {
    "apples and pears": "Stairs",
    "hampstead heath": "Teeth",
    "loaf of bread": "Head",
    "pork pies": "Lies",
    "whistle and flute": "Suit",
  };
  
  return rhymes[rhyme.toLowerCase()] ?? "Rhyme not found";
}

function stringToBool(str) {
  const boolStrings = {
    "true": true,
    "false": false,
  };

  return boolStrings[str] ?? "String is not a boolean value";
}

function calculate(num1, num2, action) {
  const actions = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  return actions[action]?.(num1, num2) ?? "Calculation is not recognised";
}
