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
  toHalfWidthAlpha,
  toHalfWidthAlphanumeric,
  truncate,
} from './string_utils';

describe('capitalize', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('returns empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });
  it('leaves already-capitalized strings unchanged', () => {
    expect(capitalize('World')).toBe('World');
  });
});

describe('camelCase', () => {
  it('converts space-separated words', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });
  it('converts kebab-case', () => {
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
  });
  it('converts snake_case', () => {
    expect(camelCase('foo_bar')).toBe('fooBar');
  });
});

describe('snakeCase', () => {
  it('converts camelCase', () => {
    expect(snakeCase('camelCase')).toBe('camel_case');
  });
  it('converts space-separated words', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });
  it('converts kebab-case', () => {
    expect(snakeCase('foo-bar')).toBe('foo_bar');
  });
});

describe('kebabCase', () => {
  it('converts camelCase', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
  });
  it('converts snake_case', () => {
    expect(kebabCase('foo_bar')).toBe('foo-bar');
  });
});

describe('pascalCase', () => {
  it('converts space-separated words', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
  });
  it('converts kebab-case', () => {
    expect(pascalCase('my-component')).toBe('MyComponent');
  });
});

describe('truncate', () => {
  it('truncates long strings', () => {
    expect(truncate('Hello, World!', 8)).toBe('Hello...');
  });
  it('leaves short strings unchanged', () => {
    expect(truncate('Hi', 10)).toBe('Hi');
  });
  it('supports custom ellipsis', () => {
    expect(truncate('Hello, World!', 7, '…')).toBe('Hello, …');
  });
});

describe('reverse', () => {
  it('reverses a simple string', () => {
    expect(reverse('abc')).toBe('cba');
  });
  it('handles empty string', () => {
    expect(reverse('')).toBe('');
  });
});

describe('isPalindrome', () => {
  it('detects simple palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });
  it('ignores case', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });
  it('ignores non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
  it('returns false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});

describe('countWords', () => {
  it('counts words in a sentence', () => {
    expect(countWords('hello world foo')).toBe(3);
  });
  it('returns 0 for empty or blank strings', () => {
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
  });
  it('handles multiple spaces', () => {
    expect(countWords('a  b   c')).toBe(3);
  });
});

describe('countOccurrences', () => {
  it('counts non-overlapping occurrences', () => {
    expect(countOccurrences('ababab', 'ab')).toBe(3);
  });
  it('returns 0 when not found', () => {
    expect(countOccurrences('hello', 'xyz')).toBe(0);
  });
  it('returns 0 for empty substring', () => {
    expect(countOccurrences('hello', '')).toBe(0);
  });
});

describe('slugify', () => {
  it('converts a title to a slug', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
  });
  it('collapses multiple hyphens', () => {
    expect(slugify('foo  --  bar')).toBe('foo-bar');
  });
  it('strips accents', () => {
    expect(slugify('café')).toBe('cafe');
  });
});

describe('escapeHtml', () => {
  it('escapes HTML special characters', () => {
    expect(escapeHtml('<div class="foo">bar & \'baz\'</div>')).toBe(
      '&lt;div class=&quot;foo&quot;&gt;bar &amp; &#39;baz&#39;&lt;/div&gt;',
    );
  });
});

describe('stripHtml', () => {
  it('removes HTML tags', () => {
    expect(stripHtml('<p>Hello <strong>World</strong></p>')).toBe('Hello World');
  });
});

describe('padLeft', () => {
  it('pads a string on the left', () => {
    expect(padLeft('5', 3, '0')).toBe('005');
  });
  it('does not truncate strings longer than length', () => {
    expect(padLeft('hello', 3)).toBe('hello');
  });
});

describe('padRight', () => {
  it('pads a string on the right', () => {
    expect(padRight('hi', 5, '-')).toBe('hi---');
  });
});

describe('repeat', () => {
  it('repeats a string', () => {
    expect(repeat('ab', 3)).toBe('ababab');
  });
  it('returns empty string for 0 repetitions', () => {
    expect(repeat('abc', 0)).toBe('');
  });
  it('throws for negative repetitions', () => {
    expect(() => repeat('x', -1)).toThrow(RangeError);
  });
});

describe('isBlank', () => {
  it('returns true for empty string', () => {
    expect(isBlank('')).toBe(true);
  });
  it('returns true for whitespace-only string', () => {
    expect(isBlank('   ')).toBe(true);
  });
  it('returns false for non-blank string', () => {
    expect(isBlank('hello')).toBe(false);
  });
});

describe('collapseRepeated', () => {
  it('collapses repeated characters', () => {
    expect(collapseRepeated('aaabbbccc')).toBe('abc');
  });
  it('leaves non-repeated characters unchanged', () => {
    expect(collapseRepeated('abc')).toBe('abc');
  });
  it('handles mixed input', () => {
    expect(collapseRepeated('aabbcc dd')).toBe('abc d');
  });
});

describe('toHalfWidthAlphanumeric', () => {
  it('converts full-width uppercase letters', () => {
    expect(toHalfWidthAlphanumeric('ＡＢＣ')).toBe('ABC');
  });
  it('converts full-width lowercase letters', () => {
    expect(toHalfWidthAlphanumeric('ａｂｃ')).toBe('abc');
  });
  it('converts full-width digits', () => {
    expect(toHalfWidthAlphanumeric('０１２３４５６７８９')).toBe('0123456789');
  });
  it('converts mixed full-width alphanumerics', () => {
    expect(toHalfWidthAlphanumeric('Ａ１ｂ２')).toBe('A1b2');
  });
  it('leaves half-width characters unchanged', () => {
    expect(toHalfWidthAlphanumeric('ABC 123')).toBe('ABC 123');
  });
  it('handles mixed full-width and other characters', () => {
    expect(toHalfWidthAlphanumeric('Ｈｅｌｌｏ　World')).toBe('Hello　World');
  });
  it('returns empty string unchanged', () => {
    expect(toHalfWidthAlphanumeric('')).toBe('');
  });
});

describe('toHalfWidthAlpha (alias)', () => {
  it('is an alias for toHalfWidthAlphanumeric', () => {
    expect(toHalfWidthAlpha).toBe(toHalfWidthAlphanumeric);
  });
});
