type colore = {
  OBJECTID: number;
  NomeMCromatico: string;
  RED: number;
  GREEN: number;
  BLUE: number;
};

export class Rgb {
  red: number;
  green: number;
  blue: number;

  // Normal signature with defaults
  constructor(red = 0, green = 0, blue = 0) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
}

const c1 = new Rgb(250, 250, 255);

const c2 = { red: 250, green: 200, blue: 0 };
