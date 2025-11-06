/* Scenario Based Activity - Aggregating Data  */
/* sales নামের array-এর ডাটা থেকে প্রতিটি category অনুযায়ী মোট বিক্রির পরিমাণ (totalRevenue) এবং পণ্যের মোট সংখ্যা (itemCount) বের করা। */
const sales = [
  { category: "Eletronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "Hawa", price: 200, quantity: 3 },
  { category: "Eletronics", item: "Mobile", price: 1400, quantity: 2 },
  { category: "Eletronics", item: "mouse", price: 1200, quantity: 3 },
  { category: "Books", item: "pawa", price: 1200, quantity: 2 },
];

const totalSales = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;

  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }
  table[category].totalRevenue += price * quantity;
  table[category].itemCount +=quantity

  return table
}, {});
console.log(totalSales)
