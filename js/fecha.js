var f=new Date();
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
document.write('<div class="mifecha">');
document.write('<div class="dia">'+f.getDate()+'/</div>');
document.write('<div class="mes">'+meses[f.getMonth()] +'/</div>');
document.write('<div class="ano">'+f.getFullYear()+'</div>');
document.write('</div>');