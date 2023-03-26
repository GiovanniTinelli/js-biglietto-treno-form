// const input da inserire
const inputUser = document.getElementById('name');
const inputkm = document.getElementById('km');
const selectEta = document.getElementById('fasciaEta');

// bottoni
const btnGenera = document.getElementById('genera');
const btnAnnulla = document.getElementById('annulla');

btnGenera.addEventListener('click', function() {
  let validForm = true;

  // const input da inserire in function
  const NameUser = inputUser.value;
  const km = inputkm.value;
  const fasciaEta = selectEta.value;
  const prezzoKm = 0.21;
  const carrozza = Math.ceil(Math.random() * 3);
  const codiceCP = Math.floor(Math.random() * (99999 - 20000 + 1)) + 10000;

  let offerta = 'Prezzo Standard';
  let sconto = 0;

  if (fasciaEta === 'minorenne') {
    sconto = 20;
    offerta = 'Sconto Minorenni';
  } else if (fasciaEta === 'senior') {
    sconto = 40;
    offerta = 'Sconto over 65';
  }

  prezzo = (km * prezzoKm) * (1 - sconto / 100);

  if (NameUser.length < 3) validForm = false;
  if (isNaN(km)) validForm = false;
  if (fasciaEta === '') validForm = false;

  // elementi output
  const outputname = document.getElementById('outputName');
  const outputOfferta = document.getElementById('outputOfferta');
  const outputCarrozza = document.getElementById('outputCarrozza');
  const outputCodice = document.getElementById('outputCodice');
  const outputPrezzo = document.getElementById('outputPrezzo');

  if (validForm) {
    outputname.innerHTML = NameUser;
    outputOfferta.innerHTML = offerta;
    outputCarrozza.innerHTML = carrozza;
    outputCodice.innerHTML = codiceCP;
    outputPrezzo.innerHTML = `&euro; ${prezzo.toFixed(2)}`;
    document.querySelector('.ticket-area').classList.remove('hide');
  } else {
    alert('Inserire tutti i campi correttamente');
  }
});

//  annulla
btnAnnulla.addEventListener('click', function() {
  inputUser.value = '';
  inputkm.value = '';
  selectEta.value = '';
  document.querySelector('.ticket-area').classList.add('hide');
});
