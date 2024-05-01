'use strict';

function Location(
  name,
  minCostumerXhour,
  maxCostumerXhour,
  avgCookiesXCostumer
) {
  this.name = name;
  this.minCostumerXhour = minCostumerXhour;
  this.maxCostumerXhour = maxCostumerXhour;
  this.avgCookiesXCostumer = avgCookiesXCostumer;
}

Location.prototype.estimate = function () {
  this.cookiesXhour = estimateSales(this);
};

Location.prototype.renderFila = function () {
  const tr = document.createElement('tr');
  const tdLocation = document.createElement('td');
  tdLocation.textContent = this.name;
  tr.appendChild(tdLocation);
  for (let i = 0; i < attentionHours.length; i++) {
    const td = document.createElement('td');
    td.textContent = this.cookiesXhour[i];
    tr.appendChild(td);
  }
  // Agrega el total de ventas para esta tienda
  const tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookies;
  tr.appendChild(tdTotal);
  return tr;
};

const seattlelocation = new Location('Seattle', 23, 65, 6.3);
const tokyolocation = new Location('Tokyo', 3, 24, 1.3);
const dubailocation = new Location('Dubai', 11, 18, 3.7);
const parislocation = new Location('París', 28, 38, 2.3);
const limalocation = new Location('Lima', 2, 16, 4.6);

const attentionHours = [
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
];

const locations = [
  seattlelocation,
  tokyolocation,
  dubailocation,
  parislocation,
  limalocation,
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function estimateSales(location) {
  const sales = [];
  let totalTienda = 0;
  for (let i = 0; i < attentionHours.length; i++) {
    const numCostumers = randomNumber(
      location.minCostumerXhour,
      location.maxCostumerXhour
    );
    const numHours = Math.ceil(numCostumers * location.avgCookiesXCostumer);
    sales.push(numHours);
    totalTienda += numHours;
  }
  location.totalCookies = totalTienda;
  return sales;
}

const table = document.querySelector('section#tabla table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

function renderCabeza() {
  const tr = document.createElement('tr');
  const thLocation = document.createElement('th');
  thLocation.textContent = 'Locations';
  tr.appendChild(thLocation);
  for (let i = 0; i < attentionHours.length; i++) {
    const th = document.createElement('th');
    th.textContent = attentionHours[i];
    tr.appendChild(th);
  }
  const thTotal = document.createElement('th');
  thTotal.textContent = 'Total';
  tr.appendChild(thTotal);
  thead.appendChild(tr);
}

function renderTiendas() {
  // Renderizar filas para cada tienda
  for (let i = 0; i < locations.length; i++) {
    locations[i].estimate();
    const trow = locations[i].renderFila();
    tbody.appendChild(trow);
  }
}

function renderTotalesPorHora() {
  const totalPorHoraFila = document.createElement('tr');
  const tdTotalPorHora = document.createElement('td');
  tdTotalPorHora.textContent = 'Total';
  totalPorHoraFila.appendChild(tdTotalPorHora);
  for (let i = 0; i < attentionHours.length; i++) {
    let totalHora = 0;
    for (let j = 0; j < locations.length; j++) {
      totalHora += locations[j].cookiesXhour[i];
    }
    const tdTotalHora = document.createElement('td');
    tdTotalHora.textContent = totalHora;
    totalPorHoraFila.appendChild(tdTotalHora);
  }
  // Agrega el total general de ventas
  const tdTotalGlobal = document.createElement('td');
  const totalGlobal = locations.reduce((acc, loc) => acc + loc.totalCookies, 0);
  tdTotalGlobal.textContent = totalGlobal;
  totalPorHoraFila.appendChild(tdTotalGlobal);
  tfoot.appendChild(totalPorHoraFila);
}

function ejecutar() {
  renderCabeza();
  renderTiendas();
  renderTotalesPorHora();
}

ejecutar();
