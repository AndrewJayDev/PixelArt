var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Variable para seleccionar #paleta del dom y guardarlo en un variable con jQuery
var paleta = document.getElementById("paleta");

//Variable para seleccionar #grilla-pixeles del dom y guardarlo en un variable con jQuery
var grillaPixeles = document.getElementById("grilla-pixeles");
//variable para seleccionar #indicador-de-color del dom
var indicador= document.getElementById("indicador-de-color");



//function que recorra la lista de colores nombreColores y cree un elemento div
 function crearDivPaleta(){
  for(var i = 0; i<nombreColores.length; i++){
    var divNuevo = document.createElement("div");
    //asigne clase .color-paleta
    divNuevo.className ="color-paleta";
    //asigne un background-color: color
    divNuevo.style.backgroundColor= nombreColores[i];
    //Adds an Id which is the same as color so it can be used later
    divNuevo.id = nombreColores[i];

    //agrega el elemento como hijo del elemento paleta
    paleta.appendChild(divNuevo);
    };
 };

 //Codigo que crea cajas de la grilla

function crearCajasPixeles(){
  var numeroDePixeles=1750;
  for(var i = 0; i<numeroDePixeles; i++){
  var pixel=document.createElement("div");
	pixel.className="cursor-personalizado";
	grillaPixeles.appendChild(pixel);
	
  };
};
crearCajasPixeles(grillaPixeles);
// function to change pixel color of div clicked

function changeColor(){
  // listen for click on div in #grilla-pixeles
  $("#grilla-pixeles div").click(function(){
    console.log(this);
    // store color of pincel in a variable 
    var pincelColor=indicador.style.backgroundColor;
    console.log(pincelColor);
    this.style.backgroundColor=pincelColor;
  })
  // change background color of selected div to color of pincel 
};

//function that listens for a click and stores the color of the div selected in a variable. window
//window load 
window.onload = function(){
  $("#paleta div").click(function(){
    console.log(this.style.backgroundColor);
    var color = this.style.backgroundColor;
    cambioIndicador(color);
  })
};
//takes the stored color and changes the background-color of #indicador-de-color
function cambioIndicador(color){
  indicador.style.backgroundColor=color;
};
 

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    


  })
);


 $(document).ready(crearDivPaleta());
 $(document).ready(changeColor());