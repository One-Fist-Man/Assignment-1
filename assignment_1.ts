{
  const formatString = (input: string, toUpper?: boolean): string => {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  };

  formatString("Hello");
  formatString("Hello", true);
  formatString("Hello", false);

  type RatedItem = { title: string; rating: number };

  const filterByRating = (items: RatedItem[]): RatedItem[] => {
    return items.filter((item) => item.rating >= 4);
  };

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 4.1 },
  ];

  filterByRating(books);

  const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
  };

  concatenateArrays(["a", "b"], ["c"]);
  concatenateArrays([1, 2], [3, 4], [5]);

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");

  myCar.getInfo();
  myCar.getModel();

  const processValue = (value: string | number) => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  };

  processValue("hello");
  processValue(10);

  interface Product {
    name: string;
    price: number;
  }

  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if (products.length === 0) {
      return null;
    }

    return products.reduce((previousItem, currentItem) =>
      previousItem.price > currentItem.price ? previousItem : currentItem
    );
  };

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(products);

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  const getDayType = (day: Day): string => {
    if (day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  };

  getDayType(Day.Monday);
  getDayType(Day.Sunday);

  const squareAsync = async (n: number): Promise<number> => {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        if (n > 0) {
          resolve(n * n);
        } else {
          rejected(new Error("Negative number not allowed"));
        }
      }, 1000);
    });
  };

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
