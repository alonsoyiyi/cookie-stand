
const seattle = {
  lugarTienda : 'Seattle',
  minClientesXhora : 23,
  maxClientesXhora : 65,
  avgGalletasXcliente : 6.3,
  galletasXhora: [],
  estimado: function(){
    this.galletasXhora = estimadoVentas(this);
  }
};

const tokyo = {
  lugarTienda : 'Tokyo',
  minClientesXhora : 3,
  maxClientesXhora : 24,
  avgGalletasXcliente : 1.2,
  galletasXhora: [],
  estimado: function(){
   this.galletasXhora = estimadoVentas(this);
  }
};

const dubai = {
  lugarTienda : 'Dubai',
  minClientesXhora : 11,
  maxClientesXhora : 38,
  avgGalletasXcliente : 3.7,
  galletasXhora: [],
  estimado: function(){
   this.galletasXhora = estimadoVentas(this);
  }
};

const paris = {
  lugarTienda : 'París',
  minClientesXhora : 23,
  maxClientesXhora : 65,
  avgGalletasXcliente : 6.3,
  galletasXhora: [],
  estimado: function(){
   this.galletasXhora = estimadoVentas(this);
  }
};

const lima = {
  lugarTienda : 'Lima',
  minClientesXhora : 2,
  maxClientesXhora : 16,
  avgGalletasXcliente : 4.6,
  galletasXhora: [],
  estimado: function(){
   this.galletasXhora = estimadoVentas(this);
  }
};


const horasAtencion = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

const tiendasAtencion = [seattle, tokyo, dubai, paris, lima];


function randomNumero(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function estimadoVentas (tienda){
  const ventas = [];
  for ( let i = 0; i < horasAtencion.length; i++){
    const numClientes = randomNumero(tienda.minClientesXhora, tienda.maxClientesXhora);
    const numHoras = Math.ceil(numClientes*tienda.avgGalletasXcliente);
    ventas.push(numHoras);
  }
  return ventas;
}

function render (tienda){
  const contenedor= document.getElementById('contenedor');

  const ubicacion = document.createElement('section');
  ubicacion.classList.add('ubicacion');
  contenedor.appendChild(ubicacion);

  const tiendaCiudad = document.createElement('h2');
  tiendaCiudad.textContent= tienda.lugarTienda;
  ubicacion.appendChild(tiendaCiudad);

  const list = document.createElement('ul');
  ubicacion.appendChild(list);

  for (let i = 0; i<horasAtencion.length; i++){
    const listItem = document.createElement('li');
    listItem.textContent = horasAtencion[i] + ' : ' +tienda.galletasXhora[i] + ' cookies';
    list.appendChild(listItem);
  }
}

function ejecutar(){
  for ( let i = 0; i<tiendasAtencion.length; i++){
    tiendasAtencion[i].estimado();
    render(tiendasAtencion[i]);
  }
}
ejecutar();


