class MegjelenitSor {
  #adat = {};

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.index = index;
    this.tablaElem = szuloElem;
    this.#sor();
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.torolElem = this.sorElem.children("td").children(".torol");
    if (this.#adat.kesz) {
        this.setHatterszin();
  
      }
    this.keszElem.on("click", () => {
      this.#esemenyTrigger("kesz");
    });
    this.torolElem.on("click", () => {
      this.#esemenyTrigger("torles");
    });
   
  }

  #esemenyTrigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(e);
  }
  setHatterszin() {
    this.sorElem.css("background-color", "rgb(130, 243, 205)");
  }

  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      if (key != "kesz") {
        txt += `<td>${this.#adat[key]}</td>`;
      }
    }

    txt += `<td><span class="kesz">✔️</span> <span class="torol">🗑</span></td>`;
    txt += "</tr>";

    this.tablaElem.append(txt);
  }
}
export default MegjelenitSor;
