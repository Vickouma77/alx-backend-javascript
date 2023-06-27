export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita
  };

  return budget;
}

console.log(getBudgetObject(400, 700, 900));
