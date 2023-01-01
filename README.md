<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isStringArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an array of strings.



<section class="usage">

## Usage

```javascript
import isStringArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { objects, primitives } from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@deno/mod.js';
```

#### isStringArray( value )

Tests if a `value` is an array of strings.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isStringArray( [ 'beep', new String('boop') ] );
// returns true

bool = isStringArray( [ 'beep', null ] );
// returns false
```

#### isStringArray.primitives( value )

Tests if a `value` is an `array` containing **only** `string` primitives.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isStringArray.primitives( [ 'beep', 'boop' ] );
// returns true

bool = isStringArray.primitives( [ 'beep', new String('boop') ] );
// returns false
```

#### isStringArray.objects( value )

Tests if a `value` is an `array` containing **only** `String` objects.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isStringArray.objects( [ new String('beep'), new String('boop') ] );
// returns true

bool = isStringArray.objects( [ 'beep', new String('boop') ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
import isStringArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@deno/mod.js';

var bool = isStringArray( [ 'Hello World!' ] );
// returns true

bool = isStringArray( [ 'a', 'b', 'c' ] );
// returns true

bool = isStringArray( [ new String( 'abc' ), 'def', 'ghi' ] );
// returns true

bool = isStringArray( 'abc' );
// returns false

bool = isStringArray( [] );
// returns false

bool = isStringArray( [ 'a', NaN ] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-string`][@stdlib/assert/is-string]</span><span class="delimiter">: </span><span class="description">test if a value is a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-string-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-string-array

[test-image]: https://github.com/stdlib-js/assert-is-string-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-string-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-string-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-string-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-string-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-string-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-string-array/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-string-array/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-string-array/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-string-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-string-array/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert-is-array/tree/deno

[@stdlib/assert/is-string]: https://github.com/stdlib-js/assert-is-string/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
