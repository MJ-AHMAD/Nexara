/**
 * Utility functions for date and time handling
 */

/**
 * Formats a date for Dhaka timezone
 */
export function formatDhakaDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Dhaka",
  }
  return date.toLocaleDateString("en-US", options)
}

/**
 * Formats time for Dhaka timezone
 */
export function formatDhakaTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  }
  return date.toLocaleTimeString("en-US", options)
}
