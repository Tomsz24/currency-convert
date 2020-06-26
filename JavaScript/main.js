// https://api.nbp.pl/api/exchangerates/rates/c/gbp/?format=json
'use strict';


const converter = document.querySelector('.form__calculate');
const selectCurrency = document.querySelector('.form__fieldset__select__currency');
const selectBidAsk = document.querySelector('.form__fieldset__select__BidAsk');
const input = document.querySelector('.form__fieldset__input');
const spanRate = document.querySelector('.form__exchange__rate');
const spanSummary = document.querySelector('.form__value__summary');


const currency = () => {

  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json').then(res => {
    const euroBid = document.querySelector('.EURBid');
    euroBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const euroAsk = document.querySelector('.EURAsk');
    euroAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;

    spanRate.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
  })


  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json').then(res => {
    const usdBid = document.querySelector('.USDBid');
    usdBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const usdAsk = document.querySelector('.USDAsk');
    usdAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;
  })


  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/gbp/?format=json').then(res => {
    const gbpBid = document.querySelector('.GBPBid');
    gbpBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const gbpAsk = document.querySelector('.GBPAsk');
    gbpAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;
  })

  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/chf/?format=json').then(res => {
    const chfBid = document.querySelector('.CHFBid');
    chfBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const chfAsk = document.querySelector('.CHFAsk');
    chfAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;
  })

  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/sek/?format=json').then(res => {
    const sekBid = document.querySelector('.SEKBid');
    sekBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const sekAsk = document.querySelector('.SEKAsk');
    sekAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;
  })

  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/sek/?format=json').then(res => {
    const dkkBid = document.querySelector('.DKKBid');
    dkkBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const dkkAsk = document.querySelector('.DKKAsk');
    dkkAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;
  })

  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/nok/?format=json').then(res => {
    const nokBid = document.querySelector('.NOKBid');
    nokBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const nokAsk = document.querySelector('.NOKAsk');
    nokAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;
  })

  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/cad/?format=json').then(res => {
    const cadBid = document.querySelector('.CADBid');
    cadBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const cadAsk = document.querySelector('.CADAsk');
    cadAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;
  })

  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/jpy/?format=json').then(res => {
    const jpyBid = document.querySelector('.JPYBid');
    jpyBid.textContent = `${(res.data.rates[0].bid * 100).toFixed(4)} PLN`;
    const jpyAsk = document.querySelector('.JPYAsk');
    jpyAsk.textContent = `${(res.data.rates[0].ask * 100).toFixed(4)} PLN`;
  })

  axios.get('https://api.nbp.pl/api/exchangerates/rates/c/czk/?format=json').then(res => {
    const czkBid = document.querySelector('.CZKBid');
    czkBid.textContent = `${res.data.rates[0].bid.toFixed(4)} PLN`;
    const czkAsk = document.querySelector('.CZKAsk');
    czkAsk.textContent = `${res.data.rates[0].ask.toFixed(4)} PLN`;
  })
}

const convert = (event) => {
  event.preventDefault();

  const apiLink = 'https://api.nbp.pl/api/exchangerates/rates/c/';
  let url = apiLink + selectCurrency.value + '/?format=json';

  axios.get(url).then(res => {
    if (selectBidAsk.value === 'bid') {
      spanRate.textContent = `${res.data.rates[0].bid} PLN`;
      summary();
    } else if (selectBidAsk.value === 'ask') {
      spanRate.textContent = `${res.data.rates[0].ask} PLN`;
      summary();
    }
  })
}

const summary = () => {

  let score;
  if (selectBidAsk.value === 'bid') {
    score = (input.value * parseFloat(spanRate.textContent)).toFixed(2)
    spanSummary.textContent = `${score} PLN`
  } else if (selectBidAsk.value === 'ask') {
    score = (input.value / parseFloat(spanRate.textContent)).toFixed(2)
    spanSummary.textContent = `${score} ${selectCurrency.value}`
  }
  console.log('dziala');

}

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    summary();
  }
})



selectBidAsk.addEventListener('change', convert);
selectCurrency.addEventListener('change', convert);
input.addEventListener('change', summary);
window.onload = currency;