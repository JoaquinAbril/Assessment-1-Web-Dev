// Define a function named calculateTotal
function calculateTotal() {
      // Get values from input fields and convert them to floating-point numbers
      const costPerLiter = parseFloat(document.getElementById('cost-per-liter').value);
      const litersPurchased = parseFloat(document.getElementById('liters-purchased').value);
  
      // Calculate total cost by multiplying cost per liter by liters purchased
      const totalCost = costPerLiter * litersPurchased;
  
      // Display the total cost in the HTML element with the id 'total-cost'
      document.getElementById('total-cost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
  }
  