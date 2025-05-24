"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  ChevronRight,
  FileText,
  FolderOpen,
  FolderIcon,
  Copy,
  Download,
  Eye,
  FileCode,
  FileImage,
  FileIcon as FilePresentationIcon,
  FileSpreadsheetIcon,
  FileArchiveIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import { DocumentPreviewModal } from "./document-preview-modal"

// Define the folder structure types
interface File {
  id: string
  name: string
  type: "pdf" | "docx" | "md" | "pptx" | "xlsx" | "image" | "zip"
  content?: string
  url?: string
}

interface FolderType {
  id: string
  name: string
  files: File[]
  subfolders: FolderType[]
  expanded?: boolean
}

// Sample data structure for Infinity Nexus project
const infinityNexusData: FolderType = {
  id: "root",
  name: "Infinity Nexus Sponsorship Meeting",
  expanded: true,
  files: [
    {
      id: "meeting-agenda",
      name: "Meeting Agenda.md",
      type: "md",
      content: `# Infinity Nexus Sponsorship Meeting Agenda
      
Date: 23rd, 2:00 PM
Location: Financial Institution Headquarters
Participants: MJ AHMAD (Trusted Ally), Financial Institution Representatives

## Agenda Items:

1. **Introduction and Welcome** (5 minutes)
   - Brief introduction of attendees
   - Overview of meeting objectives

2. **Infinity Nexus Project Overview** (15 minutes)
   - Project vision and mission
   - Current status and achievements
   - Future roadmap

3. **Sponsorship Proposal Presentation** (20 minutes)
   - Financial requirements
   - Resource allocation plan
   - Timeline and milestones

4. **Benefits for Sponsors** (15 minutes)
   - Brand visibility and recognition
   - Access to research data and innovations
   - Community engagement opportunities

5. **Q&A Session** (20 minutes)
   - Address questions from financial institution

6. **Next Steps and Action Items** (10 minutes)
   - Follow-up timeline
   - Documentation sharing
   - Future meeting schedule

7. **Closing Remarks** (5 minutes)`,
    },
  ],
  subfolders: [
    {
      id: "project-overview",
      name: "1. Project Overview",
      expanded: false,
      files: [
        {
          id: "executive-summary",
          name: "Executive Summary.pdf",
          type: "pdf",
          url: "/data/infinity-nexus-executive-summary.pdf",
        },
        {
          id: "project-vision",
          name: "Project Vision & Mission.md",
          type: "md",
          content: `# Infinity Nexus: Vision & Mission

## Vision
To establish a globally recognized, open-source data hub that accelerates scientific research and innovation through standardized data sharing and collaboration.

## Mission
Infinity Nexus aims to create an inclusive, accessible platform that connects researchers, innovators, and institutions worldwide, with a special focus on emerging markets and underrepresented communities, starting with our base in Cox's Bazar, Bangladesh.

## Core Values
- **Openness**: Commitment to open-source principles and transparent operations
- **Inclusivity**: Ensuring accessibility for researchers from all backgrounds
- **Innovation**: Fostering creative solutions to global challenges
- **Integrity**: Maintaining the highest standards of data ethics and research practices
- **Impact**: Focusing on real-world applications that improve lives

## Strategic Objectives
1. Develop a standardized framework for scientific data sharing
2. Build a robust technological infrastructure for data storage and analysis
3. Create a vibrant community of researchers and innovators
4. Establish partnerships with academic institutions, industry leaders, and funding organizations
5. Implement educational programs to enhance data literacy and research capabilities`,
        },
        {
          id: "current-progress",
          name: "Current Progress Report.pptx",
          type: "pptx",
          url: "/data/infinity-nexus-progress.pptx",
        },
        {
          id: "team-structure",
          name: "Team Structure.docx",
          type: "docx",
          url: "/data/infinity-nexus-team.docx",
        },
      ],
      subfolders: [],
    },
    {
      id: "sponsorship-proposal",
      name: "2. Sponsorship Proposal",
      expanded: false,
      files: [
        {
          id: "detailed-proposal",
          name: "Detailed Sponsorship Proposal.pdf",
          type: "pdf",
          url: "/data/infinity-nexus-sponsorship.pdf",
        },
        {
          id: "budget-breakdown",
          name: "Budget Breakdown.xlsx",
          type: "xlsx",
          url: "/data/infinity-nexus-budget.xlsx",
        },
        {
          id: "funding-tiers",
          name: "Sponsorship Tiers.md",
          type: "md",
          content: `# Infinity Nexus Sponsorship Tiers

## Platinum Tier: $100,000+
- **Recognition**: Named as "Founding Partner" on all Infinity Nexus platforms and publications
- **Branding**: Prominent logo placement on website, annual reports, and all major events
- **Access**: Exclusive access to all research data and innovations before public release
- **Engagement**: Quarterly strategic meetings with Infinity Nexus leadership team
- **Events**: VIP access to all Infinity Nexus events and conferences
- **Impact**: Direct input on strategic direction and research priorities

## Gold Tier: $50,000 - $99,999
- **Recognition**: Named as "Gold Partner" on Infinity Nexus platforms and publications
- **Branding**: Logo placement on website, annual reports, and major events
- **Access**: Priority access to research data and innovations
- **Engagement**: Bi-annual meetings with Infinity Nexus leadership team
- **Events**: Priority registration for all Infinity Nexus events and conferences
- **Impact**: Opportunity to suggest research focus areas

## Silver Tier: $25,000 - $49,999
- **Recognition**: Named as "Silver Partner" on Infinity Nexus platforms
- **Branding**: Logo placement on website and annual reports
- **Access**: Early access to selected research data and innovations
- **Engagement**: Annual meeting with Infinity Nexus project leads
- **Events**: Complimentary passes to major Infinity Nexus events
- **Impact**: Recognition in project outcomes related to sponsored areas

## Bronze Tier: $10,000 - $24,999
- **Recognition**: Named as "Bronze Partner" on Infinity Nexus website
- **Branding**: Logo placement on website
- **Access**: Access to public research data and innovations
- **Engagement**: Invitations to Infinity Nexus community events
- **Events**: Discounted passes to Infinity Nexus events
- **Impact**: Recognition in general project communications

## Community Supporter: Up to $9,999
- **Recognition**: Listed as "Community Supporter" on Infinity Nexus website
- **Engagement**: Regular updates on project progress
- **Events**: Invitation to annual community showcase
- **Impact**: Contributing to the advancement of open scientific research`,
        },
        {
          id: "timeline",
          name: "Implementation Timeline.docx",
          type: "docx",
          url: "/data/infinity-nexus-timeline.docx",
        },
      ],
      subfolders: [],
    },
    {
      id: "benefits-impact",
      name: "3. Benefits & Impact",
      expanded: false,
      files: [
        {
          id: "sponsor-benefits",
          name: "Sponsor Benefits Overview.pdf",
          type: "pdf",
          url: "/data/infinity-nexus-benefits.pdf",
        },
        {
          id: "case-studies",
          name: "Success Case Studies.pptx",
          type: "pptx",
          url: "/data/infinity-nexus-case-studies.pptx",
        },
        {
          id: "impact-metrics",
          name: "Impact Metrics.md",
          type: "md",
          content: `# Infinity Nexus: Impact Metrics

## Current Impact Metrics

### Research Acceleration
- **Data Sharing**: 250+ datasets standardized and shared
- **Research Papers**: 15 publications citing Infinity Nexus data
- **Collaboration**: 30+ cross-institutional research projects initiated

### Community Growth
- **Researchers**: 120+ active researchers using the platform
- **Institutions**: 25 academic and research institutions participating
- **Countries**: Representation from 18 countries across 5 continents

### Educational Impact
- **Training Sessions**: 40+ data science workshops conducted
- **Students Reached**: 350+ students trained in data standards
- **Educational Materials**: 20+ open-source learning modules developed

### Local Impact in Cox's Bazar
- **Local Employment**: 15 full-time positions created
- **Skills Development**: 75+ local residents trained in technical skills
- **Infrastructure**: Establishment of a data center with renewable energy

## Projected Impact with Sponsorship

### Research Acceleration
- **Data Sharing**: Scale to 1,000+ datasets within 18 months
- **Research Papers**: Facilitate 50+ publications annually
- **Collaboration**: Enable 100+ cross-institutional projects

### Community Growth
- **Researchers**: Expand to 500+ active researchers
- **Institutions**: Partner with 100+ institutions globally
- **Countries**: Extend reach to 40+ countries

### Educational Impact
- **Training Sessions**: Conduct 100+ workshops annually
- **Students Reached**: Train 1,500+ students in data science
- **Educational Materials**: Develop comprehensive curriculum in 5 languages

### Local Impact in Cox's Bazar
- **Local Employment**: Create 50+ technical positions
- **Skills Development**: Establish a technology training center for 500+ residents annually
- **Infrastructure**: Expand data center and establish a research hub

### Sustainable Development Goals Alignment
- **SDG 4**: Quality Education
- **SDG 8**: Decent Work and Economic Growth
- **SDG 9**: Industry, Innovation, and Infrastructure
- **SDG 17**: Partnerships for the Goals`,
        },
        {
          id: "testimonials",
          name: "Partner Testimonials.docx",
          type: "docx",
          url: "/data/infinity-nexus-testimonials.docx",
        },
      ],
      subfolders: [],
    },
    {
      id: "presentation-materials",
      name: "4. Presentation Materials",
      expanded: false,
      files: [
        {
          id: "main-presentation",
          name: "Main Sponsorship Presentation.pptx",
          type: "pptx",
          url: "/data/infinity-nexus-presentation.pptx",
        },
        {
          id: "demo-materials",
          name: "Platform Demo Materials.zip",
          type: "zip",
          url: "/data/infinity-nexus-demo.zip",
        },
        {
          id: "presentation-script",
          name: "Presentation Script.md",
          type: "md",
          content: `# Infinity Nexus Sponsorship Presentation Script

## Introduction Slide
"Good afternoon and thank you for meeting with us today. I'm MJ AHMAD, representing Trusted Ally, and I'm excited to share with you our groundbreaking project, Infinity Nexus."

## Vision & Mission Slide
"Infinity Nexus is an open-source initiative creating a global standard data hub for scientific research and innovation. Our mission is to accelerate scientific discovery by breaking down data silos and enabling seamless collaboration across borders and disciplines."

## Problem Statement Slide
"Today, scientific research is hampered by fragmented data standards, limited access to resources, and insufficient collaboration infrastructure. This is particularly acute in emerging regions like Cox's Bazar, where we're based, despite the tremendous talent and potential there."

## Solution Slide
"Infinity Nexus addresses these challenges by providing:
1. A standardized framework for scientific data sharing
2. Robust infrastructure for data storage and analysis
3. Collaborative tools for researchers worldwide
4. Educational resources to build capacity in underserved communities"

## Current Progress Slide
"We've already made significant progress, with over 120 researchers from 25 institutions across 18 countries actively using our platform. We've facilitated 15 published research papers and standardized more than 250 datasets."

## Impact Slide
"Beyond the numbers, we're creating real impact by:
- Accelerating research in critical fields like climate science and public health
- Building technical capacity in Cox's Bazar, creating jobs and opportunities
- Democratizing access to scientific tools and knowledge"

## Sponsorship Need Slide
"To scale our impact, we're seeking strategic partners who share our vision. Your sponsorship would enable us to:
1. Expand our technical infrastructure
2. Develop advanced data analysis tools
3. Extend our educational programs
4. Increase our global outreach"

## Sponsorship Tiers Slide
"We offer several partnership levels, each with unique benefits tailored to align with your organization's goals and values. From prominent branding to exclusive access to innovations, we ensure meaningful returns on your investment."

## Benefits Slide
"By partnering with Infinity Nexus, you'll:
- Associate your brand with cutting-edge innovation and social impact
- Gain early access to emerging research and technologies
- Connect with a global network of scientific leaders
- Contribute directly to sustainable development goals"

## Case Study Slide
"Let me share a brief example of how our platform has already made a difference..."

## Call to Action Slide
"We invite you to join us in this journey to transform how scientific research is conducted globally. Your support would be instrumental in bringing this vision to life."

## Closing Slide
"Thank you for your time today. I'm happy to answer any questions you might have about Infinity Nexus and how we can create a meaningful partnership."`,
        },
        {
          id: "visual-assets",
          name: "Visual Assets & Infographics.pdf",
          type: "pdf",
          url: "/data/infinity-nexus-visuals.pdf",
        },
      ],
      subfolders: [],
    },
    {
      id: "qa-preparation",
      name: "5. Q&A Preparation",
      expanded: false,
      files: [
        {
          id: "anticipated-questions",
          name: "Anticipated Questions & Answers.md",
          type: "md",
          content: `# Anticipated Questions & Prepared Answers

## Project Viability

**Q: How does Infinity Nexus differentiate itself from existing data sharing platforms?**

A: Infinity Nexus is unique in three key ways:
1. We focus specifically on standardization across scientific disciplines, not just within them
2. We're built from the ground up with emerging markets in mind, ensuring accessibility for researchers with limited resources
3. We combine data infrastructure with educational components, building capacity alongside providing tools

**Q: What is your sustainability plan beyond initial sponsorship?**

A: We've developed a multi-faceted sustainability strategy:
1. Tiered membership model for institutions (while keeping core access free for individual researchers)
2. Data analytics services for organizations requiring specialized support
3. Grant funding for specific research initiatives
4. Consulting services leveraging our expertise in data standardization
5. Educational program fees from institutions that can afford them (while maintaining scholarships for those who cannot)

## Financial Considerations

**Q: How will our sponsorship funds be allocated?**

A: Your sponsorship will be allocated approximately as follows:
- 40% to technical infrastructure development and maintenance
- 25% to research staff and data scientists
- 20% to educational programs and community building
- 10% to global outreach and partnership development
- 5% to administrative costs

We maintain complete transparency in our financial reporting and would provide detailed quarterly updates on fund utilization.

**Q: What is your expected ROI timeline for sponsors?**

A: Sponsors begin seeing returns immediately through brand visibility and association with innovation. Tangible metrics typically develop along this timeline:
- Immediate: Brand visibility across our platform and events
- 3-6 months: Access to initial research outputs and community engagement
- 6-12 months: Measurable impact metrics in sponsored research areas
- 12-24 months: Potential commercial applications from supported research

## Technical Questions

**Q: How do you ensure data security and privacy?**

A: We implement a comprehensive security framework:
- End-to-end encryption for all sensitive data
- Granular access controls allowing researchers to determine sharing parameters
- Regular security audits by independent third parties
- Compliance with international data protection standards including GDPR
- Ethical review process for all data collection methodologies

**Q: How scalable is your platform?**

A: Infinity Nexus is built on a cloud-native, microservices architecture specifically designed for scalability:
- Containerized applications that can scale horizontally
- Distributed database systems optimized for scientific datasets
- Automated load balancing and resource allocation
- Modular design allowing independent scaling of different components
- Current architecture tested to handle 100x our present user base

## Impact Assessment

**Q: How do you measure the success of your project?**

A: We track success through multiple dimensions:
- Research outputs: publications, patents, and innovations
- Community growth: user numbers, institutional partnerships, geographic reach
- Educational impact: training completions, skill development metrics
- Economic impact: jobs created, research funding facilitated
- Technological advancement: adoption of our data standards, platform utilization metrics

We provide comprehensive quarterly impact reports to all sponsors.

**Q: What is your specific impact in Cox's Bazar?**

A: In Cox's Bazar, we've created:
- A technology hub employing 15 local residents in technical roles
- Training programs that have upskilled 75+ community members
- Partnerships with local educational institutions to develop tech curriculum
- Infrastructure improvements including renewable-powered computing resources
- Research opportunities connecting local challenges with global expertise

## Partnership Details

**Q: What level of involvement can sponsors have in project direction?**

A: We offer tiered engagement opportunities:
- Platinum sponsors join our advisory board with direct input on strategic priorities
- Gold sponsors participate in quarterly roadmap discussions
- All sponsors can propose specific research initiatives aligned with their interests
- We maintain scientific independence while welcoming collaborative direction

**Q: How do you handle potential conflicts between multiple sponsors?**

A: We've established clear governance principles:
- Transparent decision-making processes documented and shared with all partners
- Equitable influence based on partnership tier, not just financial contribution
- Focus on consensus-building through facilitated discussions
- Independent scientific committee to resolve research priority questions
- Commitment to open-source principles as a foundational value`,
        },
        {
          id: "technical-faq",
          name: "Technical FAQ.docx",
          type: "docx",
          url: "/data/infinity-nexus-technical-faq.docx",
        },
        {
          id: "objection-handling",
          name: "Objection Handling Guide.md",
          type: "md",
          content: `# Objection Handling Guide

## Financial Concerns

### Objection: "The sponsorship amounts seem high for an early-stage project."

**Response Approach:**
- Acknowledge the investment is significant
- Frame as strategic long-term partnership, not just donation
- Highlight comprehensive value package beyond typical sponsorships
- Offer to discuss custom sponsorship structure if needed

**Key Talking Points:**
"I understand your concern about the investment level. What we're offering is not just a traditional sponsorship but a strategic partnership with multiple returns. Our tiered approach allows organizations to find the right entry point, and we're open to discussing a custom arrangement that aligns with your specific objectives while still delivering meaningful impact."

### Objection: "We need more concrete ROI metrics before committing."

**Response Approach:**
- Validate the need for clear ROI measurement
- Present our existing metrics framework
- Offer to develop custom KPIs specific to their priorities
- Propose a smaller initial engagement with defined success metrics

**Key Talking Points:**
"That's a very reasonable request. We've developed a comprehensive metrics framework tracking everything from research outputs to community growth. I'd be happy to share our current impact reports. Additionally, we could work together to develop custom KPIs aligned specifically with your organizational priorities, and potentially start with a smaller engagement to demonstrate value before expanding our partnership."

## Project Viability Concerns

### Objection: "How do we know this project will succeed long-term?"

**Response Approach:**
- Highlight existing traction and milestones achieved
- Discuss our sustainability planning
- Share testimonials from current partners
- Outline risk mitigation strategies

**Key Talking Points:**
"That's an important consideration for any partnership. Let me share some key indicators of our trajectory: we've already secured participation from 25 research institutions across 18 countries, standardized 250+ datasets, and facilitated 15 published papers. Our sustainability plan includes diversified revenue streams beyond sponsorships. We've also implemented robust risk management protocols including regular strategic reviews and adaptable roadmaps."

### Objection: "There are many similar initiatives in this space."

**Response Approach:**
- Acknowledge the active ecosystem
- Clearly articulate our unique differentiators
- Explain our collaborative rather than competitive approach
- Highlight our specific focus on emerging markets

**Key Talking Points:**
"You're right that data sharing in research is an active space, which validates the need. Our differentiation comes from three key areas: our focus on cross-disciplinary standardization rather than single-field solutions, our ground-up design for accessibility in resource-limited settings, and our integrated educational component. We actually collaborate with several of the platforms you might be thinking of, as we see our role as complementary rather than competitive in advancing open science."

## Implementation Concerns

### Objection: "Your timeline seems ambitious."

**Response Approach:**
- Acknowledge the ambitious nature of our goals
- Explain our phased implementation approach
- Highlight our team's relevant experience
- Discuss contingency planning

**Key Talking Points:**
"We are indeed setting ambitious goals because the need is urgent. However, we've developed a phased implementation plan with clear milestones and dependencies. Our team brings extensive experience from similar large-scale projects, including [specific examples]. We've also built in contingency buffers and have identified specific decision points where we can adjust scope if needed without compromising core deliverables."

### Objection: "How will you manage data quality with so many contributors?"

**Response Approach:**
- Outline our multi-layered quality assurance process
- Explain our standardization frameworks and tools
- Discuss our community review mechanisms
- Share examples of successful quality management

**Key Talking Points:**
"Data quality is foundational to our mission. We've implemented a comprehensive approach including automated validation tools, standardized metadata requirements, peer review processes, and quality scoring systems. Our platform includes both pre-submission quality checks and post-submission community review mechanisms. We've successfully applied these methods in our pilot phase, achieving 98% compliance with quality standards across diverse data types."

## Partnership Fit Concerns

### Objection: "We're not sure this aligns with our strategic priorities."

**Response Approach:**
- Ask questions to better understand their priorities
- Highlight relevant aspects of our work that align
- Suggest potential customization of the partnership
- Propose a workshop to explore alignment opportunities

**Key Talking Points:**
"I appreciate your transparency. May I ask about your current strategic priorities? [After listening] There seem to be several potential connection points, particularly in [areas mentioned]. We could explore a customized partnership focusing specifically on these areas of alignment. I'd be happy to arrange a workshop with our respective teams to dive deeper into how we might structure a partnership that directly advances your strategic objectives."

### Objection: "We prefer exclusive partnerships."

**Response Approach:**
- Acknowledge the value of exclusivity in certain contexts
- Explain our open-source, collaborative philosophy
- Discuss exclusive elements we can offer within our model
- Highlight the benefits of the broader ecosystem

**Key Talking Points:**
"I understand the value of exclusivity in strategic partnerships. While our core platform is open-source by design, we can offer exclusive elements such as named research initiatives, priority access to innovations, exclusive events, or first implementation of new features. Many of our partners have found that the collaborative ecosystem actually multiplies their investment by leveraging the contributions of the broader community while still maintaining their distinct recognition and benefits."`,
        },
      ],
      subfolders: [],
    },
    {
      id: "follow-up-materials",
      name: "6. Follow-up Materials",
      expanded: false,
      files: [
        {
          id: "thank-you-template",
          name: "Thank You Email Template.md",
          type: "md",
          content: `# Thank You Email Template

Subject: Thank You for Meeting About Infinity Nexus Sponsorship

Dear [Financial Institution Representative],

I wanted to express my sincere gratitude for taking the time to meet with me today regarding potential sponsorship for the Infinity Nexus project. Your insights and questions were valuable, and I appreciate your thoughtful consideration of our proposal.

As discussed, Infinity Nexus aims to create a global standard data hub for scientific research and innovation, with operations centered in Cox's Bazar. Your support would be instrumental in helping us achieve this vision and create meaningful impact in both the scientific community and local development.

## Next Steps

As promised during our meeting, I'm attaching the following additional information:
- [Specific document requested during meeting]
- [Answers to follow-up questions]
- [Any other promised materials]

I'll reach out next week as discussed to schedule a follow-up conversation with [mentioned stakeholders]. In the meantime, please don't hesitate to contact me if you have any questions or require any additional information.

## Additional Resources

For your convenience, here are links to some of the resources we discussed:
- Infinity Nexus current platform: [URL]
- Recent research publication using our data standards: [URL]
- Video testimonials from current partners: [URL]

Thank you again for your time and consideration. We're excited about the potential to partner with [Financial Institution Name] and look forward to continuing our conversation.

Warm regards,

MJ AHMAD
Trusted Ally
[Contact Information]`,
        },
        {
          id: "partnership-agreement",
          name: "Draft Partnership Agreement.docx",
          type: "docx",
          url: "/data/infinity-nexus-agreement.docx",
        },
        {
          id: "next-steps",
          name: "Next Steps Document.md",
          type: "md",
          content: `# Next Steps After Initial Sponsorship Meeting

## Immediate Follow-up (Within 24 Hours)
- [ ] Send thank you email with any promised materials
- [ ] Document all questions asked and feedback received
- [ ] Share meeting summary with internal team
- [ ] Begin preparing any requested additional information

## Short-term Actions (1-2 Weeks)
- [ ] Schedule follow-up meeting or call as discussed
- [ ] Prepare and send customized proposal based on meeting feedback
- [ ] Connect relevant technical team members if technical questions arose
- [ ] Share any recent project updates or developments

## Medium-term Actions (2-4 Weeks)
- [ ] Develop detailed implementation plan specific to this partnership
- [ ] Create custom impact measurement framework aligned with sponsor priorities
- [ ] Prepare draft partnership agreement for review
- [ ] Arrange demonstration or site visit if appropriate

## Partnership Development Timeline
1. Initial Meeting (Completed)
2. Proposal Refinement (1-2 weeks)
3. Technical Deep Dive (if needed) (2-3 weeks)
4. Partnership Agreement Review (3-4 weeks)
5. Agreement Finalization (4-6 weeks)
6. Partnership Announcement (Mutually agreed timing)
7. Implementation Kickoff (Per agreement)

## Communication Plan
- Primary Contact: [Financial Institution Representative]
- Frequency: [As discussed in meeting]
- Preferred Method: [Email/Phone/Other as specified]
- Updates to Include:
  * Project progress reports
  * Impact metrics
  * Upcoming opportunities for engagement
  * Media and publication mentions

## Potential Customizations Based on Meeting Feedback
- [Note specific areas of interest expressed during the meeting]
- [Note any concerns raised that need addressing]
- [Note any specific benefits that seemed most valuable to them]

## Resources Needed
- [List any internal resources needed to support this potential partnership]
- [Note any additional materials that need to be created]
- [Identify team members who should be involved in next steps]`,
        },
      ],
      subfolders: [],
    },
    {
      id: "reference-materials",
      name: "7. Reference Materials",
      expanded: false,
      files: [
        {
          id: "market-research",
          name: "Market Research & Analysis.pdf",
          type: "pdf",
          url: "/data/infinity-nexus-market-research.pdf",
        },
        {
          id: "competitor-analysis",
          name: "Competitor Analysis.xlsx",
          type: "xlsx",
          url: "/data/infinity-nexus-competitors.xlsx",
        },
        {
          id: "industry-trends",
          name: "Industry Trends.md",
          type: "md",
          content: `# Key Industry Trends in Open Science & Data Sharing

## 1. Increasing Demand for Open Access

### Current State
The scientific community is experiencing unprecedented demand for open access to research data and findings. According to recent studies:
- 78% of researchers report being unable to access data they need for their work
- 65% of research funding organizations now mandate some form of open data sharing
- Citations for papers with open data are 25% higher on average than those without

### Implications for Infinity Nexus
This trend directly validates our mission and approach. Our platform addresses this growing demand by providing:
- Standardized frameworks for data sharing across disciplines
- Accessible infrastructure for researchers in all settings
- Tools that make compliance with open data mandates straightforward

## 2. Fragmentation of Data Standards

### Current State
Despite progress in open science, data standardization remains highly fragmented:
- Over 80 different metadata standards exist across scientific disciplines
- Only 23% of published datasets meet minimum reusability requirements
- Cross-disciplinary research is hampered by incompatible data formats

### Implications for Infinity Nexus
Our focus on standardization addresses this critical gap:
- Our cross-disciplinary standards framework harmonizes existing standards
- Our validation tools help researchers meet quality requirements
- Our translation layers enable interoperability between different formats

## 3. Emerging Markets as Innovation Hubs

### Current State
Research and innovation landscapes are shifting globally:
- Emerging markets account for 45% of new research publications, up from 25% a decade ago
- 60% of new researchers are based outside traditional research centers
- Research from emerging markets is cited 40% less despite comparable quality

### Implications for Infinity Nexus
Our base in Cox's Bazar positions us at the forefront of this trend:
- We're building infrastructure specifically designed for emerging market contexts
- Our platform reduces barriers to global visibility for researchers in these regions
- Our educational components address skill gaps that limit participation

## 4. AI and Machine Learning in Research

### Current State
AI is transforming how research is conducted and data is analyzed:
- 70% of researchers report using AI tools in some aspect of their work
- Machine learning requires large, standardized datasets to be effective
- Ethical concerns about AI training data are growing

### Implications for Infinity Nexus
Our platform is designed with AI-readiness in mind:
- Standardized data formats make our repositories ideal for AI training
- Our ethical frameworks address concerns about responsible AI use
- Our tools include AI-powered analysis capabilities accessible to all users

## 5. Collaborative and Distributed Research Models

### Current State
Research is becoming increasingly collaborative and distributed:
- The average number of authors per paper has increased 50% in the last decade
- 85% of breakthrough papers involve international collaboration
- Distributed research teams face significant coordination challenges

### Implications for Infinity Nexus
Our platform facilitates this collaborative approach:
- Real-time collaboration tools built into our data environment
- Standardized workflows that improve coordination efficiency
- Attribution and credit systems that recognize all contributors

## 6. Funding Shifts Toward Impact and Open Science

### Current State
Research funding models are evolving:
- 65% of major funders now require open science practices
- Impact-oriented metrics are replacing traditional publication counts
- Private sector funding for open research has increased 120% in five years

### Implications for Infinity Nexus
Our model aligns perfectly with these funding trends:
- Built-in compliance with open science requirements
- Comprehensive impact metrics tracking
- Structured engagement opportunities for private sector partners`,
        },
        {
          id: "technical-specifications",
          name: "Technical Specifications.docx",
          type: "docx",
          url: "/data/infinity-nexus-tech-specs.docx",
        },
      ],
      subfolders: [],
    },
    {
      id: "media-assets",
      name: "8. Media Assets",
      expanded: false,
      files: [
        {
          id: "project-logos",
          name: "Project Logos & Branding.zip",
          type: "zip",
          url: "/data/infinity-nexus-branding.zip",
        },
        {
          id: "photos",
          name: "Cox's Bazar Location Photos.image",
          type: "image",
          url: "/coxs-bazar-sunset.png",
        },
        {
          id: "team-photos",
          name: "Team Photos.image",
          type: "image",
          url: "/mjahmad.png",
        },
      ],
      subfolders: [],
    },
  ],
}

