// BEGIN
function Money(value, currency = 'usd') {
    const getValue = () => value;
    const getCurrency = () => currency;
  
    function exchangeTo(cur) {
      if (currency === cur) {
        return Money(value, currency);
      }
  
      if (cur === 'eur') {
        return Money(value * 0.7, cur);
      }
  
      if (cur === 'usd') {
        return Money(value * 1.2, cur);
      }
    }
  
    function add(money) {
      if (currency === money.getCurrency()) {
        return Money(value + money.getValue(), currency);
      }
  
      let newValue = money.exchangeTo(currency);
      return Money(value + newValue.getValue(), currency);
    }
  
    function format() {
      return value.toLocaleString('ja-JP', {
        style: 'currency',
        currency: currency
      });
    }
  
    return {
      getValue,
      getCurrency,
      exchangeTo,
      add,
      format
    };
  }
  
  export default Money;
// END
