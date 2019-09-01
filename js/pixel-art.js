var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
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
//variable which is false by default unless the mouse is pressed down
var mouseDown;



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
  $("#grilla-pixeles div").mousedown(function(){
    console.log(this);
    cambioColordePixel(this);
  })
  // change background color of selected div to color of pincel 
};

//function that changes the background color to the color of idicador-de-colorof the element selected (selection)
function cambioColordePixel(selection){
  // store color of pincel in a variable 
  var element= selection
  var pincelColor=indicador.style.backgroundColor;
  console.log(pincelColor);
  element.style.backgroundColor=pincelColor;
};

//function that listens for a click and stores the color of the div selected in a variable. window


// Paso 1: Seleccioná un color de la paleta y mostralo en el indicador de color
//
function onPaletaClick(event) {
  var IndicadorDeColor = document.getElementById("indicador-de-color");
  IndicadorDeColor.style.backgroundColor = event.target.style.backgroundColor;
 };

 window.onload=function seleccionarColorEnPaleta() {
  var paleta = document.getElementById("paleta");
  paleta.addEventListener("click", onPaletaClick);
 };
//function for changing background color of indicador-de-color
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
    cambioIndicador(colorActual);
  })
);

//una funcion que detecta cada vez que esta apretado el mouse y cada vez que esta suelta
function mouseDown(){
  $("#grilla-pixeles div").mousedown(function(){
    mouseDown=true;
    console.log(mouseDown);
  });
};
function mouseUp(){
  $("#grilla-pixeles div").mouseup(function(){
    mouseDown=false;
    console.log(mouseDown);
  });
};

//function that paints the pixel if the mouse is down 

function paint(){
    $("#grilla-pixeles div").mouseover(function(){
    if(mouseDown===true){
      cambioColordePixel(this);
    }else{
      return false;
    };
    });
    };
//funcion para borrar la grilla 
function borrarPixelesGrilla(){
  $("#borrar").click(function(){
    //variable que representa todos los divs de la grilla
    var pixelesGrilla = $("#grilla-pixeles div");
    pixelesGrilla.animate({"background-color": "white"}, 1000);
  });
};

//función para guarder la grilla como png 
function guardarGrilla(){
  $("#guardar").click(function(){
    //variable que representa todos los divs de la grilla
    guardarPixelArt();
  });
};


//funcion que carga la imagen de batman a la grilla 

function cargarBatman(){
  $("#batman").click(function(){
    console.log("batman");
    cargarSuperheroe(batman);
  });
};
//funcion que carga la imagen de Wonder Woman a la grilla 
function cargarWonderWoman(){
  $("#wonder").click(function(){
    console.log("wonderWoman");
    cargarSuperheroe(wonder);
  });
};
//funcion que carga la imagen de flash a la grilla 
function cargarFlash(){
  $("#flash").click(function(){
    console.log("flash");
    cargarSuperheroe(flash);
  });
};
//funcion que carga la imagen de Mujer Invisible a la grilla 
function cargarInvisible(){
  $("#invisible").click(function(){
    console.log("invisible");
    cargarSuperheroe(invisible);
  });
};


$(document).ready(crearDivPaleta());
$(document).ready(changeColor());
$(document).ready(mouseUp());
$(document).ready(mouseDown());
$(document).ready(paint());
$(document).ready(borrarPixelesGrilla());
$(document).ready(cargarBatman());
$(document).ready(cargarWonderWoman());
$(document).ready(cargarFlash());
$(document).ready(cargarInvisible());
$(document).ready(guardarGrilla());
