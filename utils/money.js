
export function handleAmount(amount) {
  // Remove any special characters like ₹, $, or commas, then trim the value
  amount = amount.replace(/[^\d.]/g, '').trim();  // Keep only numbers, dots

  // Parse it as a float for decimal values
  let parsedAmount = parseFloat(amount);

  // Check if the parsed value is a valid number
  if (isNaN(parsedAmount)) {
    alert("Please enter a valid amount.");
    return 0;  // Return 0 if the amount is invalid
  }

  parsedAmount = parsedAmount.toFixed(2);
  return parsedAmount;
}
