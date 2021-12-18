module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

random_emoji: () =>{
  emoji = require('node-emoji');
  const random = emoji.random(); 
  return random.emoji;
}
};
