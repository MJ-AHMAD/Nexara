"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqData } from "@/lib/faq-data"

interface FAQContentProps {
  category: string
}

export default function FAQContent({ category }: FAQContentProps) {
  // If category is "all", show all FAQs, otherwise filter by category
  const faqs =
    category === "all"
      ? Object.entries(faqData).flatMap(([cat, items]) => items.map((item) => ({ ...item, category: cat })))
      : faqData[category]?.map((item) => ({ ...item, category })) || []

  // Group FAQs by subcategory if showing all
  const groupedFaqs =
    category === "all"
      ? Object.entries(faqData).reduce((acc, [cat, items]) => {
          const categoryName = cat.charAt(0).toUpperCase() + cat.slice(1)
          return {
            ...acc,
            [categoryName]: items.map((item) => ({ ...item, category: cat })),
          }
        }, {})
      : { [category]: faqs }

  if (faqs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No FAQs available for this category.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {category === "all" ? (
        // Display grouped by category
        Object.entries(groupedFaqs).map(
          ([categoryName, items]) =>
            items.length > 0 && (
              <div key={categoryName} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">{categoryName}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {items.map((faq: any, index: number) => (
                    <AccordionItem key={index} value={`${categoryName}-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <div className="prose prose-sm max-w-none text-gray-600">
                          <p>{faq.answer}</p>
                          {faq.links && faq.links.length > 0 && (
                            <div className="mt-4">
                              <p className="font-medium">Related Resources:</p>
                              <ul className="mt-2">
                                {faq.links.map((link: any, i: number) => (
                                  <li key={i}>
                                    <a
                                      href={link.url}
                                      className="text-blue-600 hover:underline"
                                      target={link.external ? "_blank" : undefined}
                                      rel={link.external ? "noopener noreferrer" : undefined}
                                    >
                                      {link.text}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ),
        )
      ) : (
        // Display single category
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq: any, index: number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-sm max-w-none text-gray-600">
                  <p>{faq.answer}</p>
                  {faq.links && faq.links.length > 0 && (
                    <div className="mt-4">
                      <p className="font-medium">Related Resources:</p>
                      <ul className="mt-2">
                        {faq.links.map((link: any, i: number) => (
                          <li key={i}>
                            <a
                              href={link.url}
                              className="text-blue-600 hover:underline"
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  )
}
