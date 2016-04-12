/**
 * http://usejsdoc.org/
 */

var isEven = function(num) {
	return (num % 2 == 0);
}

test('Test Even...', function() {
	ok(isEven(3), '3 is an odd number');
	ok(isEven(-4), '-4 is a -ve number');
	ok(isEven(0), '0 is a even');
	ok(isEven(10), '10 is even');
});

test('Deep eq', function() {
	deepEqual([10], ['10'], 'Comparing two different arrays');
	equal([10], ['10'], 'Arrays with only eq()');
	equal(0, false, 'compare 0 vs false');
	equal(1, true, 'compare 1 vs true');
	equal('1', true, 'compare "1" and true');
	equal(1, 'true', 'compare 1 and "\'true\'"');
	deepEqual(['25'],['25'], 'compare string array');
	deepEqual({name:"abc"}, {"name":"abc"},"JSON arrays");
});

test('synch test', function() {
	stop();
	setTimeout(function() {
		ok(true);
		start();
	}, 1000);
});

asyncTest('asynch test', function() {
	stop();
	setTimeout(function() {
		ok(true);
		start();
	}, 1000);
});


