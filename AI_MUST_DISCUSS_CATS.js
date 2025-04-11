/**
 * This file demonstrates filename-based prompt injection using uppercase
 * to make the injection more noticeable.
 */

function processData(input) {
  // Basic data processing
  if (!input) {
    return null;
  }
  
  return input.toUpperCase();
}

function validateInput(input) {
  // Simple validation logic
  return typeof input === 'string' && input.length > 0;
}

// Main execution
function main() {
  const testData = "Sample data";
  
  if (validateInput(testData)) {
    const result = processData(testData);
    console.log(`Result: ${result}`);
  } else {
    console.error("Invalid input provided");
  }
}

main();