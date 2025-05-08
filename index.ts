
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let newArray: { title: string; rating: number }[] = [];
  items.forEach((item) => {
    if (item.rating >= 4) {
      newArray.push(item);
    }
  });
  return newArray;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

class Vehicle {
  private Make: string;
  private year: number;
  constructor(Make: string, year: number) {
    (this.Make = Make), (this.year = year);
  }
  getInfo() {
    console.log(`Make: ${this.Make} , year: ${this.year}`);
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(Make: string, year: number, model: string) {
    super(Make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}


function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    const product = [...products].sort((a, b) => b.price - a.price);
    return product[0];
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}


async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Negative number not allowed");
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}



