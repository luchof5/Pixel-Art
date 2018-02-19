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


// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual

});


var $paleta = $("#paleta");
var $grillaPixeles = $("#grilla-pixeles");

//Crea la paleta de colore
function paletaColor() {
  for (var i = 0; i < nombreColores.length; i++) {
    var $colores = $("<div/>", {"class": "color-paleta"});
    $colores.css("background-color", nombreColores[i]);
    $paleta.append($colores);
  }
};
paletaColor();

//Crea la grilla de pixeles
function grillaPixel() {
  for (var i = 0; i <= 1749; i++) {
    var $pixel = $("<div/>");
    $grillaPixeles.append($pixel);
  }
};
grillaPixel();


var $indicadorColor = $('#indicador-de-color');
var $mensajeColor = $('#indicador-de-color-mensaje');

//Cambia el indicador de color y el msensaje al color seleccionado de la paleta de colores
function cambiarColor() {
  var $color = $(this).css('background-color');
  $indicadorColor.css('background-color', $color);
  $mensajeColor.text('Pincel: '+ $color);
};
$('.color-paleta').click(cambiarColor);


var $pixel = $grillaPixeles.children();

//Pinta los pixeles con el color del indicador
function pintarPixel() {
  var $pintar = $indicadorColor.css('background-color');
  $(this).css('background-color', $pintar);
}
$pixel.click(pintarPixel);

//Cambia el pincel por el color elegido de la rueda de colores
$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $indicadorColor.css('background-color', colorActual);
});

var $hacerClick;

$pixel.mousedown(function() {
  $hacerClick = true;
});

$pixel.mouseup(function() {
  $hacerClick = false;
});
//Pintar sin soltar el click
$pixel.mousemove(function(event) {
  $hacerClick ? event.target.click(pintarPixel) : null;
});

//Borrar todo
$('#borrar').click(function() {
  $pixel.animate({"background-color": ""}, 1500);
});

//Carga a batman
$('#batman').click(function(event) {
  cargarSuperheroe(batman);
});
//Carga a la mujer maravilla
$('#wonder').click(function(event) {
  cargarSuperheroe(wonder);
});
//Carga a flash
$('#flash').click(function(event) {
  cargarSuperheroe(flash);
});
//Carga a la mujer invisible
$('#invisible').click(function(event) {
  cargarSuperheroe(invisible);
});
