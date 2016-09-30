import {yFinNumberConverter} from './numtest';

var yahooFinance = require('yahoo-finance');
const util = require('util')


export const yFinHistorical = async(ticker,from_date,to_date,period = 'w') => {
const historical = await yahooFinance.historical({
  symbol: ticker,
  from: from_date,
  to: to_date,
  period: period,

  // fields: ['s', 'n', 'd1', 'l1', 'y', 'r','j2','f6'],
});

//snapshot['marketCapitalization'] = yFinNumberConverter(snapshot['marketCapitalization']);
//snapshot['sharesOutstanding'] = snapshot['marketCapitalization'] / snapshot['lastTradePriceOnly'];

  return historical;
}
