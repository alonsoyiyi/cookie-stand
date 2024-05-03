/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */

const seattleIndex = [
    'Seattle',
    'Hours open: 06:00 - 19:00',
    'Contact info: 123-456-7890',
    'Location: 2901 3rd Ave #300, Seattle, WA 98121'
  ];

  const tokyoIndex = [
    'Tokyo',
    'Hours open: 06:00 - 19:00',
    'Contact info: 222-222-2222',
    'Location: 1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634'
  ];

  const dubaiIndex = [
    'Dubai',
    'Hours open: 06:00 - 19:00',
    'Contact info: 333-333-3333',
    'Location: 1 Sheikh Mohammed bin Rashid Blvd - Dubai'
  ];

  const parisIndex = [
    'Paris',
    'Hours open: 06:00 - 19:00',
    'Contact info: 444-444-4444',
    'Location: Champ de Mars, 5 Avenue Anatole France, 75007 París'
  ];

  const limaIndex = [
    'Lima',
    'Hours open: 06:00 - 19:00',
    'Contact info: 555-555-5555',
    'Location: Ca. Gral Borgoño cuadra 8, Miraflores 15074'
  ];


function datosTienda(nombreTienda, arrayTienda) {
    const sectionTienda = document.querySelector(`section#${nombreTienda.toLowerCase()}`);
    
    const h2 = document.createElement('h2');
    h2.textContent = nombreTienda;
    sectionTienda.appendChild(h2);
    
    arrayTienda.slice(1).forEach(info => {
        const p = document.createElement('p');
        p.textContent = info;
        sectionTienda.appendChild(p);
      });
  }
  function renderIndex(){
  datosTienda(seattleIndex[0], seattleIndex);
  datosTienda(tokyoIndex[0], tokyoIndex);
  datosTienda(dubaiIndex[0], dubaiIndex);
  datosTienda(parisIndex[0], parisIndex);
  datosTienda(limaIndex[0], limaIndex);
  }

  renderIndex();
