import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
$(function () {
  const szuloELEM = $(".tarolo");
  new Megjelenit(TODOLIST2, szuloELEM);

  $(window).on("kesz", (event) => {
    let obj = event.detail;
    TODOLIST2[obj.index].kesz = true;
    obj.setHatterszin()
  });

  $(window).on("torles", (event) => {
    let obj = event.detail;
    TODOLIST2.splice(obj.index, 1);
    szuloELEM.empty();
    new Megjelenit(TODOLIST2, szuloELEM);


  });
});
