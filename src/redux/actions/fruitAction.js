export const add_fruit = "add_fruit";

export const addFruit = (fruit) => {
  return {
    type: add_fruit,
    payload: {
      fruit: fruit, //cuando tiene el mismo valor se deja uno solo
    },
  };
};
