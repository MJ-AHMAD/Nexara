# API Documentation

This page documents the internal APIs and hooks used in MJ-AHMAD OVERVIEW. This information is primarily for developers who want to extend or modify the application.

## Table of Contents

- [Utility Functions](#utility-functions)
- [Custom Hooks](#custom-hooks)
- [Data Fetching](#data-fetching)
- [Authentication](#authentication)
- [State Management](#state-management)
- [External APIs](#external-apis)

## Utility Functions

### Date Utils

**File**: `lib/date-utils.ts`

**Functions**:

#### `formatDate(date: Date, format?: string): string`

Formats a date according to the specified format.

**Parameters**:
- `date`: Date object to format
- `format`: (Optional) Format string (default: 'YYYY-MM-DD')

**Returns**: Formatted date string

**Example**:
\`\`\`typescript
import { formatDate } from '@/lib/date-utils'

const today = new Date()
const formattedDate = formatDate(today, 'DD MMM YYYY')
console.log(formattedDate) // e.g., "21 May 2025"
\`\`\`

#### `getDaysBetween(startDate: Date, endDate: Date): number`

Calculates the number of days between two dates.

**Parameters**:
- `startDate`: Start date
- `endDate`: End date

**Returns**: Number of days

**Example**:
\`\`\`typescript
import { getDaysBetween } from '@/lib/date-utils'

const start = new Date('2025-01-01')
const end = new Date('2025-01-10')
const days = getDaysBetween(start, end)
console.log(days) // 9
\`\`\`

### JSON Validation

**File**: `lib/validate-json.ts`

**Functions**:

#### `validateJSON(json: string): { valid: boolean; error?: string }`

Validates a JSON string.

**Parameters**:
- `json`: JSON string to validate

**Returns**: Object with validation result
- `valid`: Boolean indicating if JSON is valid
- `error`: Error message if invalid

**Example**:
\`\`\`typescript
import { validateJSON } from '@/lib/validate-json'

const jsonString = '{"name": "John", "age": 30}'
const result = validateJSON(jsonString)
console.log(result) // { valid: true }
\`\`\`

### JSON Structure

**File**: `lib/json-structure.ts`

**Functions**:

#### `analyzeJSONStructure(json: object): { depth: number; keys: string[]; types: Record<string, string> }`

Analyzes the structure of a JSON object.

**Parameters**:
- `json`: JSON object to analyze

**Returns**: Object with structure analysis
- `depth`: Maximum nesting depth
- `keys`: Array of top-level keys
- `types`: Record of key-type pairs

**Example**:
\`\`\`typescript
import { analyzeJSONStructure } from '@/lib/json-structure'

const json = { name: "John", age: 30, address: { city: "New York" } }
const analysis = analyzeJSONStructure(json)
console.log(analysis)
// { depth: 2, keys: ["name", "age", "address"], types: { name: "string", age: "number", address: "object" } }
\`\`\`

## Custom Hooks

### `useLocalStorage`

**File**: `hooks/use-local-storage.ts`

**Description**: Hook for persisting state in localStorage.

**Parameters**:
- `key`: Storage key
- `initialValue`: Initial state value

**Returns**: [storedValue, setValue] tuple

**Example**:
\`\`\`typescript
import { useLocalStorage } from '@/hooks/use-local-storage'

function WaterTracker() {
  const [waterIntake, setWaterIntake] = useLocalStorage('water-intake', 0)
  
  return (
    <div>
      <p>Water intake: {waterIntake}ml</p>
      <button onClick={() => setWaterIntake(waterIntake + 250)}>
        Add 250ml
      </button>
    </div>
  )
}
\`\`\`

### `useMobile`

**File**: `hooks/use-mobile.tsx`

**Description**: Hook for detecting mobile devices.

**Parameters**: None

**Returns**: Boolean indicating if the device is mobile

**Example**:
\`\`\`typescript
import { useMobile } from '@/hooks/use-mobile'

function ResponsiveComponent() {
  const isMobile = useMobile()
  
  return (
    <div>
      {isMobile ? (
        <MobileView />
      ) : (
        <DesktopView />
      )}
    </div>
  )
}
\`\`\`

## Data Fetching

### ISS Position API

**File**: `components/iss-tracker.tsx`

**Endpoint**: `https://api.wheretheiss.at/v1/satellites/25544`

**Description**: Fetches the current position of the International Space Station.

**Response Format**:
\`\`\`json
{
  "latitude": 50.11,
  "longitude": -118.36,
  "altitude": 408.05,
  "velocity": 27635.5,
  "visibility": "daylight",
  "timestamp": 1653325788
}
\`\`\`

**Example Usage**:
\`\`\`typescript
async function fetchISSPosition() {
  try {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching ISS position:', error)
    return null
  }
}
\`\`\`

## Authentication

### Password Protection

**File**: `components/password-protection.tsx`

**Description**: Simple password-based authentication for protected content.

**Usage**:
\`\`\`typescript
import { PasswordProtection } from '@/components/password-protection'

function ProtectedPage() {
  return (
    <PasswordProtection password={process.env.NEXT_PUBLIC_NOTES_PASSWORD}>
      <div>Protected content here</div>
    </PasswordProtection>
  )
}
\`\`\`

## State Management

The application primarily uses React's built-in state management with hooks. For more complex state, custom hooks and context providers are used.

### Theme Context

**File**: `components/theme-provider.tsx`

**Description**: Context provider for theme state (light/dark).

**Usage**:
\`\`\`typescript
import { useTheme } from '@/components/theme-provider'

function ThemedComponent() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle theme
      </button>
    </div>
  )
}
\`\`\`

## External APIs

### Translation Service

**File**: `lib/translation-service.ts`

**Description**: Service for translating text between languages.

**Functions**:

#### `translateText(text: string, targetLanguage: string): Promise<string>`

Translates text to the target language.

**Parameters**:
- `text`: Text to translate
- `targetLanguage`: Target language code (e.g., 'fr', 'es')

**Returns**: Promise resolving to translated text

**Example**:
\`\`\`typescript
import { translateText } from '@/lib/translation-service'

async function translateExample() {
  try {
    const translated = await translateText('Hello world', 'fr')
    console.log(translated) // "Bonjour le monde"
  } catch (error) {
    console.error('Translation error:', error)
  }
}
\`\`\`

### Audio Controller

**File**: `lib/audio-controller.ts`

**Description**: Service for audio playback and recording.

**Functions**:

#### `playAudio(src: string): Promise<void>`

Plays an audio file.

**Parameters**:
- `src`: Audio file source URL

**Returns**: Promise that resolves when audio starts playing

**Example**:
\`\`\`typescript
import { playAudio } from '@/lib/audio-controller'

function AudioPlayer() {
  const handlePlay = async () => {
    try {
      await playAudio('/sounds/success.mp3')
    } catch (error) {
      console.error('Audio playback error:', error)
    }
  }
  
  return (
    <button onClick={handlePlay}>Play Sound</button>
  )
}
\`\`\`

## API Best Practices

When working with APIs in this project, follow these best practices:

1. **Error Handling**:
   - Always wrap API calls in try/catch blocks
   - Provide meaningful error messages
   - Consider implementing retry logic for network requests

2. **Loading States**:
   - Show loading indicators during API calls
   - Implement skeleton screens for better UX

3. **Caching**:
   - Cache API responses when appropriate
   - Use SWR or React Query for data fetching and caching

4. **Authentication**:
   - Secure sensitive API endpoints
   - Don't expose API keys in client-side code

5. **Rate Limiting**:
   - Implement rate limiting for API calls
   - Use debouncing for user-triggered API calls

6. **Data Validation**:
   - Validate API responses
   - Handle edge cases and empty states

For more information on specific APIs or to contribute new APIs, please refer to the [Contributing Guidelines](Contributing-to-the-Wiki).
\`\`\`

Let's create the Architecture documentation:
