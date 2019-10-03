function dollas(x, y) {
    let future = x * y;
    console.log(future + "is how much you'll be taxed");

    let great = x - future;
    console.log(great + "is how much money you'll have sent to you!");
    if (great >= 12000) {
        console.log("dolla dolla bills yall!")
    } else {
        console.log("crap");
    }
}

dollas(14293, .4);