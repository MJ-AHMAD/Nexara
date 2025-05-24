export function validateJson(jsonString: string): { isValid: boolean; error: string | null } {
  if (!jsonString.trim()) {
    return { isValid: false, error: "JSON cannot be empty" }
  }

  try {
    JSON.parse(jsonString)
    return { isValid: true, error: null }
  } catch (err) {
    if (err instanceof Error) {
      return { isValid: false, error: err.message }
    }
    return { isValid: false, error: "Invalid JSON" }
  }
}
