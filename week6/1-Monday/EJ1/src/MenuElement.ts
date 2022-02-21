import { v4 as uuidv4 } from "uuid";

export class MenuElement {
  id: string;
  name: string;
  price: number;
  emoji: string;

  constructor(name: string, price: number, emoji: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.emoji = emoji;
  }

  printOption() {
    console.log(`${this.name}...........${this.price}`);
  }
}
