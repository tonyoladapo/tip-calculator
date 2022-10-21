import React from "react";
import useTipSelector from "../../hooks/useTipSelector";
import "./tipSelector.css";

const TipSelector = () => {
  const { handleSelected, selected, inputVal, setInputVal } = useTipSelector();

  return (
    <div className="">
      <label className="input-label">Select Tip %</label>
      <div className="tip-buttons-container">
        <Tip value={5} onSelect={handleSelected} selected={selected} />
        <Tip value={10} onSelect={handleSelected} selected={selected} />
        <Tip value={15} onSelect={handleSelected} selected={selected} />
        <Tip value={25} onSelect={handleSelected} selected={selected} />
        <Tip value={50} onSelect={handleSelected} selected={selected} />
        <input
          value={inputVal}
          type="number"
          onFocus={(e) => {
            handleSelected(parseInt(e.target.value) || 0);
          }}
          onChange={(e) => {
            setInputVal(e.target.value || "");
            handleSelected(parseInt(e.target.value) || 0);
          }}
          className="form-control shadow-none tip-button"
          placeholder="Custom"
        />
      </div>
    </div>
  );
};

const Tip = ({ onSelect, value, selected }) => {
  const isSelected = selected == value;
  return (
    <button
      onClick={() => onSelect(value)}
      className="tip-button"
      style={{
        backgroundColor: isSelected
          ? "hsl(172, 67%, 45%)"
          : "hsl(183, 100%, 15%)",
        color: isSelected ? "hsl(183, 100%, 15%)" : "white",
      }}
    >
      {value}%
    </button>
  );
};

export default TipSelector;
