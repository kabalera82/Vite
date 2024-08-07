import "./style.css";

const COLOR_PALETTE = {
  "#28262C": "Raisin Black",
  "#998FC7": "Blue Bell",
  "#D4C2FC": "Lavender Blue",
  "#F9F5FF": "Magnolia",
  "#14248A": "Resolution Blue",
  "#fcf1cf": "Blond",
  "#f9e39f": "Manz",
  "#f5d470": "Sundance",
  "#f2c640": "Golden Dream",
  "#efb810": "Fuel Yellow",
  "#bf930d": "Goldenrod",
  "#8f6e0a": "Olive",
  "#604a06": "Brown Pod",
  "#3f2d04": "Bistre",
  "#ff7e5f": "Cherry",
  "#ff4e50": "Valencia",
  "#fc913a": "California",
  "#f9d423": "Confetti",
  "#e2d810": "Energy Yellow",
  "#b0a10c": "Olive Green",
  
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });
};

addOptionsToColorPicker();

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();

const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";