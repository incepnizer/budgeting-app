import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseF from "./components/ExpenseF";
import categories from "./components/categories";

const App = () => {
  const [selectedCat, setSelectedCat] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Ex", amount: 0, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCat
    ? expenses.filter((e) => e.category === selectedCat)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseList
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseList>
      </div>
      <div className="mb-3">
        <ExpenseF
          onSelectCategory={(category) => setSelectedCat(category)}
        ></ExpenseF>
      </div>

      <ExpenseFilter
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseFilter>
    </>
  );
};

export default App;
