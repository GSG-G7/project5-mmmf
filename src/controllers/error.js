const { join } = require('path');

exports.client = (req, res) => {
  res.status(404)
  .sendFile(
    join(__dirname, '..', '..', 'public', 'html', 'error_404.html'));
};

exports.server = (req, res) => {
  res.status(500)
.sendFile(
join(__dirname, '..', '..', 'public', 'html', 'error_500.html'));
};
