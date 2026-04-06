# 関数リファレンス

`string-utility` ライブラリが提供するすべての関数の一覧です。

> **作成履歴**
> - 初版: [summary.md](summary.md) を基に作成
> - 追加: `toHalfWidthAlpha` — 指示により追加
> - 変更: `toHalfWidthAlpha` → `toHalfWidthAlphanumeric` に改名、数字を対象に追加。旧名はエイリアスとして存続

---

## capitalize

```ts
capitalize(str: string): string
```

文字列の先頭文字を大文字にして返します。

| 引数 | 型 | 説明 |
|---|---|---|
| `str` | `string` | 対象の文字列 |

**例**
```ts
capitalize('hello');        // => 'Hello'
capitalize('');             // => ''
capitalize('World');        // => 'World'
```

---

## camelCase

```ts
camelCase(str: string): string
```

スペース・ハイフン・アンダースコア区切りの文字列を camelCase に変換します。

**例**
```ts
camelCase('hello world');   // => 'helloWorld'
camelCase('foo-bar-baz');   // => 'fooBarBaz'
camelCase('foo_bar');       // => 'fooBar'
```

---

## snakeCase

```ts
snakeCase(str: string): string
```

文字列を snake_case に変換します。

**例**
```ts
snakeCase('camelCase');     // => 'camel_case'
snakeCase('hello world');   // => 'hello_world'
snakeCase('foo-bar');       // => 'foo_bar'
```

---

## kebabCase

```ts
kebabCase(str: string): string
```

文字列を kebab-case に変換します。

**例**
```ts
kebabCase('camelCase');     // => 'camel-case'
kebabCase('foo_bar');       // => 'foo-bar'
```

---

## pascalCase

```ts
pascalCase(str: string): string
```

文字列を PascalCase に変換します。

**例**
```ts
pascalCase('hello world');  // => 'HelloWorld'
pascalCase('my-component'); // => 'MyComponent'
```

---

## truncate

```ts
truncate(str: string, maxLength: number, ellipsis?: string): string
```

文字列を指定した最大長に切り詰め、末尾に省略記号を付加します。省略記号のデフォルトは `'...'` です。

| 引数 | 型 | デフォルト | 説明 |
|---|---|---|---|
| `str` | `string` | — | 対象の文字列 |
| `maxLength` | `number` | — | 省略記号を含む最大文字数 |
| `ellipsis` | `string` | `'...'` | 末尾に付加する省略記号 |

**例**
```ts
truncate('Hello, World!', 8);          // => 'Hello...'
truncate('Hello, World!', 7, '…');    // => 'Hello, …'
truncate('Hi', 10);                    // => 'Hi'
```

---

## reverse

```ts
reverse(str: string): string
```

文字列を逆順にして返します。

**例**
```ts
reverse('abc');   // => 'cba'
reverse('');      // => ''
```

---

## isPalindrome

```ts
isPalindrome(str: string): boolean
```

文字列が回文かどうかを判定します（大文字小文字を無視し、英数字以外の文字を除外して判定します）。

**例**
```ts
isPalindrome('racecar');                             // => true
isPalindrome('A man, a plan, a canal: Panama');      // => true
isPalindrome('hello');                               // => false
```

---

## countWords

```ts
countWords(str: string): number
```

文字列中の単語数を返します。連続する空白はひとつの区切りとして扱います。

**例**
```ts
countWords('hello world foo');  // => 3
countWords('');                 // => 0
countWords('a  b   c');        // => 3
```

---

## countOccurrences

```ts
countOccurrences(str: string, substring: string): number
```

文字列中に部分文字列が何回出現するかを返します（重複なし）。`substring` が空文字列の場合は `0` を返します。

**例**
```ts
countOccurrences('ababab', 'ab');   // => 3
countOccurrences('hello', 'xyz');   // => 0
countOccurrences('hello', '');      // => 0
```

---

## slugify

```ts
slugify(str: string): string
```

文字列を URL に使用可能なスラグ形式に変換します。アクセント記号を除去し、英数字とハイフン以外の文字を削除します。

**例**
```ts
slugify('Hello World!');    // => 'hello-world'
slugify('foo  --  bar');    // => 'foo-bar'
slugify('café');            // => 'cafe'
```

---

## escapeHtml

```ts
escapeHtml(str: string): string
```

HTML の特殊文字（`& < > " '`）をエスケープして返します。

| 文字 | エスケープ後 |
|---|---|
| `&` | `&amp;` |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `"` | `&quot;` |
| `'` | `&#39;` |

**例**
```ts
escapeHtml('<div class="foo">bar & \'baz\'</div>');
// => '&lt;div class=&quot;foo&quot;&gt;bar &amp; &#39;baz&#39;&lt;/div&gt;'
```

---

## stripHtml

```ts
stripHtml(str: string): string
```

HTML タグをすべて除去して返します。

**例**
```ts
stripHtml('<p>Hello <strong>World</strong></p>');  // => 'Hello World'
```

---

## padLeft

```ts
padLeft(str: string, length: number, padChar?: string): string
```

文字列の左側を指定文字で埋めて、指定した長さにして返します。`padChar` のデフォルトは空白 `' '` です。

**例**
```ts
padLeft('5', 3, '0');   // => '005'
padLeft('hello', 3);    // => 'hello'  // 元の文字列より短い場合は変更なし
```

---

## padRight

```ts
padRight(str: string, length: number, padChar?: string): string
```

文字列の右側を指定文字で埋めて、指定した長さにして返します。`padChar` のデフォルトは空白 `' '` です。

**例**
```ts
padRight('hi', 5, '-');  // => 'hi---'
```

---

## repeat

```ts
repeat(str: string, times: number): string
```

文字列を指定回数繰り返して返します。`times` に負の値を指定すると `RangeError` をスローします。

**例**
```ts
repeat('ab', 3);   // => 'ababab'
repeat('abc', 0);  // => ''
repeat('x', -1);   // => throws RangeError
```

---

## isBlank

```ts
isBlank(str: string): boolean
```

文字列が空、またはホワイトスペースのみで構成されている場合に `true` を返します。

**例**
```ts
isBlank('');        // => true
isBlank('   ');     // => true
isBlank('hello');   // => false
```

---

## collapseRepeated

```ts
collapseRepeated(str: string): string
```

連続する同一文字を1文字に圧縮して返します。

**例**
```ts
collapseRepeated('aaabbbccc');  // => 'abc'
collapseRepeated('aabbcc dd');  // => 'abc d'
```

---

## toHalfWidthAlphanumeric *(指示により追加)*

```ts
toHalfWidthAlphanumeric(str: string): string
```

全角英数字（`Ａ`–`Ｚ`、`ａ`–`ｚ`、`０`–`９`）を半角に変換して返します。記号など英数字以外の全角文字は変換しません。

**例**
```ts
toHalfWidthAlphanumeric('ＡＢＣ');             // => 'ABC'
toHalfWidthAlphanumeric('ａｂｃ');             // => 'abc'
toHalfWidthAlphanumeric('０１２３４５６７８９'); // => '0123456789'
toHalfWidthAlphanumeric('Ａ１ｂ２');           // => 'A1b2'
toHalfWidthAlphanumeric('Ｈｅｌｌｏ　World'); // => 'Hello　World'
```

---

## toHalfWidthAlpha *(非推奨・後方互換エイリアス)*

```ts
toHalfWidthAlpha(str: string): string
```

`toHalfWidthAlphanumeric` の後方互換エイリアスです。新規コードでは `toHalfWidthAlphanumeric` を使用してください。
