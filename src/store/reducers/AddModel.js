import api from "../../api";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MODEL":
      return {
        ...state,
        numOfmodels: state.numOfmodels + 1
      };
    default:
      return state;
  }
};

export default reducer;
