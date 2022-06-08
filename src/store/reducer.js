import { increment, decrement, multiply, divide } from "./action.types";
let initialisation = {
  count: 0
};
const reducer = (state = initialisation, action) => {
  switch (action.type) {
    case increment:
      return { count: state.count + action.payload };
    case decrement:
      return { count: state.count - action.payload };
    case multiply:
      return { count: state.count * action.payload };
    case divide:
      return { count: state.count / action.payload };
    default:
      return state;
  }
};

export default reducer;
