'use strict';

{
	const getString = str => [...str].reverse().join('');

	const res = getString('Привет мир');
	console.log(res);
}