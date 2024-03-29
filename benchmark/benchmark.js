/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var pow = require( '@stdlib/math-base-special-pow' );
var pkg = require( './../package.json' ).name;
var isStringArray = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {Function} fcn - function to benchmark
* @param {PositiveInteger} len - array length
* @param {boolean} primitives - boolean indicating whether to fill array with primitives or objects
* @returns {Function} benchmark function
*/
function createBenchmark( fcn, len, primitives ) {
	var x;
	var i;

	x = [];
	if ( primitives ) {
		for ( i = 0; i < len; i++ ) {
			x.push( 'beep' );
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			x.push( new String( 'beep' ) ); // eslint-disable-line no-new-wrappers
		}
	}
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var bool;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			// Note: we are testing the worst case scenario where a function must scan the entire array before finding a failing value.
			x[ len-1 ] = i * 3.14;
			bool = fcn( x );
			if ( typeof bool !== 'boolean' ) {
				b.fail( 'should return a boolean' );
			}
		}
		b.toc();
		if ( isBoolean( bool ) ) {
			b.pass( 'benchmark finished' );
		} else {
			b.fail( 'should return a boolean' );
		}
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );

		f = createBenchmark( isStringArray, len, false );
		bench( pkg+':len='+len, f );

		f = createBenchmark( isStringArray.primitives, len, true );
		bench( pkg+':primitives:len='+len, f );

		f = createBenchmark( isStringArray.objects, len, false );
		bench( pkg+':objects:len='+len, f );
	}
}

main();
