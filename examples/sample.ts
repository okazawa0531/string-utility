/**
 * @fileoverview string-utility の使用例
 */

import {
  camelCase,
  capitalize,
  collapseRepeated,
  countOccurrences,
  countWords,
  escapeHtml,
  isBlank,
  isPalindrome,
  kebabCase,
  padLeft,
  padRight,
  pascalCase,
  repeat,
  reverse,
  slugify,
  snakeCase,
  stripHtml,
  toHalfWidthAlphanumeric,
  truncate,
} from '../src/string_utils';

// ケース変換
console.log('=== ケース変換 ===');
console.log(capitalize('hello world'));            // Hello world
console.log(camelCase('hello world'));             // helloWorld
console.log(snakeCase('helloWorld'));              // hello_world
console.log(kebabCase('helloWorld'));              // hello-world
console.log(pascalCase('hello world'));            // HelloWorld

// 整形・加工
console.log('\n=== 整形・加工 ===');
console.log(truncate('長い文字列のサンプルテキスト', 10));  // 長い文字列のサ...
console.log(reverse('abcdef'));                    // fedcba
console.log(padLeft('7', 4, '0'));                 // 0007
console.log(padRight('ok', 5, '-'));               // ok---
console.log(repeat('abc', 3));                     // abcabcabc
console.log(collapseRepeated('aaabbbccc'));        // abc

// 検索・判定
console.log('\n=== 検索・判定 ===');
console.log(isPalindrome('racecar'));              // true
console.log(isPalindrome('A man, a plan, a canal: Panama'));  // true
console.log(countWords('The quick brown fox'));    // 4
console.log(countOccurrences('banana', 'an'));     // 2
console.log(isBlank('   '));                       // true

// Web 向け
console.log('\n=== Web 向け ===');
console.log(escapeHtml('<p class="note">A & B</p>'));
// &lt;p class=&quot;note&quot;&gt;A &amp; B&lt;/p&gt;
console.log(stripHtml('<p>Hello <strong>World</strong></p>'));  // Hello World
console.log(slugify('Hello World! 2024'));         // hello-world-2024

// 全角→半角変換
console.log('\n=== 全角→半角変換 ===');
console.log(toHalfWidthAlphanumeric('Ｈｅｌｌｏ　Ｗｏｒｌｄ'));  // Hello　World
console.log(toHalfWidthAlphanumeric('２０２４年'));                  // 2024年
console.log(toHalfWidthAlphanumeric('ＡＢＣ－１２３'));             // ABC－123
