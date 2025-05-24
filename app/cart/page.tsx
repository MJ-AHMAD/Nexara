import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Trash2, ShoppingBag, ArrowRight, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Shopping Cart | MJ-AHMAD",
  description: "Review your cart and checkout",
}

export default function CartPage() {
  // Sample cart data - in a real app, this would come from a state management system
  const cartItems = [
    {
      id: "merch-001",
      name: "Inspirational T-Shirt (Men)",
      price: 24.99,
      quantity: 1,
      image: "/mens-tshirt.png",
      options: "Size: M, Color: Navy Blue",
    },
    {
      id: "merch-003",
      name: "Inspirational Mug",
      price: 19.99,
      quantity: 2,
      image: "/inspirational-mug.png",
      options: "",
    },
    {
      id: "tour-001",
      name: "Weekend Beach Retreat",
      price: 149.99,
      quantity: 1,
      image: "/beach-retreat.png",
      options: "Date: June 15-16, 2023",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/" className="text-muted-foreground hover:text-primary text-sm">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link href="/products" className="text-muted-foreground hover:text-primary text-sm">
          Products
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Cart</span>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <ShoppingBag className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4 border-b">
                    <div className="sm:w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      {item.options && <p className="text-sm text-muted-foreground">{item.options}</p>}
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center border rounded-md">
                          <button className="px-3 py-1 border-r">-</button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button className="px-3 py-1 border-l">+</button>
                        </div>
                        <button className="text-sm text-red-500 flex items-center gap-1">
                          <Trash2 className="h-4 w-4" /> Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Continue Shopping</Button>
                <Button variant="ghost" className="text-red-500">
                  <Trash2 className="h-4 w-4 mr-2" /> Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">Promo Code</span>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Enter code" className="flex-grow" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-700">
                  <p className="font-medium mb-1">Your purchase supports free education</p>
                  <p>
                    100% of profits go towards providing free educational resources and supporting MJ Ahmad's medical
                    treatment.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2">
                <img src="/github-sponsor.svg" alt="GitHub Sponsors" className="h-6 w-6" />
                <span className="text-sm font-medium">Also available on GitHub Sponsors</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/ko-fi.png" alt="Ko-fi" className="h-6 w-6" />
                <span className="text-sm font-medium">Support us on Ko-fi</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild>
            <Link href="/products">
              Browse Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </main>
  )
}
