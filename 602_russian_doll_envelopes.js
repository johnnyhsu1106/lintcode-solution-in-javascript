'use strict';

const maxEnvelopes = (envelopes) => {
    if (envelopes === null || envelopes.length === 0 || envelopes[0].length === 0) {
        return 0;
    }

    //  sort the envelopes
    envelopes.sort(([w1, h1], [w2, h2]) => {
        let diff = w1 - w2;
        if (diff === 0){
            diff = h1 - h2
        }
        return diff;
    });
    // initialize the dp
    let size = envelopes.length;
    let dp = new Array(size).fill(1);
    // let dp = [];
    // for (let i = 0; i < size; i++) {
    //     dp.push(1);
    // }
    // DP
    for (let i = 1; i < size; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    // find the max in dp
    let maxNumEnvelope = - Infinity;
    for (let i = 0; i < size; i++) {
        maxNumEnvelope = Math.max(maxNumEnvelope, dp[i]);
    }
    return maxNumEnvelope;
};



// const main = () => {
//     let envelopes;
//     envelopes = [[5,4],[6,4],[6,7],[2,3]];
//     console.log(maxEnvelopes(envelopes) === 3);
// };
// main();
