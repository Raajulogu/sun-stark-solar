"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function HomeMessageForm() {

  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    setIsLoading(true)

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          email: "",
          serviceType: "home-inquiry",
        }),
      })

      if (response.ok) {

        toast({
          title: "Message Sent!",
          description: "Our team will contact you shortly.",
        })

        setFormData({
          name: "",
          phone: "",
          message: "",
        })

      } else {
        throw new Error()
      }

    } catch {

      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      })

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative -mt-16 z-20 px-6">

      <div className="max-w-6xl mx-auto">

        <form
          onSubmit={handleSubmit}
          className="bg-background border rounded-xl shadow-lg p-6 grid md:grid-cols-4 gap-4 items-end"
        >

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground">
              Name
            </label>

            <input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground">
              Phone
            </label>

            <input
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXXXXX"
              className="border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground">
              Requirement
            </label>

            <input
              name="message"
              value={formData.message}
              onChange={(e)=>setFormData({...formData,message:e.target.value})}
              placeholder="Home / Business Solar"
              className="border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-10 bg-accent hover:bg-accent/90"
          >
            {isLoading ? "Sending..." : "Get Free Quote"}
          </Button>

        </form>

      </div>

    </section>
  )
}
