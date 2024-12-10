let dateActual = new Date();
let anioActual = dateActual.getFullYear();
let mesActual = dateActual.getMonth();
let diaActual = dateActual.getDate();
diaActual = diaActual < 10 ? "0" + diaActual : "" + diaActual;

export const FECHA_ACTUAL = {
  dia: diaActual,
  mes: mesActual,
  anio: anioActual
};

export const MESES_NOMBRE = [
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE"
];

export const MESES = {
  "2022": {
    "0": [
      ["27", "28", "29", "30", "31", "01"],
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "29"],
      ["31", "01", "02", "03", "04", "05"]
    ],
    "1": [
      ["31", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "01", "02", "03", "04", "05"]
    ],
    "2": [
      ["28", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "29", "30", "31", "01", "02"]
    ],
    "3": [
      ["28", "29", "30", "31", "01", "02"],
      ["04", "05", "06", "07", "08", "09"],
      ["11", "12", "13", "14", "15", "16"],
      ["18", "19", "20", "21", "22", "23"],
      ["25", "26", "27", "28", "29", "30"]
    ],
    "4": [
      ["25", "26", "27", "28", "29", "30"],
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"],
      ["30", "31", "01", "02", "03", "04"]
    ],
    "5": [
      ["30", "31", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "29", "30", "01", "02"]
    ],
    "6": [
      ["27", "28", "29", "30", "01", "02"],
      ["04", "05", "06", "07", "08", "09"],
      ["11", "12", "13", "14", "15", "16"],
      ["18", "19", "20", "21", "22", "23"],
      ["25", "26", "27", "28", "29", "30"]
    ],
    "7": [
      ["01", "02", "03", "04", "05", "06"],
      ["08", "09", "10", "11", "12", "13"],
      ["15", "16", "17", "18", "19", "20"],
      ["22", "23", "24", "25", "26", "27"],
      ["29", "30", "31", "01", "02", "03"]
    ],
    "8": [
      ["29", "30", "31", "01", "02", "03"],
      ["05", "06", "07", "08", "09", "10"],
      ["12", "13", "14", "15", "16", "17"],
      ["19", "20", "21", "22", "23", "24"],
      ["26", "27", "28", "29", "30", "01"]
    ],
    "9": [
      ["26", "27", "28", "29", "30", "01"],
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "29"],
      ["31", "01", "02", "03", "04", "05"]
    ],
    "10": [
      ["31", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "29", "30", "01", "02", "03"]
    ],
    "11": [
      ["28", "29", "30", "01", "02", "03"],
      ["05", "06", "07", "08", "09", "10"],
      ["12", "13", "14", "15", "16", "17"],
      ["19", "20", "21", "22", "23", "24"],
      ["26", "27", "28", "29", "30", "31"]
    ]
  },
  "2023": {
    "0": [
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"],
      ["30", "31", "01", "02", "03", "04"]
    ],
    "1": [
      ["30", "31", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "01", "02", "03", "04"]
    ],
    "2": [
      ["27", "28", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "29", "30", "31", "01"]
    ],
    "3": [
      ["27", "28", "29", "30", "31", "01"],
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "29"]
    ],
    "4": [
      ["01", "02", "03", "04", "05", "06"],
      ["08", "09", "10", "11", "12", "13"],
      ["15", "16", "17", "18", "19", "20"],
      ["22", "23", "24", "25", "26", "27"],
      ["29", "30", "31", "01", "02", "03"]
    ],
    "5": [
      ["29", "30", "31", "01", "02", "03"],
      ["05", "06", "07", "08", "09", "10"],
      ["12", "13", "14", "15", "16", "17"],
      ["19", "20", "21", "22", "23", "24"],
      ["26", "27", "28", "29", "30", "01"]
    ],
    "6": [
      ["26", "27", "28", "29", "30", "01"],
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "29"],
      ["31", "01", "02", "03", "04", "05"]
    ],
    "7": [
      ["31", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "29", "30", "31", "01", "02"]
    ],
    "8": [
      ["28", "29", "30", "31", "01", "02"],
      ["04", "05", "06", "07", "08", "09"],
      ["11", "12", "13", "14", "15", "16"],
      ["18", "19", "20", "21", "22", "23"],
      ["25", "26", "27", "28", "29", "30"]
    ],
    "9": [
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"],
      ["30", "31", "01", "02", "03", "04"]
    ],
    "10": [
      ["30", "31", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "29", "30", "01", "02"]
    ],
    "11": [
      ["27", "28", "29", "30", "01", "02"],
      ["04", "05", "06", "07", "08", "09"],
      ["11", "12", "13", "14", "15", "16"],
      ["18", "19", "20", "21", "22", "23"],
      ["25", "26", "27", "28", "29", "30"]
    ]
  },
  "2024": {
    "0": [
      ["01", "02", "03", "04", "05", "06"],
      ["08", "09", "10", "11", "12", "13"],
      ["15", "16", "17", "18", "19", "20"],
      ["22", "23", "24", "25", "26", "27"],
      ["29", "30", "31", "01", "02", "03"]
    ],
    "1": [
      ["29", "30", "31", "01", "02", "03"],
      ["05", "06", "07", "08", "09", "10"],
      ["12", "13", "14", "15", "16", "17"],
      ["19", "20", "21", "22", "23", "24"],
      ["26", "27", "28", "29", "01", "02"]
    ],
    "2": [
      ["26", "27", "28", "29", "01", "02"],
      ["04", "05", "06", "07", "08", "09"],
      ["11", "12", "13", "14", "15", "16"],
      ["18", "19", "20", "21", "22", "23"],
      ["25", "26", "27", "28", "29", "30"]
    ],
    "3": [
      ["01", "02", "03", "04", "05", "06"],
      ["08", "09", "10", "11", "12", "13"],
      ["15", "16", "17", "18", "19", "20"],
      ["22", "23", "24", "25", "26", "27"],
      ["29", "30", "01", "02", "03", "04"]
    ],
    "4": [
      ["29", "30", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "29", "30", "31", "01"]
    ],
    "5": [
      ["27", "28", "29", "30", "31", "01"],
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "29"]
    ],
    "6": [
      ["01", "02", "03", "04", "05", "06"],
      ["08", "09", "10", "11", "12", "13"],
      ["15", "16", "17", "18", "19", "20"],
      ["22", "23", "24", "25", "26", "27"],
      ["29", "30", "31", "01", "02", "03"]
    ],
    "7": [
      ["29", "30", "31", "01", "02", "03"],
      ["05", "06", "07", "08", "09", "10"],
      ["12", "13", "14", "15", "16", "17"],
      ["19", "20", "21", "22", "23", "24"],
      ["26", "27", "28", "29", "30", "31"]
    ],
    "8": [
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"],
      ["30", "01", "02", "03", "04", "05"]
    ],
    "9": [
      ["30", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "29", "30", "31", "01", "02"]
    ],
    "10": [
      ["28", "29", "30", "31", "01", "02"],
      ["04", "05", "06", "07", "08", "09"],
      ["11", "12", "13", "14", "15", "16"],
      ["18", "19", "20", "21", "22", "23"],
      ["25", "26", "27", "28", "29", "30"]
    ],
    "11": [
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"],
      ["30", "31", "01", "02", "03", "04"]
    ]
  },
  "2025": {
    "0": [
      ["30", "31", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "29", "30", "31", "01"]
    ],
    "1": [
      ["27", "28", "29", "30", "31", "01"],
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "01"]
    ],
    "2": [
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "29"],
      ["31", "01", "02", "03", "04", "05"]
    ],
    "3": [
      ["31", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "29", "30", "01", "02", "03"]
    ],
    "4": [
      ["28", "29", "30", "01", "02", "03"],
      ["05", "06", "07", "08", "09", "10"],
      ["12", "13", "14", "15", "16", "17"],
      ["19", "20", "21", "22", "23", "24"],
      ["26", "27", "28", "29", "30", "31"]
    ],
    "5": [
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"],
      ["30", "01", "02", "03", "04", "05"]
    ],
    "6": [
      ["30", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "29", "30", "31", "01", "02"]
    ],
    "7": [
      ["28", "29", "30", "31", "01", "02"],
      ["04", "05", "06", "07", "08", "09"],
      ["11", "12", "13", "14", "15", "16"],
      ["18", "19", "20", "21", "22", "23"],
      ["25", "26", "27", "28", "29", "30"]
    ],
    "8": [
      ["01", "02", "03", "04", "05", "06"],
      ["08", "09", "10", "11", "12", "13"],
      ["15", "16", "17", "18", "19", "20"],
      ["22", "23", "24", "25", "26", "27"],
      ["29", "30", "01", "02", "03", "04"]
    ],
    "9": [
      ["29", "30", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "29", "30", "31", "01"]
    ],
    "10": [
      ["27", "28", "29", "30", "31", "01"],
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "29"]
    ],
    "11": [
      ["01", "02", "03", "04", "05", "06"],
      ["08", "09", "10", "11", "12", "13"],
      ["15", "16", "17", "18", "19", "20"],
      ["22", "23", "24", "25", "26", "27"],
      ["29", "30", "31", "01", "02", "03"]
    ]
  },
  "2026": {
    "0": [
      ["29", "30", "31", "01", "02", "03"],
      ["05", "06", "07", "08", "09", "10"],
      ["12", "13", "14", "15", "16", "17"],
      ["19", "20", "21", "22", "23", "24"],
      ["26", "27", "28", "29", "30", "31"]
    ],
    "1": [
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"]
    ],
    "2": [
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"],
      ["30", "31", "01", "02", "03", "04"]
    ],
    "3": [
      ["30", "31", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "29", "30", "01", "02"]
    ],
    "4": [
      ["27", "28", "29", "30", "01", "02"],
      ["04", "05", "06", "07", "08", "09"],
      ["11", "12", "13", "14", "15", "16"],
      ["18", "19", "20", "21", "22", "23"],
      ["25", "26", "27", "28", "29", "30"]
    ],
    "5": [
      ["01", "02", "03", "04", "05", "06"],
      ["08", "09", "10", "11", "12", "13"],
      ["15", "16", "17", "18", "19", "20"],
      ["22", "23", "24", "25", "26", "27"],
      ["29", "30", "01", "02", "03", "04"]
    ],
    "6": [
      ["29", "30", "01", "02", "03", "04"],
      ["06", "07", "08", "09", "10", "11"],
      ["13", "14", "15", "16", "17", "18"],
      ["20", "21", "22", "23", "24", "25"],
      ["27", "28", "29", "30", "31", "01"]
    ],
    "7": [
      ["27", "28", "29", "30", "31", "01"],
      ["03", "04", "05", "06", "07", "08"],
      ["10", "11", "12", "13", "14", "15"],
      ["17", "18", "19", "20", "21", "22"],
      ["24", "25", "26", "27", "28", "29"],
      ["31", "01", "02", "03", "04", "05"]
    ],
    "8": [
      ["31", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "29", "30", "01", "02", "03"]
    ],
    "9": [
      ["28", "29", "30", "01", "02", "03"],
      ["05", "06", "07", "08", "09", "10"],
      ["12", "13", "14", "15", "16", "17"],
      ["19", "20", "21", "22", "23", "24"],
      ["26", "27", "28", "29", "30", "31"]
    ],
    "10": [
      ["02", "03", "04", "05", "06", "07"],
      ["09", "10", "11", "12", "13", "14"],
      ["16", "17", "18", "19", "20", "21"],
      ["23", "24", "25", "26", "27", "28"],
      ["30", "01", "02", "03", "04", "05"]
    ],
    "11": [
      ["30", "01", "02", "03", "04", "05"],
      ["07", "08", "09", "10", "11", "12"],
      ["14", "15", "16", "17", "18", "19"],
      ["21", "22", "23", "24", "25", "26"],
      ["28", "29", "30", "31", "01", "002"]
    ]
  }
};