function dollas(x, y) {
    let future = x * y;
    console.log(future + "is how much you'll be taxed");

    let great = x - future;
    console.log(great + "is how much money you'll have sent to you!");
    if (great >= 12000) {
        console.log("we are amazing")
    } else {
        console.log("fuck, that kinda sucks! Oh well. We still be moving yo!!!!!");
    }
}

dollas(14293, .4);