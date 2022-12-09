const { format } = require('date-fns')

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return format(date, 'MM/dd/yyyy')
  },
};