import React, { useContext } from "react";
import FormInput from "../formInput/FormInput";
import TipSelector from "../tipSelector/TipSelector";
import { TipContext } from "../../contexts/tipContext";
import { ReactComponent as Person } from "../../assets/img/icon-person.svg";
import { ReactComponent as Dollar } from "../../assets/img/icon-dollar.svg";
import "./calculatorForm.css";

const CalculatorForm = () => {
  const [state, dispatch] = useContext(TipContext);

  return (
    <>
      <FormInput
        labelText="Bill"
        Icon={Dollar}
        value={state.bill}
        dispatch={(val) => dispatch({ type: "setBill", value: parseInt(val) })}
      />
      <TipSelector dispatch={() => dispatch({ type: "setTipPercent" })} />
      <FormInput
        labelText="Number of People"
        Icon={Person}
        value={state.numberOfPeople}
        dispatch={(val) =>
          dispatch({ type: "setNumberOfPeople", value: parseInt(val) })
        }
      />
    </>
  );
};

export default CalculatorForm;
