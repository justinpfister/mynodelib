import {yFinNumberConverter} from './numtest';

var yahooFinance = require('yahoo-finance');
const util = require('util')


export const go = async(ticker) => {
const snapshot = await yahooFinance.snapshot({
  symbol: ticker,
  fields: [
            'l1', // Lart Trade (Price Only)
            'r', // peRatio
            'b4', // bookValue
            'j', // 52 Week Low
            't8', // 1 yr price target
            'n', // Name
            'e', // Earning Per Share
            'e7', // Earning Per Share
            'e8', // Earning Per Share
            'e9', // Earning Per Share
            'b4', // Book Value
            'r6', // Price / EPS Estimate Current Year
            'r7', // Price / EPS Estimate Next Year
            's7', // short ratio
            'y', // Dividend Yield
            'd', // Dividend Per Share
            'r1', // Dividend Pay Date
            'q', // Ex-Dividend Date
            'm5', // Change from 200 Day Moving Average
            'm6', // Percent Change from 200 Day Moving Average
            'm7', // Change from 50 Day Moving Average
            'm8', // Percent Change from 50 Day moving Average
            'm3', // 50 Day Moving Average
            'm4', // 200 Day Moving Average
            'j1', // Float Shares





          ],

  // fields: ['s', 'n', 'd1', 'l1', 'y', 'r','j2','f6'],
});

snapshot['marketCapitalization'] = yFinNumberConverter(snapshot['marketCapitalization']);
snapshot['sharesOutstanding'] = snapshot['marketCapitalization'] / snapshot['lastTradePriceOnly'];

  console.log(snapshot);
}
