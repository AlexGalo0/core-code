import { SelectChoice, Choice, UserOption, Input } from "./Input";
import { MenuElement } from "./MenuElement";

export class Menu {
  mainMenu: SelectChoice[] = [];

  soupMenu: Choice[] = [];
  chefSpecialsMenu: Choice[] = [];
  chickenMenu: Choice[] = [];
  beefMenu: Choice[] = [];
  beveragesMenu: Choice[] = [];

  soupOptions: MenuElement[] = [];
  chefSpecialsOptions: MenuElement[] = [];
  chickenOptions: MenuElement[] = [];
  beefOptions: MenuElement[] = [];
  beveragesOptions: MenuElement[] = [];

  /*  constructor(){

    } */

  fillMainMenu() {
    this.mainMenu = [
      { option: 1, message: "Sopas" },
      { option: 2, message: `Chef's Specials` },
      { option: 3, message: "Chicken" },
      { option: 4, message: "Beef" },
      { option: 5, message: "Beverages" },
      { option: 6, message: "Exit" },
    ];
  }
  fillOptions() {
    this.soupOptions = [
      new MenuElement("Wonton Soup (Chicken)", 2.25, "🍲"),
      new MenuElement("Chicken Corn Soup", 1.95, "🌽"),
      new MenuElement("Vegetable Corn Soup", 2.25, "🥕"),
    ];

    this.chefSpecialsOptions = [
      new MenuElement("Orange Beef", 8.95, "🍊"),
      new MenuElement("Kung Pao Shrimp", 8.5, "🦐"),
    ];

    this.chickenOptions = [
      new MenuElement("Lemon Chicken", 9.95, "🍋"),
      new MenuElement("Sesame Chicken", 9.95, "🐔"),
      new MenuElement("Hunan Chicken", 10.5, "🐣"),
    ];

    this.beefOptions = [
      new MenuElement("Pepper Steak", 9.95, "🫑"),
      new MenuElement("Manchurian Beef", 11.95, "🐄"),
    ];

    this.beveragesOptions = [
      new MenuElement("Piña Colada", 3.0, "🍍"),
      new MenuElement("Spanish Coffee", 5.5, "☕"),
    ];
  }

  fillSubMenus() {
    /* a soupMenu(Choice) que es nuestro atributo arreglo que almacena las opciones de souptOptions
     recorreremos soupOptions con el map y retornaremos los elementos 

    ERROR A CORREGIR.
    */
    this.soupMenu = this.soupOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));
    this.chefSpecialsMenu = this.chefSpecialsOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));

    this.chickenMenu = this.chickenOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));

    this.beefMenu = this.beefOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));

    this.beveragesMenu = this.beveragesOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));
  }

    async showMainMenu() {
        let opcion= -1 
        let input : UserOption ; 

        while(opcion!==6) {
          input= await Input.getSelect('Select a menu option',this.mainMenu) ; 


















        }










  }
  showSubMenu() {}
}
