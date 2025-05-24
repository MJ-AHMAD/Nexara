import { ClassicInvoice } from "./classic-invoice"
import { ModernInvoice } from "./modern-invoice"
import { ElegantInvoice } from "./elegant-invoice"
import { CreativeInvoice } from "./creative-invoice"
import { CorporateInvoice } from "./corporate-invoice"

export interface InvoiceData {
  id: string
  date: string
  dueDate?: string
  type: string
  name: string
  description: string
  amount: number
  status: string
  category: string
  contact?: {
    name: string
    email: string
    phone?: string
    address?: string
  }
  items?: Array<{
    description: string
    quantity: number
    unitPrice: number
    total: number
  }>
  notes?: string
  terms?: string
  logo?: string
  companyInfo?: {
    name: string
    address: string
    email: string
    phone: string
    website?: string
  }
  paymentInfo?: {
    method: string
    details: string
  }
}

interface InvoiceTemplateProps {
  data: InvoiceData
  templateId: string
}

export function InvoiceTemplate({ data, templateId = "classic" }: InvoiceTemplateProps) {
  switch (templateId) {
    case "modern":
      return <ModernInvoice data={data} />
    case "elegant":
      return <ElegantInvoice data={data} />
    case "creative":
      return <CreativeInvoice data={data} />
    case "corporate":
      return <CorporateInvoice data={data} />
    case "classic":
    default:
      return <ClassicInvoice data={data} />
  }
}
