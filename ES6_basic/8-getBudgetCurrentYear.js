function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const currentYear = getCurrentYear();
    const budget = {
  
    [`income-${CurrentYear}`]: income,
    [`gdp-${CurrentYear}`]: gdp,
    [`capita-${CurrentYear}`]: capita,
    };
    return budget;
  }
