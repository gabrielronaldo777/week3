function pasanganTerbesar(num) {
    var hasil = [];
    var str = String(num);
    for (var i=0; i < str.length-1; i++){
      hasil[i]= str[i] + str[i+1];
    }
    hasil.sort();
    var result = hasil[hasil.length-1];
     var angka = parseInt(result);
    return angka;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
