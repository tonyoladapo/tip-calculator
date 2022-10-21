import { useContext, useEffect, useState } from "react";
import { TipContext } from "../contexts/tipContext";

export default () => {
  const [state, dispatch] = useContext(TipContext);

  const [tipPerPerson, setTipPerperson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    calculateTip();
  }, [state]);

  const calculateTip = () => {
    const { bill, tipPercent, numberOfPeople } = state;

    if (bill > 0 && tipPercent > 0 && numberOfPeople > 0) {
      const tip = bill * (tipPercent / 100);
      const total = tip + bill;

      setTipPerperson(tip / numberOfPeople || 0);
      setTotalPerPerson(total / numberOfPeople || 0);
      setDisabled(disabled && false);
    } else {
      setTipPerperson(0);
      setTotalPerPerson(0);
      setDisabled(true);
    }
  };

  const reset = () => {
    setTipPerperson(0);
    setTotalPerPerson(0);
    dispatch({ type: "reset" });
  };

  return { tipPerPerson, totalPerPerson, reset, disabled };
};
