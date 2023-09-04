// 1 task
let a: number;
let b: string;
let c: boolean;

// 2 task

function calculateArea(radius: number): number {
  const pi = 3.14;
  const area = pi * radius ** 2;
  return area;
}
console.log(calculateArea(5));

//

function calculateDensity(mass: number, volume: number): number {
  const density = mass / volume;
  return density;
}
console.log(calculateDensity(100, 50));

// 3
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const products: Product[] = [
  {
    id: 1,
    title: "Атай",
    description: "красавчик",
    price: 100000000,
    colors: ["red", "gold"],
  },
  {
    id: 2,
    title: "Эркин",
    description: "лучший",
    price: 100000000,
    colors: ["gold"],
  },
  {
    id: 3,
    title: "Малик",
    description: "дунган",
    price: 1000000000000,
    colors: ["brilliant"],
  },
];
console.log(products);
