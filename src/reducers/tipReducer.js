const tipReducer = (state, action) => {
  switch (action.type) {
    case "setBill":
      return { ...state, bill: action.value };

    case "setTipPercent":
      return { ...state, tipPercent: action.value };

    case "setNumberOfPeople":
      return { ...state, numberOfPeople: action.value };

    case "reset":
      return { ...state, bill: 0, tipPercent: 0, numberOfPeople: 0 };

    default:
      return state;
  }
};

export default tipReducer;
