let respuestaCompu = Math.round(Math.random() * 2);

let respuestaUsuario = prompt('Que eliges: piedra, papel o tijeras?');

if (respuestaUsuario == 'piedra') {
  respuestaUsuario = 0;
} else if (respuestaUsuario == 'papel') {
  respuestaUsuario = 1;
} else if (respuestaUsuario == 'tijeras') {
  respuestaUsuario = 2;
} else {
  alert('Solo puedes elegir piedra, papel o tijeras');
  throw Error('');
  //acaba el programa
}

if (respuestaCompu == respuestaUsuario) {
  alert('Empate');
} else if (respuestaCompu == 0 && respuestaUsuario == 1) {
  alert('Ganaste con papel');
} else if (respuestaUsuario == 0 && respuestaUsuario == 2) {
  alert('Perdiste contra piedra. Elegiste tijeras');
} else if (respuestaCompu == 1 && respuestaUsuario == 0) {
  alert('Perdiste contra papel.Elegiste piedra');
} else if (respuestaUsuario == 1 && respuestaUsuario == 2) {
  alert('Ganaste con tijeras');
} else if (respuestaCompu == 2 && respuestaUsuario == 0) {
  alert('Ganaste con piedra');
} else if (respuestaUsuario == 2 && respuestaUsuario == 1) {
  alert('Perdiste contra tijeras. Elegiste papel');
} else {
  //manejo de errores
  alert('La compu hizo trampa');
}
