var filenames = ["letter_A1.svg","letter_A2.svg","letter_A3.svg","letter_B1.svg","letter_B2.svg","letter_C1.svg","letter_C2.svg","letter_D1.svg","letter_E1.svg","letter_E2.svg","letter_E3.svg","letter_F1.svg","letter_G1.svg","letter_G2.svg","letter_H1.svg","letter_I1.svg","letter_I2.svg","letter_I3.svg","letter_J1.svg","letter_K1.svg","letter_K2.svg","letter_K3.svg","letter_L1.svg","letter_L2.svg","letter_M1.svg","letter_M2.svg","letter_M3.svg","letter_N1.svg","letter_N2.svg","letter_N3.svg","letter_O1.svg","letter_O2.svg","letter_O3.svg","letter_O4.svg","letter_P1.svg","letter_P2.svg","letter_R1.svg","letter_R2.svg","letter_R3.svg","letter_S1.svg","letter_S2.svg","letter_S3.svg","letter_S4.svg","letter_T1.svg","letter_T2.svg","letter_T3.svg","letter_T4.svg","letter_T5.svg","letter_U1.svg","letter_V1.svg","letter_V2.svg","letter_W1.svg","letter_W2.svg","letter_X1.svg","letter_X2.svg","letter_Y1.svg","letter_Y2.svg","letter_Z1.svg"]

var letters = {
  "a":[
    {"letter_A1.svg": 100},
    {"letter_A1.svg": 100}
  ],
  "b":[
    {"letter_A1.svg": 100},
    {"letter_A1.svg": 100}
  ]
}

$( "#content" ).keypress(function(event) {
  var content = $( "#content" ).val();

  var lines = content.match(/[^\r\n]+/g);
  var lettersarray = lines.map(function(line){
    return line.split('');
  });

  lettersarray.forEach(function(letters,line) {
    console.log(line, letters);

    var nbletters = letters.length;

  });

});
