import React from "react";
import CalculatorCard from "./components/calculatorCard/CalculatorCard";
import MainHeader from "./components/mainHeader/MainHeader";
import MainLayout from "./components/mainLayout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <MainHeader />
      <CalculatorCard />
    </MainLayout>
  );
};

export default App;
