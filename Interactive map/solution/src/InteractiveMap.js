/**
 * InteractiveMap is a class that creates an interactive map with a tooltip and content updates on selection.
 * @class
 */
class InteractiveMap {
  /**
   *
   * The constructor for the InteractiveMap class.
   * @constructor
   * @param {HTMLElement} svg - The svg element for the map.
   * @param {Object} tooltip - The tooltip element.
   * @param {HTMLElement} selected - The initially selected element for the map.
   */
  constructor({ svg, tooltip, selected }) {
    this._svg = svg;
    this._tooltip = tooltip;
    this._selected = selected;
    this._onChange = undefined;

    this._selected.classList.add("blue");
    this._svg.addEventListener("mousemove", (event) => {
      if (event.target.tagName === "path") {
        this._handleMouseMove(event);
      }
    });
    this._svg.addEventListener("click", (event) => {
      if (event.target.tagName === "path") {
        const data = JSON.parse(event.target.dataset.data);
        this.setSelected(data);
        if (typeof this._onChange === "function") this._onChange(data);
      }
    });
  }

  _handleMouseMove(event) {
    if (typeof this._movewait !== "undefined") {
      cancelAnimationFrame(this._movewait);
    }
    this._movewait = requestAnimationFrame(() => {
      const tooltipText = JSON.parse(event.target.dataset.data).name;
      this._tooltip.textContent = tooltipText;
      this._tooltip.style.left = `${event.offsetX}px`;
      this._tooltip.style.top = `${event.offsetY}px`;
    });
  }

  /**
   * onChange is a method that sets a change handler.
   * @param {Function} changeHandler - The change handler function.
   * @return {void}
   */
  onChange(changeHandler) {
    this._onChange = changeHandler;
  }

  /**
   * setSelected is a method that sets the selected element and updates the element's content.
   * @param {Object} data - The data object for the selected element.
   * @return {void}
   */
  setSelected(data) {
    if (this._selected.dataset.id === data.id) return;
    this._selected.classList.remove("blue");
    this._selected = document.querySelector(`path[data-id='${data.id}']`);
    this._selected.classList.add("blue");
  }
}
