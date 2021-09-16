var d = document.getElementById ("mi_dibujo");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.fillStyle = '#F0DB4F';
lienzo.strokeStyle = "Red";
lienzo.moveTo(50, 50, 150, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();