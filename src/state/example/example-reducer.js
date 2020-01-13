import { EXAMPLE } from "./search-actions";

const initialState = {
  example: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE:
      return { example: action.payload };
    default:
      return state;
  }
};
