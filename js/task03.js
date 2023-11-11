'use strict';

{
	const getString = str => [...str].toReversed().join('');
	
	const res = getString('Привет мир');
	console.log(res);
}