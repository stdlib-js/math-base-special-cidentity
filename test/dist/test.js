/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var tape = require( 'tape' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var Complex128 = require( '@stdlib/complex-float64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cidentity = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cidentity, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the identity function when provided a finite number', function test( t ) {
	var v;

	v = cidentity( new Complex128( -2.0, 1.0 ) );
	t.equal( real( v ), -2.0, 'returns expected value' );
	t.equal( imag( v ), 1.0, 'returns expected value' );

	v = cidentity( new Complex128( 3.0, -2.0 ) );
	t.equal( real( v ), 3.0, 'returns expected value' );
	t.equal( imag( v ), -2.0, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the identity function when provided +-zero', function test( t ) {
	var v;

	v = cidentity( new Complex128( -0.0, -0.0 ) );
	t.equal( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.equal( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	v = cidentity( new Complex128( 0.0, 0.0 ) );
	t.equal( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( imag( v ) ), true, 'returns expected value' );

	v = cidentity( new Complex128( -0.0, 0.0 ) );
	t.equal( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( imag( v ) ), true, 'returns expected value' );

	v = cidentity( new Complex128( 0.0, -0.0 ) );
	t.equal( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.equal( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the identity function when provided +-infinity', function test( t ) {
	var v;

	v = cidentity( new Complex128( PINF, PINF ) );
	t.equal( real( v ), PINF, 'returns expected value' );
	t.equal( imag( v ), PINF, 'returns expected value' );

	v = cidentity( new Complex128( NINF, NINF ) );
	t.equal( real( v ), NINF, 'returns expected value' );
	t.equal( imag( v ), NINF, 'returns expected value' );

	v = cidentity( new Complex128( NINF, PINF ) );
	t.equal( real( v ), NINF, 'returns expected value' );
	t.equal( imag( v ), PINF, 'returns expected value' );

	v = cidentity( new Complex128( PINF, NINF ) );
	t.equal( real( v ), PINF, 'returns expected value' );
	t.equal( imag( v ), NINF, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the identity function when provided `NaN`', function test( t ) {
	var v;

	v = cidentity( new Complex128( NaN, NaN ) );
	t.equal( isnan( real( v ) ), true, 'returns expected value' );
	t.equal( isnan( imag( v ) ), true, 'returns expected value' );

	v = cidentity( new Complex128( 1.0, NaN ) );
	t.equal( real( v ), 1.0, 'returns expected value' );
	t.equal( isnan( imag( v ) ), true, 'returns expected value' );

	v = cidentity( new Complex128( NaN, 1.0 ) );
	t.equal( isnan( real( v ) ), true, 'returns expected value' );
	t.equal( imag( v ), 1.0, 'returns expected value' );

	t.end();
});
