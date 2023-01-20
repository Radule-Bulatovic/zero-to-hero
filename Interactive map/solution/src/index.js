(() => {
  const map = new InteractiveMap({
    svg: document.querySelector("svg"),
    tooltip: document.querySelector(".map__tooltip"),
    selected: document.querySelector('path[data-id="MNE1517"]'),
  });

  const select = new StateSelect({
    selected: document.querySelector('li[data-id="MNE1517"]'),
    options: document.querySelectorAll("li"),
    input: document.querySelector(".map__select__input"),
    container: document.querySelector(".map__select"),
  });

  map.onChange((data) => {
    select.setSelected(data);
  });
  select.onChange((data) => {
    map.setSelected(data);
  });
})();
