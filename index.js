function maxProfit(time) {
    let theatreCount = 0;
    let pubCount = 0;
    let parkCount = 0;
    let maxProfit = 0;
    let maxProfitEstablishment = "";

    // Iterate through all possible combinations of properties
    for (let i = 0; i <= time / 5; i++) {
        for (let j = 0; j <= time / 4; j++) {
            for (let k = 0; k <= time / 10; k++) {
                // Check if the combination is valid within the given time limit
                if (i * 5 + j * 4 + k * 10 <= time) {
                    // Calculate the total earnings of the combination
                    let earnings = i * 1500 + j * 1000 + k * 3000;
                    // Check if the earnings are the highest seen so far
                    if (earnings > maxProfit) {
                        maxProfit = earnings;
                        theatreCount = i;
                        pubCount = j;
                        parkCount = k;
                        maxProfitEstablishment = `T:${i} P:${j} C:${k}`;
                    }
                }
            }
        }
    }

    return maxProfitEstablishment;
}

console.log(maxProfit(7)); // should return "T:1 P:0 C:0"
console.log(maxProfit(8)); // should return "T:1 P:0 C:0"
console.log(maxProfit(13)); // should return "T:2 P:0 C:0"

