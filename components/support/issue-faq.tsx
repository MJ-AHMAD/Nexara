"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GitPullRequest, Bug, HelpCircle, AlertTriangle, Clock, Search } from "lucide-react"

export default function IssueFAQ() {
  return (
    <Card>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              <div className="flex items-center">
                <Bug className="mr-2 h-5 w-5 text-red-500" />
                <span>How do I report a bug?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-3">
                To report a bug, use the form on this page and select "Bug Report" as the issue type. Please include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Steps to reproduce the bug</li>
                <li>What you expected to happen</li>
                <li>What actually happened</li>
                <li>Screenshots or videos if applicable</li>
                <li>Browser/device information if it's a website issue</li>
              </ul>
              <p className="text-gray-600 mt-3">
                The more details you provide, the faster we can identify and fix the issue.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              <div className="flex items-center">
                <GitPullRequest className="mr-2 h-5 w-5 text-purple-500" />
                <span>How do I suggest a new feature?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 mb-3">We welcome feature suggestions! To submit a feature request:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use the form on this page and select "Feature Request" as the issue type</li>
                <li>Clearly describe the feature you'd like to see</li>
                <li>Explain the problem it would solve or the value it would add</li>
                <li>Include any mockups or examples if you have them</li>
              </ul>
              <p className="text-gray-600 mt-3">
                Our team reviews all feature requests and prioritizes them based on community interest and alignment
                with our roadmap.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-500" />
                <span>How long will it take to get a response?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                We aim to acknowledge all issue reports within 2-3 business days. The time to resolution depends on the
                complexity of the issue and our current workload. Critical bugs are prioritized and addressed as quickly
                as possible. For feature requests, we'll let you know if and when we plan to implement it in our
                roadmap.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              <div className="flex items-center">
                <Search className="mr-2 h-5 w-5 text-amber-500" />
                <span>How can I check the status of my reported issue?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                After submitting an issue, you'll receive a confirmation email with a tracking ID. You can use this ID
                to check the status of your issue on our GitHub repository or by replying to the confirmation email. For
                public issues, you can also check our GitHub Issues page to see if your issue has been logged and its
                current status.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              <div className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-orange-500" />
                <span>What should I do if I find a security vulnerability?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                Security vulnerabilities should NOT be reported using this form or posted publicly. Instead, please
                follow our{" "}
                <a href="/security" className="text-blue-600 hover:underline">
                  Security Policy
                </a>{" "}
                and report them directly to our security team at security@nexara.org. This helps us address the issue
                before it becomes public knowledge and potentially exploited.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              <div className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-green-500" />
                <span>Can I contribute to fixing issues?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">
                We welcome community contributions. If you'd like to help fix an issue or implement a feature, please
                check our{" "}
                <a href="/contributing" className="text-blue-600 hover:underline">
                  Contributing Guidelines
                </a>{" "}
                for information on how to submit pull requests. Before starting work, it's best to comment on the issue
                or feature request to let us know you're working on it and to discuss your approach.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
