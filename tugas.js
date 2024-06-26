function kenaRazia(date, data) {
  const daerahTilang = ["Gajah Mada", "Hayam Wuruk", "Panglima Polim", "Tomang Raya", "Sisingamangaraja", "Fatmawati"];
  let tilang = [];
  for (let i = 0; i < data.length; i++) {
    let count = 0;
    for (let j = 0; j < data[i].rute.length; j++) {
      for (let k = 0; k < daerahTilang.length; k++) {
        if (data[i].rute[j] === daerahTilang[k] && data[i].type === "Mobil") {
          let plat = data[i].plat.split(" ");
          let nomorPlat = plat[1];
          let nomorPlatTerakhir = parseInt(nomorPlat[nomorPlat.length - 1]);
          if (nomorPlatTerakhir % 2 !== date % 2) {
            count++;
          }
        }
      }
    }
    if (count > 0) {
      tilang.push({ name: data[i].name, tilang: count });
    }
  }
  return tilang;
}

console.log(
  kenaRazia(27, [
    {
      name: "Denver",

      plat: "B 2791 KDS",

      type: "Mobil",

      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },

    {
      name: "Toni",

      plat: "B 1212 JBB",

      type: "Mobil",

      rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"],
    },

    {
      name: "Stark",

      plat: "B 444 XSX",

      type: "Motor",

      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },

    {
      name: "Anna",

      plat: "B 678 DD",

      type: "Mobil",

      rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"],
    },
  ])
);

// [ { name: ‘Toni’, tilang: 1 }, { name: ‘Anna’, tilang: 3 } ]
