export interface Car {
  make: string;
  model: string;
  year: number;
}

export interface Ford extends Car {
  type: string;
  racecategory: string;
  getMake: () => boolean;
  getFullDetail: () => string[];
}

export class SportsCar implements Ford {
  constructor(
    public make: string,
    public model: string,
    public year: number,
    public type: string,
    public racecategory: string
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
    this.racecategory = racecategory;
  }

  getMake(): boolean {
    if (this.make == "ford") {
      return true;
    } else {
      return false;
    }
  }

  getFullDetail(): string[] {
      return [this.make, this.model, this.year, this.type, this.racecategory].map(String);
  }
}

let fordsportscar = new SportsCar("ford", "Mustang", 2021, "Coupe", "Rallying");
let newfordsportscar = new SportsCar("ford", "MustangGT", 2000, "Coupe", "Touring");


console.log(fordsportscar.getMake());
console.log(newfordsportscar.getFullDetail());
