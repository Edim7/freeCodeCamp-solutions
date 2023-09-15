// Only change code below this line
class Thermostat{

  //for some reason we construct with F but use C everywhere else
  // formula: 5/9 * (F - 32)
  constructor(tempInF){
    this._temperature = 5/9 * (tempInF - 32)
  }

  get temperature(){
    return this._temperature;
  }

  set temperature(tempInC){
    this._temperature = tempInC;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius