# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mikedragert/lotide`

**Require it:**

`const _ = require('@mikedragert/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description

* `assertEqual(...)`: assert two values are equal
* `assertArraysEqual(...)`: assert two arrays are equal
* `assertObjectsEqual(...)`: assert two objects are equal
* `head(...)`: select the head of an array
* `tail(...)`: select the tail of an array
* `middle(...)`: select the middle of an array
* `countLetters(...)`: count the number of each letter and return in an object
* `countOnly(...)`: count only the specified items
* `deepFlatten(...)`: flatten an array (recursive so it will handle embedded arrays)
* `eqArrays(...)`: determine if two arrays are equal
* `eqObjects(...)`: determine if two objects are equal
* `findKey(...)`: find a key in an object based on the provided callback
* `findKeyByValue(...)`:  find a key in an object based on the provided object
* `flatten(...)`: flatten an array, only goes one level deep
* `letterPositions(...)`: determine all positions of every letter in the string, does not return positions of " "
* `map(...)`: return a mapped array based on the provided callback
* `takeUntil(...)`: return an array up to the first element that matches the given callback
* `without(...)`: return an array, without any elements that are specified in the exclusion array