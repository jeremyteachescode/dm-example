// allocationEngine.js

function calculateAllocation(committedAmount, totalRoundCommitted, roundCap) {
    // If the round is not oversubscribed, give them their full commitment
    if (totalRoundCommitted <= roundCap) {
        return committedAmount;
    }

    // Calculate pro-rata percentage
    const allocationPercentage = committedAmount / totalRoundCommitted;
    
    // Calculate final dollar amount based on the cap
    const finalAllocation = roundCap * allocationPercentage;

    return Math.floor(finalAllocation * 100) / 100; // Return rounded to 2 decimals
}

const final = calculateAllocation(50000, 12000000, 10000000);
console.log(`Investor's Final Allocation: $${final}`);
