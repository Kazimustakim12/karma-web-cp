export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");
export function calculateReadingTime(
  contentLength: number,
  wordsPerMinute = 200
) {
  // Assuming an average of 5 characters per word
  const words = contentLength / 5;
  const readingTimeMinutes = words / wordsPerMinute;
  return Math.ceil(readingTimeMinutes); // Round up to the nearest minute
}
