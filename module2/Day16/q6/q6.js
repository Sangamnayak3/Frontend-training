function maximum() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var max = Math.max.apply(Math, ar);
    console.log(max);
}
maximum(1, 2, 3, 4, 5);
maximum(11, 56, 78);
maximum(2, 90, 5, -3);
maximum(246, 98, 564, 983, 3, 556);
maximum(945, 294, 356, 2892, 493, 4256, 233, 666, 939, 3844);
