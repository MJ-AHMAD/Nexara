# Components Documentation

This page provides detailed information about the key components used in MJ-AHMAD OVERVIEW. Understanding these components will help developers contribute to the project or customize it for their needs.

## UI Components

### Header

**File**: `components/header.tsx`

**Description**: The main navigation header for the application.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { Header } from '@/components/header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
\`\`\`

### Footer

**File**: `components/footer.tsx`

**Description**: The footer component with links, social media, and sponsor information.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { Footer } from '@/components/footer'

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
\`\`\`

### Theme Toggle

**File**: `components/theme-toggle.tsx`

**Description**: Button component for toggling between light and dark themes.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  return (
    <header>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  )
}
\`\`\`

### Password Protection

**File**: `components/password-protection.tsx`

**Description**: Component for password-protecting content.

**Props**:
- `password`: string - The password to check against
- `children`: ReactNode - Content to display when authenticated

**Usage**:
\`\`\`jsx
import { PasswordProtection } from '@/components/password-protection'

export default function ProtectedPage() {
  return (
    <PasswordProtection password={process.env.NEXT_PUBLIC_NOTES_PASSWORD}>
      <div>Protected content here</div>
    </PasswordProtection>
  )
}
\`\`\`

## Wellness Components

### Water Tracker

**File**: `components/wellness/water-tracker.tsx`

**Description**: Component for tracking daily water intake.

**Props**:
- `goal`: number - Daily water intake goal in ml
- `initialValue`: number - Initial water intake value

**Usage**:
\`\`\`jsx
import { WaterTracker } from '@/components/wellness/water-tracker'

export default function WellnessDashboard() {
  return (
    <div>
      <WaterTracker goal={2000} initialValue={0} />
    </div>
  )
}
\`\`\`

### Exercise Tracker

**File**: `components/wellness/exercise-tracker.tsx`

**Description**: Component for tracking exercise activities.

**Props**:
- `weeklyGoal`: number - Weekly exercise goal in minutes

**Usage**:
\`\`\`jsx
import { ExerciseTracker } from '@/components/wellness/exercise-tracker'

export default function WellnessDashboard() {
  return (
    <div>
      <ExerciseTracker weeklyGoal={150} />
    </div>
  )
}
\`\`\`

### Sleep Tracker

**File**: `components/wellness/sleep-tracker.tsx`

**Description**: Component for tracking sleep patterns.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { SleepTracker } from '@/components/wellness/sleep-tracker'

export default function WellnessDashboard() {
  return (
    <div>
      <SleepTracker />
    </div>
  )
}
\`\`\`

### Habit Tracker

**File**: `components/wellness/habit-tracker.tsx`

**Description**: Component for tracking daily habits.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { HabitTracker } from '@/components/wellness/habit-tracker'

export default function WellnessDashboard() {
  return (
    <div>
      <HabitTracker />
    </div>
  )
}
\`\`\`

## Project Focus Components

### Focus Dashboard

**File**: `components/project-focus/focus-dashboard.tsx`

**Description**: Main dashboard for project focus features.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { FocusDashboard } from '@/components/project-focus/focus-dashboard'

export default function ProjectFocusPage() {
  return <FocusDashboard />
}
\`\`\`

### Task List

**File**: `components/project-focus/task-list.tsx`

**Description**: Component for managing tasks.

**Props**:
- `projectId`: string - Optional project ID to filter tasks

**Usage**:
\`\`\`jsx
import { TaskList } from '@/components/project-focus/task-list'

export default function ProjectTasks() {
  return <TaskList projectId="project-1" />
}
\`\`\`

### Milestone Timeline

**File**: `components/project-focus/milestone-timeline.tsx`

**Description**: Visual timeline for project milestones.

**Props**:
- `projectId`: string - Project ID to display milestones for

**Usage**:
\`\`\`jsx
import { MilestoneTimeline } from '@/components/project-focus/milestone-timeline'

export default function ProjectTimeline() {
  return <MilestoneTimeline projectId="project-1" />
}
\`\`\`

### Focus Timer

**File**: `components/project-focus/focus-timer.tsx`

**Description**: Pomodoro-style timer for focused work sessions.

**Props**:
- `workDuration`: number - Work duration in minutes (default: 25)
- `breakDuration`: number - Break duration in minutes (default: 5)

**Usage**:
\`\`\`jsx
import { FocusTimer } from '@/components/project-focus/focus-timer'

export default function FocusPage() {
  return <FocusTimer workDuration={25} breakDuration={5} />
}
\`\`\`

## Meeting Preparation Components

### Meeting Dashboard

**File**: `components/meeting-preparation/meeting-dashboard.tsx`

**Description**: Dashboard for meeting preparation.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { MeetingDashboard } from '@/components/meeting-preparation/meeting-dashboard'

export default function MeetingPreparationPage() {
  return <MeetingDashboard />
}
\`\`\`

### Document Preview

**File**: `components/meeting-preparation/document-preview.tsx`

**Description**: Component for previewing meeting documents.

**Props**:
- `documentUrl`: string - URL of the document to preview

**Usage**:
\`\`\`jsx
import { DocumentPreview } from '@/components/meeting-preparation/document-preview'

export default function DocumentPage() {
  return <DocumentPreview documentUrl="/documents/meeting-agenda.pdf" />
}
\`\`\`

### Pronunciation Practice

**File**: `components/meeting-preparation/pronunciation-practice.tsx`

**Description**: Tool for practicing pronunciation of difficult terms.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { PronunciationPractice } from '@/components/meeting-preparation/pronunciation-practice'

export default function PracticePage() {
  return <PronunciationPractice />
}
\`\`\`

## Tracking System Components

### Invoice Templates

**File**: `components/tracking/invoice-templates.tsx`

**Description**: Component for selecting and customizing invoice templates.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { InvoiceTemplates } from '@/components/tracking/invoice-templates'

export default function InvoicePage() {
  return <InvoiceTemplates />
}
\`\`\`

### Batch Actions

**File**: `components/tracking/batch-actions.tsx`

**Description**: Component for performing batch actions on invoices.

**Props**:
- `selectedInvoices`: string[] - Array of selected invoice IDs

**Usage**:
\`\`\`jsx
import { BatchActions } from '@/components/tracking/batch-actions'

export default function BatchPage() {
  const selectedInvoices = ['inv-001', 'inv-002']
  return <BatchActions selectedInvoices={selectedInvoices} />
}
\`\`\`

### Advanced Reports

**File**: `components/tracking/advanced-reports.tsx`

**Description**: Component for generating advanced reports.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { AdvancedReports } from '@/components/tracking/advanced-reports'

export default function ReportsPage() {
  return <AdvancedReports />
}
\`\`\`

## Visualization Components

### JSON Viewer

**File**: `components/json-viewer.tsx`

**Description**: Component for visualizing JSON data.

**Props**:
- `data`: object - JSON data to visualize
- `expandLevel`: number - Default expand level (default: 1)

**Usage**:
\`\`\`jsx
import { JSONViewer } from '@/components/json-viewer'

export default function JsonPage() {
  const data = { name: 'John', age: 30 }
  return <JSONViewer data={data} expandLevel={2} />
}
\`\`\`

### Markdown Viewer

**File**: `components/markdown-viewer.tsx`

**Description**: Component for rendering Markdown content.

**Props**:
- `content`: string - Markdown content to render
- `className`: string - Optional CSS class

**Usage**:
\`\`\`jsx
import { MarkdownViewer } from '@/components/markdown-viewer'

export default function MarkdownPage() {
  const content = '# Hello\n\nThis is **markdown**.'
  return <MarkdownViewer content={content} />
}
\`\`\`

### ISS Tracker

**File**: `components/iss-tracker.tsx`

**Description**: Component for tracking the International Space Station.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { ISSTracker } from '@/components/iss-tracker'

export default function ISSPage() {
  return <ISSTracker />
}
\`\`\`

### Earth Moon Visualization

**File**: `components/earth-moon-visualization.tsx`

**Description**: 3D visualization of Earth and Moon.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { EarthMoonVisualization } from '@/components/earth-moon-visualization'

export default function SpacePage() {
  return <EarthMoonVisualization />
}
\`\`\`

## Utility Components

### Dhaka Time

**File**: `components/dhaka-time.tsx`

**Description**: Component displaying current time in Dhaka.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { DhakaTime } from '@/components/dhaka-time'

export default function TimePage() {
  return <DhakaTime />
}
\`\`\`

### Time Capsule

**File**: `components/time-capsule.tsx`

**Description**: Digital time capsule component.

**Props**:
- None

**Usage**:
\`\`\`jsx
import { TimeCapsule } from '@/components/time-capsule'

export default function CapsulePage() {
  return <TimeCapsule />
}
\`\`\`

## Component Best Practices

When creating new components or modifying existing ones, follow these best practices:

1. **Component Structure**:
   - Use functional components with hooks
   - Keep components focused on a single responsibility
   - Extract reusable logic into custom hooks

2. **Props**:
   - Define prop types using TypeScript interfaces
   - Provide default values for optional props
   - Use destructuring for props

3. **State Management**:
   - Use React's useState for component-level state
   - Use React Context for shared state
   - Consider using useReducer for complex state logic

4. **Styling**:
   - Use Tailwind CSS utility classes
   - Follow the project's color scheme and design system
   - Ensure components are responsive

5. **Accessibility**:
   - Use semantic HTML elements
   - Include ARIA attributes where necessary
   - Ensure keyboard navigation works
   - Maintain sufficient color contrast

6. **Performance**:
   - Memoize expensive calculations with useMemo
   - Optimize re-renders with React.memo and useCallback
   - Lazy load components when appropriate

For more detailed information on specific components, refer to the component files directly or check the API documentation.
\`\`\`

Let's create the API Documentation:
