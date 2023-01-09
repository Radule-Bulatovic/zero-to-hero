(() => {
  class Light {
    constructor() {
      const rangeEl = document.getElementById("range-opacity");
      const toggleEl = document.getElementById("toggle");
      this.range = rangeEl.value;
      this.toggler = toggleEl.checked;

      rangeEl.addEventListener("input", (event) => {
        this.range = event.target.value;
        this.changeLight();
      });
      toggleEl.addEventListener("change", (event) => {
        this.toggler = event.target.checked;
        this.changeLight();
      });
    }

    changeLight() {
      let val = this.toggler ? this.range : 255 - this.range;
      document.body.style.background = `rgb(${val},${val},${val})`;
    }
  }
  new Light();
})();
