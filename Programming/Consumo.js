var lines = ["2254", "124.4"]

const [km, litros] = lines

const consumo = km / litros;

console.log(`${consumo.toFixed(3)} km/l`)