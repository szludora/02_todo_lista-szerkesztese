import MegjelenitSor from "./MegjelenitSor.js";
import { TODOLIST2 } from "./adatok.js";


class Megjelenit {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    szuloElem.append('<table class="table table-bordered table-striped  ">');
    this.tablaElem = szuloElem.children("table");

    this.tablazatbaIr();

    
  }
  tablazatbaIr() {
    // function a this a konkrét html elemet írja ki, nyílfüggvény esetén a hatókört ami a nyílfüggvényt magába foglalja (objektum)
    this.#list.forEach((elem, index) => {
      new MegjelenitSor(elem, this.tablaElem, index);
    });
  }
}
export default Megjelenit;
