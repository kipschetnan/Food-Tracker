const { format } = require('date-fns')

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return format(date, 'MM/dd/yyyy')
  },
  percentage: (max, min) => {
    return (max/min)*100
  }
};