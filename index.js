leftpad = require('left-pad');

function rightpad(str, len, ch)
{
	str = String(str).split('').reverse().join('');

	return leftpad(str, len, ch).split('').reverse().join('');
}

module.exports = rightpad;