/**
 * StateSelect is a class that creates a dropdown menu for selecting a state.
 * @class
 */
class StateSelect {
  /**
   * The constructor for the StateSelect class.
   * @constructor
   *
   * @param {HTMLElement} container - The container element for the StateSelect.
   * @param {HTMLElement} selected - The selected element for the StateSelect.
   * @param {NodeList} options - The options elements for the StateSelect.
   * @param {HTMLElement} input - The input element for the StateSelect.
   */
  constructor({ container, selected, options, input }) {
    this._container = container;
    this._selected = JSON.parse(selected.dataset.data);
    this._options = Array.from(options).map((e) => JSON.parse(e.dataset.data));
    this._isActive = false;
    this._onChange = undefined;
    this.setSelected(this._selected);

    this._container.addEventListener("click", (e) => {
      this._toggleDropdown(e);
    });

    window.addEventListener("click", (e) => {
      if (this._isActive) this._toggleDropdown(e);
    });

    options.forEach((e) => {
      e.addEventListener("click", (event) => {
        const data = JSON.parse(event.currentTarget.dataset.data);
        if (typeof this._onChange === "function") this._onChange(data);
        this.setSelected(data);
      });
    });

    input.addEventListener("click", (e) => e.stopPropagation());
    input.addEventListener("input", (e) => {
      e.stopPropagation();
      this._search(e.target.value);
    });
  }

  _toggleDropdown(e) {
    e.stopPropagation();
    this._isActive = !this._isActive;
    document.querySelector("div.dropdown").classList.toggle("hidden");
  }

  _search(query) {
    const searchResults = this._options.filter(
      (option) =>
        option.name.toLowerCase().includes(query.toLowerCase()) &&
        option.name !== this._selected.name
    );
    this._displaySearchResults(searchResults);
  }

  _displaySearchResults(searchResults) {
    const list = document.querySelector("ul");
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    const fragment = document.createDocumentFragment();

    searchResults.forEach((result) => {
      const option = document.createElement("li");
      option.classList.add("select-item");
      option.dataset.data = JSON.stringify(result);
      option.innerHTML = `<img src="${result.img}" alt="" /><span>${result.name}</span>`;
      option.addEventListener("click", (event) => {
        const data = JSON.parse(event.currentTarget.dataset.data);
        if (typeof this._onChange === "function") this._onChange(data);
        this.setSelected(data);
      });
      fragment.appendChild(option);
    });

    list.appendChild(fragment);
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
    this._selected = data;
    document.querySelector(
      ".select-value"
    ).innerHTML = `<img src="${data.img}" alt="" /><span>${data.name}</span>`;
  }
}
