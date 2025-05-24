import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CreditCard, ShieldCheck, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Checkout | MJ-AHMAD",
  description: "Complete your purchase",
}

export default function CheckoutPage() {
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
        <Link href="/cart" className="text-muted-foreground hover:text-primary text-sm">
          Cart
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Checkout</span>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <CreditCard className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" placeholder="Enter your street address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter your city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="Enter your state or province" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zip">Postal/ZIP Code</Label>
                  <Input id="zip" placeholder="Enter your postal or ZIP code" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Enter your country" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="card" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="card">Credit Card</TabsTrigger>
                  <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                </TabsList>

                <TabsContent value="card" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name-on-card">Name on Card</Label>
                    <Input id="name-on-card" placeholder="Enter name as it appears on card" />
                  </div>
                </TabsContent>

                <TabsContent value="paypal" className="space-y-4">
                  <div className="text-center py-8">
                    <img src="/paypal-logo.png" alt="PayPal" className="h-12 mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      You will be redirected to PayPal to complete your payment securely.
                    </p>
                    <Button>Continue to PayPal</Button>
                  </div>
                </TabsContent>

                <TabsContent value="bank" className="space-y-4">
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-medium mb-2">Bank Transfer Details</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Please transfer the total amount to the following bank account:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="font-medium">Bank Name:</span> Bangladesh Bank
                      </p>
                      <p>
                        <span className="font-medium">Account Name:</span> MJ Ahmad Educational Foundation
                      </p>
                      <p>
                        <span className="font-medium">Account Number:</span> 1234567890
                      </p>
                      <p>
                        <span className="font-medium">Branch:</span> Cox's Bazar
                      </p>
                      <p>
                        <span className="font-medium">Reference:</span> Your Order Number
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transfer-date">Transfer Date</Label>
                    <Input id="transfer-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transfer-reference">Transfer Reference</Label>
                    <Input id="transfer-reference" placeholder="Enter your bank transfer reference" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-green-500" />
            <span>Your payment information is secure and encrypted</span>
          </div>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm py-2">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="pt-4">
                <RadioGroup defaultValue="standard">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard">Standard Shipping (3-5 business days)</Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express">Express Shipping (1-2 business days) +$10.00</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-700">
                <p className="font-medium mb-1">Your purchase supports free education</p>
                <p>
                  100% of profits go towards providing free educational resources and supporting MJ Ahmad's medical
                  treatment.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <Button className="w-full" size="lg">
                Complete Order
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/cart">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Return to Cart
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
