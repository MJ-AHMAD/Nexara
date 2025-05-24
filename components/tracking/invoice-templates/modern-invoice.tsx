import type { InvoiceData } from "./index"

interface ModernInvoiceProps {
  data: InvoiceData
}

export function ModernInvoice({ data }: ModernInvoiceProps) {
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
      {/* Header with accent color */}
      <div className="bg-purple-600 text-white p-6 -mx-8 -mt-8 mb-8 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div>
            {data.logo ? (
              <img src={data.logo || "/placeholder.svg"} alt="Company Logo" className="h-16 mb-2" />
            ) : (
              <div className="text-2xl font-bold">{data.companyInfo?.name || "Your Company"}</div>
            )}
          </div>

          <div className="text-right">
            <h1 className="text-3xl font-bold mb-1">INVOICE</h1>
            <p className="text-purple-200"># {data.id}</p>
          </div>
        </div>
      </div>

      {/* Invoice Info & Client Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b border-purple-200 pb-1">Invoice Details</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Date Issued:</span>
              <span className="font-medium">{new Date(data.date).toLocaleDateString()}</span>
            </div>
            {data.dueDate && (
              <div className="flex justify-between">
                <span className="text-gray-600">Due Date:</span>
                <span className="font-medium">{new Date(data.dueDate).toLocaleDateString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Type:</span>
              <span className="font-medium capitalize">{data.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span
                className={`font-medium ${
                  data.status === "paid"
                    ? "text-green-600"
                    : data.status === "pending"
                      ? "text-amber-600"
                      : "text-red-600"
                }`}
              >
                {data.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <div>
          {data.contact && (
            <>
              <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b border-purple-200 pb-1">Bill To</h2>
              <div className="space-y-1">
                <p className="font-medium">{data.contact.name}</p>
                {data.contact.address && <p className="text-gray-600">{data.contact.address}</p>}
                {data.contact.email && <p className="text-gray-600">{data.contact.email}</p>}
                {data.contact.phone && <p className="text-gray-600">{data.contact.phone}</p>}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Company Info */}
      {data.companyInfo && (
        <div className="mb-8 p-4 bg-purple-50 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">From</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">{data.companyInfo.name}</p>
              <p className="text-gray-600">{data.companyInfo.address}</p>
            </div>
            <div>
              <p className="text-gray-600">{data.companyInfo.email}</p>
              <p className="text-gray-600">{data.companyInfo.phone}</p>
              {data.companyInfo.website && <p className="text-gray-600">{data.companyInfo.website}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Items */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b border-purple-200 pb-1">Invoice Items</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-100">
                <th className="py-3 px-4 text-left text-gray-700 font-semibold rounded-tl-md">Description</th>
                <th className="py-3 px-4 text-right text-gray-700 font-semibold">Quantity</th>
                <th className="py-3 px-4 text-right text-gray-700 font-semibold">Unit Price</th>
                <th className="py-3 px-4 text-right text-gray-700 font-semibold rounded-tr-md">Amount</th>
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
      </div>

      {/* Summary */}
      <div className="flex justify-end mb-8">
        <div className="w-64 bg-purple-50 p-4 rounded-md">
          <div className="flex justify-between py-2 border-b border-purple-100">
            <span className="font-medium text-gray-700">Subtotal:</span>
            <span className="text-gray-800">{formatCurrency(calculateTotal())}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-purple-100">
            <span className="font-medium text-gray-700">Tax (0%):</span>
            <span className="text-gray-800">{formatCurrency(0)}</span>
          </div>
          <div className="flex justify-between py-3 font-semibold">
            <span className="text-gray-700">Total:</span>
            <span className="text-purple-600 text-xl">{formatCurrency(calculateTotal())}</span>
          </div>
        </div>
      </div>

      {/* Payment Info */}
      {data.paymentInfo && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b border-purple-200 pb-1">
            Payment Information
          </h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-700">
              <span className="font-medium">Method:</span> {data.paymentInfo.method}
            </p>
            <p className="text-gray-700">{data.paymentInfo.details}</p>
          </div>
        </div>
      )}

      {/* Notes & Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {data.notes && (
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-2 border-b border-purple-200 pb-1">Notes</h3>
            <p className="text-gray-600">{data.notes}</p>
          </div>
        )}

        {data.terms && (
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-2 border-b border-purple-200 pb-1">
              Terms & Conditions
            </h3>
            <p className="text-gray-600">{data.terms}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center bg-purple-600 text-white p-4 rounded-md">
        <p>Thank you for your business!</p>
      </div>
    </div>
  )
}
