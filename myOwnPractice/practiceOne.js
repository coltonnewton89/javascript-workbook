var jack = [
    { amount: 300 },
    { amount: 200 },
    { amount: 175 },
    { amount: 475 }
]
totalAmount = 0;
for (var i = 0; i < jack.length; i++) {
    totalAmount += jack[i].amount

    console.log(totalAmount);
}