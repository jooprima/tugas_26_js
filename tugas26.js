function myInfinite() {
  var a = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  for (var i = 0; i < a.length; i++) {
    if (isFinite(a) == true) {
      console.log("Angka " + a[i] + " Is Infinity");
    } else {
      console.log("Angka " + a[i] + " NOT Infinity");
    }
  }
}

myInfinite();
