import type { InvoiceData } from "./index"

interface ClassicInvoiceProps {
  data: InvoiceData
}

export function ClassicInvoice({ data }: ClassicInvoiceProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const calculateTotal = () => {
    if (data.items && data.items.length > 0) {
      return data.items.reduce((sum, item) => sum + item.total, 0)
    }
    return data.amount
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto" id="invoice-template">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          {data.logo ? (
            <img src={data.logo || "/placeholder.svg"} alt="Company Logo" className="h-16 mb-2" />
          ) : (
            <div className="text-2xl font-bold text-blue-600">{data.companyInfo?.name || "Your Company"}</div>
          )}
          {data.companyInfo && (
            <div className="text-sm text-gray-600">
              <p>{data.companyInfo.address}</p>
              <p>{data.companyInfo.email}</p>
              <p>{data.companyInfo.phone}</p>
              {data.companyInfo.website && <p>{data.companyInfo.website}</p>}
            </div>
          )}
        </div>

        <div className="text-right">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">INVOICE</h1>
          <p className="text-gray-600">
            <span className="font-semibold">Invoice #:</span> {data.id}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Date:</span> {new Date(data.date).toLocaleDateString()}
          </p>
          {data.dueDate && (
            <p className="text-gray-600">
              <span className="font-semibold">Due Date:</span> {new Date(data.dueDate).toLocaleDateString()}
            </p>
          )}
          <p className="text-gray-600 capitalize">
            <span className="font-semibold">Type:</span> {data.type}
          </p>
        </div>
      </div>

      {/* Client Info */}
      {data.contact && (
        <div className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Bill To:</h2>
          <p className="font-medium">{data.contact.name}</p>
          {data.contact.address && <p className="text-gray-600">{data.contact.address}</p>}
          {data.contact.email && <p className="text-gray-600">{data.contact.email}</p>}
          {data.contact.phone && <p className="text-gray-600">{data.contact.phone}</p>}
        </div>
      )}

      {/* Items */}
      <div className="mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Description</th>
              <th className="py-3 px-4 text-right text-gray-700 font-semibold">Quantity</th>
              <th className="py-3 px-4 text-right text-gray-700 font-semibold">Unit Price</th>
              <th className="py-3 px-4 text-right text-gray-700 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items && data.items.length > 0 ? (
              data.items.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-800">{item.description}</td>
                  <td className="py-4 px-4 text-right text-gray-800">{item.quantity}</td>
                  <td className="py-4 px-4 text-right text-gray-800">{formatCurrency(item.unitPrice)}</td>
                  <td className="py-4 px-4 text-right text-gray-800">{formatCurrency(item.total)}</td>
                </tr>
              ))
            ) : (
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 text-gray-800">{data.description}</td>
                <td className="py-4 px-4 text-right text-gray-800">1</td>
                <td className="py-4 px-4 text-right text-gray-800">{formatCurrency(data.amount)}</td>
                <td className="py-4 px-4 text-right text-gray-800">{formatCurrency(data.amount)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="flex justify-end mb-8">
        <div className="w-64">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">Subtotal:</span>
            <span className="text-gray-800">{formatCurrency(calculateTotal())}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">Tax (0%):</span>
            <span className="text-gray-800">{formatCurrency(0)}</span>
          </div>
          <div className="flex justify-between py-3 font-semibold">
            <span className="text-gray-700">Total:</span>
            <span className="text-blue-600 text-xl">{formatCurrency(calculateTotal())}</span>
          </div>
        </div>
      </div>

      {/* Payment Info */}
      {data.paymentInfo && (
        <div className="mb-8 p-4 bg-blue-50 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Payment Information:</h2>
          <p className="text-gray-700">
            <span className="font-medium">Method:</span> {data.paymentInfo.method}
          </p>
          <p className="text-gray-700">{data.paymentInfo.details}</p>
        </div>
      )}

      {/* Notes & Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {data.notes && (
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-2">Notes:</h3>
            <p className="text-gray-600">{data.notes}</p>
          </div>
        )}

        {data.terms && (
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-2">Terms & Conditions:</h3>
            <p className="text-gray-600">{data.terms}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm pt-4 border-t border-gray-200">
        <p>Thank you for your business!</p>
      </div>
    </div>
  )
}
