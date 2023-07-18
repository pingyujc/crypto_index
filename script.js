// Get the range inputs and result div
const btcRange = document.getElementById('btc');
const ethRange = document.getElementById('eth');
const btcAmountSpan = document.getElementById('btcAmount');
const ethAmountSpan = document.getElementById('ethAmount');
const summaryResult = document.getElementById('summaryResult');
const halfButton = document.getElementById('half');
const btcMaxiButton = document.getElementById('btcMax');
const ethMaxiButton = document.getElementById('ethMax');

// event listerner for the easy options buttons.
btcMaxiButton.addEventListener('click', updateSlider);
ethRange.addEventListener('input', updateSlider);

// Add event listeners to update the displayed values
btcRange.addEventListener('input', updateSlider);
ethRange.addEventListener('input', updateSlider);

function updateSlider() {
  const btcRatio = parseFloat(btcRange.value);
  const ethRatio = parseFloat(ethRange.value);
  const totalRatio = btcRatio + ethRatio;

  // Ensure the total ratio is 100% by adjusting the values proportionally
  if (totalRatio !== 100) {
    const correctionFactor = 100 / totalRatio;
    btcRange.value = (btcRatio * correctionFactor).toFixed(1);
    ethRange.value = (ethRatio * correctionFactor).toFixed(1);
  }

  // Update the displayed values
  btcAmountSpan.textContent = btcRange.value;
  ethAmountSpan.textContent = ethRange.value;
}

// Initialize the slider values and result display
updateSlider();

// Add a form submit event listener to handle the transaction submission
document.getElementById('coinForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  // Add your logic here to handle the form submission
  // Calculate the actual amounts based on user inputs, interact with APIs, etc.

  // Display the transaction summary (a placeholder in this example)
  const btcAmount = parseFloat(btcRange.value);
  const ethAmount = parseFloat(ethRange.value);
  const transactionSummary = `BTC: ${btcAmount}%, ETH: ${ethAmount}%`;
  summaryResult.textContent = transactionSummary;
}
