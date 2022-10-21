import { useContext, useState, useEffect } from "react";
import { TipContext } from "../contexts/tipContext";

export default () => {
  const [state, dispatch] = useContext(TipContext);

  useEffect(() => {
    if (state.tipPercent == 0) {
      setSelected("");
      setInputVal("");
    }
  }, [state.tipPercent]);

  const [selected, setSelected] = useState("");
  const [inputVal, setInputVal] = useState(0);

  const handleSelected = (val) => {
    setSelected(val);
    dispatch({ type: "setTipPercent", value: val });
  };

  return { dispatch, selected, handleSelected, inputVal, setInputVal };
};
