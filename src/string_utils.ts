/**
 * @fileoverview String utility functions.
 */

/**
 * Capitalizes the first character of a string.
 *
 * @param str - The input string.
 * @returns The string with its first character uppercased.
 */
export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase.
 *
 * @param str - The input string (supports spaces, hyphens, and underscores as delimiters).
 * @returns The camelCase version of the string.
 */
export function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)/g, (_, char: string) => char.toUpperCase())
    .replace(/^(.)/, (char) => char.toLowerCase());
}

/**
 * Converts a string to snake_case.
 *
 * @param str - The input string.
 * @returns The snake_case version of the string.
 */
export function snakeCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/[-\s]+/g, '_')
    .replace(/^_/, '')
    .toLowerCase();
}

/**
 * Converts a string to kebab-case.
 *
 * @param str - The input string.
 * @returns The kebab-case version of the string.
 */
export function kebabCase(str: string): string {
  return snakeCase(str).replace(/_/g, '-');
}

/**
 * Converts a string to PascalCase.
 *
 * @param str - The input string.
 * @returns The PascalCase version of the string.
 */
export function pascalCase(str: string): string {
  return capitalize(camelCase(str));
}

/**
 * Truncates a string to the specified maximum length, appending an ellipsis if truncated.
 *
 * @param str - The input string.
 * @param maxLength - The maximum number of characters (including the ellipsis).
 * @param ellipsis - The ellipsis string to append. Defaults to `'...'`.
 * @returns The truncated string.
 */
export function truncate(str: string, maxLength: number, ellipsis = '...'): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - ellipsis.length) + ellipsis;
}

/**
 * Reverses the characters in a string.
 *
 * @param str - The input string.
 * @returns The reversed string.
 */
export function reverse(str: string): string {
  return [...str].reverse().join('');
}

/**
 * Checks whether a string is a palindrome (case-insensitive, ignores non-alphanumeric characters).
 *
 * @param str - The input string.
 * @returns `true` if the string is a palindrome, otherwise `false`.
 */
export function isPalindrome(str: string): boolean {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized === reverse(normalized);
}

/**
 * Counts the number of words in a string.
 *
 * @param str - The input string.
 * @returns The number of words.
 */
export function countWords(str: string): number {
  const trimmed = str.trim();
  if (trimmed.length === 0) return 0;
  return trimmed.split(/\s+/).length;
}

/**
 * Counts the number of non-overlapping occurrences of a substring within a string.
 *
 * @param str - The string to search within.
 * @param substring - The substring to count.
 * @returns The number of occurrences.
 */
export function countOccurrences(str: string, substring: string): number {
  if (substring.length === 0) return 0;
  let count = 0;
  let index = str.indexOf(substring);
  while (index !== -1) {
    count++;
    index = str.indexOf(substring, index + substring.length);
  }
  return count;
}

/**
 * Converts a string to a URL-friendly slug.
 *
 * @param str - The input string.
 * @returns The slugified string.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Escapes special HTML characters in a string.
 *
 * @param str - The input string.
 * @returns The HTML-escaped string.
 */
export function escapeHtml(str: string): string {
  const escapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return str.replace(/[&<>"']/g, (char) => escapeMap[char]);
}

/**
 * Strips all HTML tags from a string.
 *
 * @param str - The input string containing HTML.
 * @returns The string with all HTML tags removed.
 */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

/**
 * Pads a string on the left to reach the specified length.
 *
 * @param str - The input string.
 * @param length - The target total length.
 * @param padChar - The character used for padding. Defaults to `' '`.
 * @returns The padded string.
 */
export function padLeft(str: string, length: number, padChar = ' '): string {
  return str.padStart(length, padChar);
}

/**
 * Pads a string on the right to reach the specified length.
 *
 * @param str - The input string.
 * @param length - The target total length.
 * @param padChar - The character used for padding. Defaults to `' '`.
 * @returns The padded string.
 */
export function padRight(str: string, length: number, padChar = ' '): string {
  return str.padEnd(length, padChar);
}

/**
 * Repeats a string a given number of times.
 *
 * @param str - The input string.
 * @param times - The number of repetitions.
 * @returns The repeated string.
 */
export function repeat(str: string, times: number): string {
  if (times < 0) throw new RangeError('times must be non-negative');
  return str.repeat(times);
}

/**
 * Checks whether a string contains only whitespace characters.
 *
 * @param str - The input string.
 * @returns `true` if the string is blank, otherwise `false`.
 */
export function isBlank(str: string): boolean {
  return str.trim().length === 0;
}

/**
 * Removes duplicate adjacent characters from a string.
 *
 * @param str - The input string.
 * @returns The string with consecutive duplicate characters collapsed to one.
 */
export function collapseRepeated(str: string): string {
  return str.replace(/(.)\1+/g, '$1');
}

/**
 * Converts full-width alphanumeric characters (Ａ–Ｚ, ａ–ｚ, ０–９) to their half-width equivalents.
 *
 * @param str - The input string.
 * @returns The string with full-width alphanumerics replaced by half-width equivalents.
 */
export function toHalfWidthAlphanumeric(str: string): string {
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0xfee0),
  );
}

/**
 * @deprecated Use {@link toHalfWidthAlphanumeric} instead.
 * Alias kept for backward compatibility.
 */
export const toHalfWidthAlpha = toHalfWidthAlphanumeric;
