var filenames = ["letter_A1.svg","letter_A2.svg","letter_A3.svg","letter_B1.svg","letter_B2.svg","letter_C1.svg","letter_C2.svg","letter_D1.svg","letter_E1.svg","letter_E2.svg","letter_E3.svg","letter_F1.svg","letter_G1.svg","letter_G2.svg","letter_H1.svg","letter_I1.svg","letter_I2.svg","letter_I3.svg","letter_J1.svg","letter_K1.svg","letter_K2.svg","letter_K3.svg","letter_L1.svg","letter_L2.svg","letter_M1.svg","letter_M2.svg","letter_M3.svg","letter_N1.svg","letter_N2.svg","letter_N3.svg","letter_O1.svg","letter_O2.svg","letter_O3.svg","letter_O4.svg","letter_P1.svg","letter_P2.svg","letter_R1.svg","letter_R2.svg","letter_R3.svg","letter_S1.svg","letter_S2.svg","letter_S3.svg","letter_S4.svg","letter_T1.svg","letter_T2.svg","letter_T3.svg","letter_T4.svg","letter_T5.svg","letter_U1.svg","letter_V1.svg","letter_V2.svg","letter_W1.svg","letter_W2.svg","letter_X1.svg","letter_X2.svg","letter_Y1.svg","letter_Y2.svg","letter_Z1.svg"]

var letters = {
  "a":[
    {"letter_A1.svg": 111.196},
    {"letter_A2.svg": 116.898},
    {"letter_A3.svg": 111.824}
  ],
  "b":[
    {"letter_B1.svg": 91.536},
    {"letter_B2.svg": 122.002}
  ],
  "c":[
    {"letter_C1.svg": 102.663},
    {"letter_C2.svg": 96.622}
  ],
  "d":[
    {"letter_D1.svg": 177.902}
  ],
  "e":[
    {"letter_E1.svg": 185.588},
    {"letter_E2.svg": 71.13},
    {"letter_E3.svg": 95.318}
  ],
  "f":[
    {"letter_F1.svg": 53.775}
  ],
  "g":[
    {"letter_G1.svg": 63.601},
    {"letter_G2.svg": 91.514}
  ],
  "h":[
    {"letter_H1.svg": 74.621}
  ],
  "i":[
    {"letter_I1.svg": 50.903},
    {"letter_I2.svg": 10.678},
    {"letter_I3.svg": 35.59}
  ],
  "j":[
    {"letter_J1.svg": 116.922}
  ],
  "k":[
    {"letter_K1.svg": 87.954},
    {"letter_K2.svg": 76.285},
    {"letter_K3.svg": 35.59}
  ],
  "l":[
    {"letter_L1.svg": 63.601},
    {"letter_L2.svg": 53.024}
  ],
  "m":[
    {"letter_M1.svg": 91.539},
    {"letter_M2.svg": 142.344},
    {"letter_M3.svg": 132.406}
  ],
  "n":[
    {"letter_N1.svg": 193.138},
    {"letter_N2.svg": 106.778},
    {"letter_N3.svg": 68.789}
  ],
  "o":[
    {"letter_O1.svg": 106.676},
    {"letter_O2.svg": 96.541},
    {"letter_O3.svg": 111.781},
    {"letter_O4.svg": 111.101}
  ],
  "p":[
    {"letter_P1.svg": 100.565},
    {"letter_P2.svg": 86.39}
  ],
  "r":[
    {"letter_R1.svg": 157.511},
    {"letter_R2.svg": 101.611},
    {"letter_R3.svg": 61.064}
  ],
  "s":[
    {"letter_S1.svg": 50.787},
    {"letter_S2.svg": 116.864},
    {"letter_S3.svg": 91.434},
    {"letter_S4.svg": 53.022}
  ],
  "t":[
    {"letter_T1.svg": 55.223},
    {"letter_T5.svg": 96.536},
    {"letter_T2.svg": 71.154},
    {"letter_T3.svg": 127.001},
    {"letter_T4.svg": 132.115}
  ],
  "u":[
    {"letter_U1.svg": 106.774}
  ],
  "v":[
    {"letter_V1.svg": 137.68},
    {"letter_V2.svg": 127.078}
  ],
  "w":[
    {"letter_W1.svg": 198.207},
    {"letter_W2.svg": 156.35}
  ],
  "x":[
    {"letter_X1.svg": 167.667},
    {"letter_X2.svg": 122.136}
  ],
  "y":[
    {"letter_Y1.svg": 137.254},
    {"letter_Y2.svg": 68.491}
  ],
  "z":[
    {"letter_Z1.svg": 97.76}
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
