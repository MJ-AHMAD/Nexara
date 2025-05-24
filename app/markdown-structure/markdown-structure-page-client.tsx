"use client"

import Link from "next/link"
import { Footer } from "@/components/footer"
import {
  FileText,
  Hash,
  ListOrdered,
  ListTree,
  ImageIcon,
  LinkIcon,
  Quote,
  Code,
  Table,
  Copy,
  Facebook,
  Linkedin,
  Globe,
  MessageSquare,
  Twitter,
} from "lucide-react"

function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        // You could add a toast notification here
      }}
      className="absolute top-2 right-2 p-1.5 rounded-md bg-slate-700/50 hover:bg-slate-700/70 text-slate-200"
      aria-label="Copy to clipboard"
    >
      <Copy className="h-4 w-4" />
    </button>
  )
}

export default function MarkdownStructurePageClient() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Markdown Structure Guide</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive reference for creating well-structured documentation using Markdown
            </p>
          </div>

          <div className="space-y-12">
            {/* Introduction Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction to Markdown</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Markdown is a lightweight markup language with plain text formatting syntax designed to be converted
                  to HTML and many other formats. It's widely used for documentation, README files, forum posts, and
                  more due to its simplicity and readability.
                </p>
                <p>
                  This guide provides a comprehensive overview of Markdown syntax and best practices for creating
                  well-structured documentation.
                </p>
              </div>
            </section>

            {/* Content Templates Section */}
            <section id="content-templates">
              <h2 className="text-2xl font-semibold mb-6">Content Templates</h2>
              <p className="mb-6">
                Ready-to-use content templates for various platforms. Simply click the copy button and paste into your
                desired platform.
              </p>

              <div className="space-y-8">
                {/* Facebook Templates */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <Facebook className="h-5 w-5 mr-2 text-blue-600" />
                    <h3 className="text-xl font-medium">Facebook Templates</h3>
                  </div>

                  {/* Standard Post */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Standard Post</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`📢 Exciting news to share!

I'm thrilled to announce [your announcement]. This is a significant milestone for [context about why this matters].

Key highlights:
• [Point 1]
• [Point 2]
• [Point 3]

I'd like to thank [people or organizations to thank] for their support throughout this journey.

What are your thoughts? Let me know in the comments below!

#[Hashtag1] #[Hashtag2] #[Hashtag3]`}</code>
                      </pre>
                      <CopyButton
                        text={`📢 Exciting news to share!

I'm thrilled to announce [your announcement]. This is a significant milestone for [context about why this matters].

Key highlights:
• [Point 1]
• [Point 2]
• [Point 3]

I'd like to thank [people or organizations to thank] for their support throughout this journey.

What are your thoughts? Let me know in the comments below!

#[Hashtag1] #[Hashtag2] #[Hashtag3]`}
                      />
                    </div>
                  </div>

                  {/* Event Announcement */}
                  <div>
                    <h4 className="font-medium mb-2">Event Announcement</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`🗓️ SAVE THE DATE: [Event Name]

Join us for [brief description of event] on [date] at [time] at [location/platform].

What to expect:
• [Feature 1]
• [Feature 2]
• [Feature 3]

Registration details: [link or instructions]

Don't miss this opportunity to [benefit of attending]!

Tag a friend who would be interested! 👇

#[EventHashtag] #[Hashtag2] #[Hashtag3]`}</code>
                      </pre>
                      <CopyButton
                        text={`🗓️ SAVE THE DATE: [Event Name]

Join us for [brief description of event] on [date] at [time] at [location/platform].

What to expect:
• [Feature 1]
• [Feature 2]
• [Feature 3]

Registration details: [link or instructions]

Don't miss this opportunity to [benefit of attending]!

Tag a friend who would be interested! 👇

#[EventHashtag] #[Hashtag2] #[Hashtag3]`}
                      />
                    </div>
                  </div>
                </div>

                {/* LinkedIn Templates */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <Linkedin className="h-5 w-5 mr-2 text-blue-700" />
                    <h3 className="text-xl font-medium">LinkedIn Templates</h3>
                  </div>

                  {/* Professional Update */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Professional Update</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`I'm excited to share that [your update]! 🎉

Over the past [timeframe], I've been [what you've been doing], and today marks an important milestone in my professional journey.

What I've learned along the way:
1. [Lesson 1]
2. [Lesson 2]
3. [Lesson 3]

I'm grateful to [people or organizations to thank] for their support and guidance.

What's next: [your next steps or goals]

I'd love to hear about your experiences with [related topic]. Comment below or message me directly!

#[ProfessionalHashtag] #[IndustryHashtag] #[CareerDevelopment]`}</code>
                      </pre>
                      <CopyButton
                        text={`I'm excited to share that [your update]! 🎉

Over the past [timeframe], I've been [what you've been doing], and today marks an important milestone in my professional journey.

What I've learned along the way:
1. [Lesson 1]
2. [Lesson 2]
3. [Lesson 3]

I'm grateful to [people or organizations to thank] for their support and guidance.

What's next: [your next steps or goals]

I'd love to hear about your experiences with [related topic]. Comment below or message me directly!

#[ProfessionalHashtag] #[IndustryHashtag] #[CareerDevelopment]`}
                      />
                    </div>
                  </div>

                  {/* Article Post */}
                  <div>
                    <h4 className="font-medium mb-2">Article Introduction</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`📝 I've just published a new article on [topic]

In this piece, I explore:
• [Key point 1]
• [Key point 2]
• [Key point 3]

Why this matters: [brief explanation of significance]

I'd appreciate your thoughts and feedback! Read the full article here: [link]

Special thanks to [acknowledgments] for their insights that contributed to this piece.

#[ContentHashtag] #[IndustryHashtag] #[ThoughtLeadership]`}</code>
                      </pre>
                      <CopyButton
                        text={`📝 I've just published a new article on [topic]

In this piece, I explore:
• [Key point 1]
• [Key point 2]
• [Key point 3]

Why this matters: [brief explanation of significance]

I'd appreciate your thoughts and feedback! Read the full article here: [link]

Special thanks to [acknowledgments] for their insights that contributed to this piece.

#[ContentHashtag] #[IndustryHashtag] #[ThoughtLeadership]`}
                      />
                    </div>
                  </div>
                </div>

                {/* Blog Post Templates */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <Globe className="h-5 w-5 mr-2 text-green-600" />
                    <h3 className="text-xl font-medium">Blog Post Templates</h3>
                  </div>

                  {/* How-To Article */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">How-To Article</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`# How to [Accomplish Task] in [Number] Simple Steps

![Featured Image Alt Text](image-url.jpg)

## Introduction

In this guide, I'll walk you through the process of [accomplishing task]. By the end of this article, you'll be able to [benefit or outcome].

## Why This Matters

[Explain the importance or relevance of the topic]

## Prerequisites

Before we begin, make sure you have:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## Step 1: [First Step]

[Detailed explanation of the first step]

\`\`\`
[Code example if applicable]
\`\`\`

## Step 2: [Second Step]

[Detailed explanation of the second step]

![Step 2 Image Alt Text](step2-image-url.jpg)

## Step 3: [Third Step]

[Detailed explanation of the third step]

> Pro tip: [Helpful advice related to this step]

## Step 4: [Fourth Step]

[Detailed explanation of the fourth step]

## Common Challenges and Solutions

### Challenge 1: [Common Problem]
Solution: [How to solve it]

### Challenge 2: [Another Common Problem]
Solution: [How to solve it]

## Conclusion

Now you've successfully [accomplished task]. Remember that [important takeaway or reminder].

## Next Steps

Consider exploring these related topics:
- [Related Topic 1]
- [Related Topic 2]
- [Related Topic 3]

## Questions?

Leave a comment below if you have any questions or run into any issues!

*Last updated: [Date]*`}</code>
                      </pre>
                      <CopyButton
                        text={`# How to [Accomplish Task] in [Number] Simple Steps

![Featured Image Alt Text](image-url.jpg)

## Introduction

In this guide, I'll walk you through the process of [accomplishing task]. By the end of this article, you'll be able to [benefit or outcome].

## Why This Matters

[Explain the importance or relevance of the topic]

## Prerequisites

Before we begin, make sure you have:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## Step 1: [First Step]

[Detailed explanation of the first step]

\`\`\`
[Code example if applicable]
\`\`\`

## Step 2: [Second Step]

[Detailed explanation of the second step]

![Step 2 Image Alt Text](step2-image-url.jpg)

## Step 3: [Third Step]

[Detailed explanation of the third step]

> Pro tip: [Helpful advice related to this step]

## Step 4: [Fourth Step]

[Detailed explanation of the fourth step]

## Common Challenges and Solutions

### Challenge 1: [Common Problem]
Solution: [How to solve it]

### Challenge 2: [Another Common Problem]
Solution: [How to solve it]

## Conclusion

Now you've successfully [accomplished task]. Remember that [important takeaway or reminder].

## Next Steps

Consider exploring these related topics:
- [Related Topic 1]
- [Related Topic 2]
- [Related Topic 3]

## Questions?

Leave a comment below if you have any questions or run into any issues!

*Last updated: [Date]*`}
                      />
                    </div>
                  </div>

                  {/* Opinion/Analysis Post */}
                  <div>
                    <h4 className="font-medium mb-2">Opinion/Analysis Post</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`# [Provocative Title: Opinion or Analysis on Topic]

![Featured Image Alt Text](image-url.jpg)

## Introduction

[Opening hook that introduces your perspective on the topic]

## The Current Landscape

[Overview of the current situation or conventional wisdom about the topic]

## Key Observations

### 1. [First Major Point]

[Detailed explanation with evidence or examples]

### 2. [Second Major Point]

[Detailed explanation with evidence or examples]

### 3. [Third Major Point]

[Detailed explanation with evidence or examples]

## Common Misconceptions

[Address and correct prevalent misconceptions about the topic]

## Looking Ahead

[Your predictions or recommendations for the future]

## Conclusion

[Summarize your main arguments and leave readers with a thought-provoking closing statement]

## References

1. [Citation 1]
2. [Citation 2]
3. [Citation 3]

*Disclaimer: The opinions expressed in this post are my own and do not necessarily reflect the views of my employer or any organizations I'm affiliated with.*`}</code>
                      </pre>
                      <CopyButton
                        text={`# [Provocative Title: Opinion or Analysis on Topic]

![Featured Image Alt Text](image-url.jpg)

## Introduction

[Opening hook that introduces your perspective on the topic]

## The Current Landscape

[Overview of the current situation or conventional wisdom about the topic]

## Key Observations

### 1. [First Major Point]

[Detailed explanation with evidence or examples]

### 2. [Second Major Point]

[Detailed explanation with evidence or examples]

### 3. [Third Major Point]

[Detailed explanation with evidence or examples]

## Common Misconceptions

[Address and correct prevalent misconceptions about the topic]

## Looking Ahead

[Your predictions or recommendations for the future]

## Conclusion

[Summarize your main arguments and leave readers with a thought-provoking closing statement]

## References

1. [Citation 1]
2. [Citation 2]
3. [Citation 3]

*Disclaimer: The opinions expressed in this post are my own and do not necessarily reflect the views of my employer or any organizations I'm affiliated with.*`}
                      />
                    </div>
                  </div>
                </div>

                {/* Twitter/X Templates */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <Twitter className="h-5 w-5 mr-2 text-blue-400" />
                    <h3 className="text-xl font-medium">Twitter/X Templates</h3>
                  </div>

                  {/* Thread Starter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Thread Starter</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`🧵 [Number] insights about [Topic] that will change how you think about [Related Area]:

1/[Total] [First insight with strong hook]`}</code>
                      </pre>
                      <CopyButton
                        text={`🧵 [Number] insights about [Topic] that will change how you think about [Related Area]:

1/[Total] [First insight with strong hook]`}
                      />
                    </div>
                  </div>

                  {/* Thread Continuation */}
                  <div>
                    <h4 className="font-medium mb-2">Thread Continuation (Numbered Tweets)</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`2/[Total] [Second insight]

[Expand on the point with evidence, example, or story]

3/[Total] [Third insight]

[Expand on the point with evidence, example, or story]

...

[Total]/[Total] [Final insight or conclusion]

[Call to action, question, or invitation for engagement]

Like and retweet if you found this useful!

#[Hashtag1] #[Hashtag2]`}</code>
                      </pre>
                      <CopyButton
                        text={`2/[Total] [Second insight]

[Expand on the point with evidence, example, or story]

3/[Total] [Third insight]

[Expand on the point with evidence, example, or story]

...

[Total]/[Total] [Final insight or conclusion]

[Call to action, question, or invitation for engagement]

Like and retweet if you found this useful!

#[Hashtag1] #[Hashtag2]`}
                      />
                    </div>
                  </div>
                </div>

                {/* Email Newsletter Templates */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-5 w-5 mr-2 text-purple-600" />
                    <h3 className="text-xl font-medium">Email Newsletter Templates</h3>
                  </div>

                  {/* Monthly Update */}
                  <div>
                    <h4 className="font-medium mb-2">Monthly Update</h4>
                    <div className="relative">
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto">
                        <code>{`Subject: [Month] Update: [Key Highlight or Theme]

Hi [First Name],

I hope this email finds you well. Here's what's been happening in [Month]:

## What's New

• [Update 1]: [Brief description]
• [Update 2]: [Brief description]
• [Update 3]: [Brief description]

## Featured Content

This month's highlight: [Title of featured content]

[Brief description of why this content is valuable and what readers will learn]

[Read More/Watch Now/Listen Here] → [Link]

## Coming Soon

Here's what to look forward to next month:

• [Upcoming item 1]
• [Upcoming item 2]
• [Upcoming item 3]

## Resource of the Month

[Name of resource]: [Brief description]

[Get Access] → [Link]

## Final Thoughts

[Personal note or reflection related to the month's theme]

As always, I appreciate your support and would love to hear your thoughts. Just reply to this email to share your feedback.

Until next time,

[Your Name]

P.S. [Call to action or special announcement]`}</code>
                      </pre>
                      <CopyButton
                        text={`Subject: [Month] Update: [Key Highlight or Theme]

Hi [First Name],

I hope this email finds you well. Here's what's been happening in [Month]:

## What's New

• [Update 1]: [Brief description]
• [Update 2]: [Brief description]
• [Update 3]: [Brief description]

## Featured Content

This month's highlight: [Title of featured content]

[Brief description of why this content is valuable and what readers will learn]

[Read More/Watch Now/Listen Here] → [Link]

## Coming Soon

Here's what to look forward to next month:

• [Upcoming item 1]
• [Upcoming item 2]
• [Upcoming item 3]

## Resource of the Month

[Name of resource]: [Brief description]

[Get Access] → [Link]

## Final Thoughts

[Personal note or reflection related to the month's theme]

As always, I appreciate your support and would love to hear your thoughts. Just reply to this email to share your feedback.

Until next time,

[Your Name]

P.S. [Call to action or special announcement]`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Basic Syntax Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Syntax</h2>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Headers */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <Hash className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Headers</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Use # symbols to create headings:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`}</code>
                    </pre>
                  </div>
                </div>

                {/* Emphasis */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Emphasis</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Format text with emphasis:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`*Italic text*
_Also italic text_

**Bold text**
__Also bold text__

***Bold and italic***
**_Also bold and italic_**`}</code>
                    </pre>
                  </div>
                </div>

                {/* Lists */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <ListOrdered className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Lists</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Create ordered and unordered lists:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`Unordered list:
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item`}</code>
                    </pre>
                  </div>
                </div>

                {/* Links */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <LinkIcon className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Links</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Create links to other resources:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`[Link text](https://example.com)

[Link with title](https://example.com "Title")

Reference-style links:
[link text][reference]

[reference]: https://example.com`}</code>
                    </pre>
                  </div>
                </div>

                {/* Images */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <ImageIcon className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Images</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Insert images:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`![Alt text](image-url.jpg)

![Alt text](image-url.jpg "Optional title")

Reference-style:
![Alt text][image-id]

[image-id]: image-url.jpg "Optional title"`}</code>
                    </pre>
                  </div>
                </div>

                {/* Blockquotes */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <Quote className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Blockquotes</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Create blockquotes:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`> This is a blockquote
> 
> It can span multiple lines

Nested blockquotes:
> Outer quote
>> Nested quote`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Syntax Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Advanced Syntax</h2>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Code Blocks */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Code Blocks</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Format code with syntax highlighting:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`Inline code: \`code\`

Code block with backticks:
\`\`\`javascript
function example() {
  console.log("Hello, world!");
}
\`\`\`

Indented code block:
    // This is a code block
    function example() {
      return true;
    }`}</code>
                    </pre>
                  </div>
                </div>

                {/* Tables */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <Table className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Tables</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Create tables:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

Alignment:
| Left     | Center   | Right    |
| :------- | :------: | -------: |
| Left     | Center   | Right    |`}</code>
                    </pre>
                  </div>
                </div>

                {/* Task Lists */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <ListTree className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Task Lists</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Create task lists with checkboxes:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
  - [x] Completed subtask
  - [ ] Incomplete subtask`}</code>
                    </pre>
                  </div>
                </div>

                {/* Horizontal Rules */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border">
                  <div className="flex items-center mb-4">
                    <div className="h-5 w-5 mr-2 text-primary flex items-center justify-center">—</div>
                    <h3 className="text-xl font-medium">Horizontal Rules</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Create horizontal rules:</p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                      <code>{`Three or more of:

---
***
___`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
              <div className="prose dark:prose-invert max-w-none">
                <ul>
                  <li>Use headers to create a clear document structure</li>
                  <li>Keep paragraphs concise and focused on a single topic</li>
                  <li>Use lists to organize related items</li>
                  <li>Include code blocks with appropriate syntax highlighting</li>
                  <li>Add descriptive alt text to images</li>
                  <li>Use tables to present structured data</li>
                  <li>Include links to relevant resources</li>
                  <li>Use consistent formatting throughout your document</li>
                </ul>
              </div>
            </section>

            {/* Resources Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
              <div className="prose dark:prose-invert max-w-none">
                <ul>
                  <li>
                    <a href="https://www.markdownguide.org/" target="_blank" rel="noopener noreferrer">
                      Markdown Guide
                    </a>{" "}
                    - Comprehensive documentation
                  </li>
                  <li>
                    <a href="https://github.github.com/gfm/" target="_blank" rel="noopener noreferrer">
                      GitHub Flavored Markdown
                    </a>{" "}
                    - GitHub's Markdown specification
                  </li>
                  <li>
                    <a href="https://dillinger.io/" target="_blank" rel="noopener noreferrer">
                      Dillinger
                    </a>{" "}
                    - Online Markdown editor
                  </li>
                  <li>
                    <a href="https://stackedit.io/" target="_blank" rel="noopener noreferrer">
                      StackEdit
                    </a>{" "}
                    - In-browser Markdown editor
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