export function ProjectFolderStructure() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({})
  const [previewOpen, setPreviewOpen] = useState(false)
  const { toast } = useToast()

  // Initialize expanded state from the data structure
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {}

    function traverseFolder(folder: FolderType) {
      initialExpanded[folder.id] = folder.expanded || false
      folder.subfolders.forEach(traverseFolder)
    }

    traverseFolder(infinityNexusData)
    setExpandedFolders(initialExpanded)
  }, [])

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderId]: !prev[folderId],
    }))
  }

  const handleFileClick = (file: File) => {
    setSelectedFile(file)
    setPreviewOpen(true)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "Copied to clipboard",
          description: "Content has been copied to your clipboard.",
          duration: 3000,
        })
      })
      .catch((err) => {
        toast({
          title: "Failed to copy",
          description: "There was an error copying to clipboard.",
          variant: "destructive",
          duration: 3000,
        })
        console.error("Failed to copy: ", err)
      })
  }

  const downloadFile = (file: File) => {
    // For demonstration purposes - in a real app, this would download the actual file
    if (file.content) {
      const blob = new Blob([file.content], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = file.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: "File downloaded",
        description: `${file.name} has been downloaded.`,
        duration: 3000,
      })
    } else {
      toast({
        title: "Download simulated",
        description: `In a real app, ${file.name} would download now.`,
        duration: 3000,
      })
    }
  }

  const renderFolder = (folder: FolderType) => {
    const isExpanded = expandedFolders[folder.id]

    return (
      <div key={folder.id} className="pl-2">
        <div
          className="flex items-center py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer"
          onClick={() => toggleFolder(folder.id)}
        >
          {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
          {isExpanded ? (
            <FolderOpen className="h-4 w-4 mr-2 text-blue-500" />
          ) : (
            <FolderIcon className="h-4 w-4 mr-2 text-blue-500" />
          )}
          <span className="text-sm font-medium">{folder.name}</span>
        </div>

        {isExpanded && (
          <div className="ml-4 border-l border-gray-200 dark:border-gray-700 pl-2">
            {folder.files.map((file) => renderFile(file))}
            {folder.subfolders.map((subfolder) => renderFolder(subfolder))}
          </div>
        )}
      </div>
    )
  }

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <FileText className="h-4 w-4 mr-2 text-red-500" />
      case "docx":
        return <FileText className="h-4 w-4 mr-2 text-blue-500" />
      case "md":
        return <FileCode className="h-4 w-4 mr-2 text-green-500" />
      case "pptx":
        return <FilePresentationIcon className="h-4 w-4 mr-2 text-orange-500" />
      case "xlsx":
        return <FileSpreadsheetIcon className="h-4 w-4 mr-2 text-green-600" />
      case "image":
        return <FileImage className="h-4 w-4 mr-2 text-purple-500" />
      case "zip":
        return <FileArchiveIcon className="h-4 w-4 mr-2 text-yellow-500" />
      default:
        return <FileText className="h-4 w-4 mr-2 text-gray-500" />
    }
  }

  const renderFile = (file: File) => {
    return (
      <div
        key={file.id}
        className={`flex items-center py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer ${selectedFile?.id === file.id ? "bg-gray-100 dark:bg-gray-800" : ""}`}
        onClick={() => handleFileClick(file)}
      >
        {getFileIcon(file.type)}
        <span className="text-sm">{file.name}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-200px)] min-h-[500px]">
      {/* Folder structure */}
      <Card className="w-full md:w-1/3 overflow-hidden">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">Project Files</h3>
          <Separator className="my-2" />
          <ScrollArea className="h-[calc(100vh-280px)] min-h-[400px]">{renderFolder(infinityNexusData)}</ScrollArea>
        </CardContent>
      </Card>

      {/* File preview */}
      <Card className="w-full md:w-2/3 overflow-hidden">
        <CardContent className="p-4">
          {selectedFile ? (
            <>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{selectedFile.name}</h3>
                <div className="flex gap-2">
                  {selectedFile.content && (
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(selectedFile.content || "")}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => downloadFile(selectedFile)}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setPreviewOpen(true)}>
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
              <Separator className="my-2" />
              <ScrollArea className="h-[calc(100vh-280px)] min-h-[400px]">
                {selectedFile.content ? (
                  <div className="prose dark:prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap text-sm p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                      {selectedFile.content}
                    </pre>
                  </div>
                ) : selectedFile.type === "image" ? (
                  <div className="flex justify-center">
                    <img
                      src={selectedFile.url || "/placeholder.svg"}
                      alt={selectedFile.name}
                      className="max-w-full h-auto rounded-md"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-4xl mb-4">{getFileIcon(selectedFile.type)}</div>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Preview not available for this file type.
                      <br />
                      Please download the file to view its contents.
                    </p>
                  </div>
                )}
              </ScrollArea>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-280px)] min-h-[400px]">
              <FileText className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-center text-gray-500 dark:text-gray-400">
                Select a file from the project structure to preview its contents.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Document Preview Modal */}
      <DocumentPreviewModal file={selectedFile} isOpen={previewOpen} onClose={() => setPreviewOpen(false)} />
    </div>
  )
}
