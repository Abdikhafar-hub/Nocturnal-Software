"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 contact-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 contact-container w-full">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 contact-header">
          <h2 className="contact-title font-bold mb-2 sm:mb-3 text-gray-900">
            Have questions or ready to get started? Contact us today.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 contact-grid">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg contact-info-card">
            {/* Contact Details */}
            <div className="p-4 sm:p-6 contact-info-content">
              <div className="mb-4 sm:mb-5">
                <h4 className="contact-info-title font-bold text-gray-900 mb-3 sm:mb-4">Get in Touch</h4>
                <div className="space-y-2 sm:space-y-3 contact-info-items">
                  <div className="flex gap-2 sm:gap-3 items-start p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-slate-50 transition-colors duration-200 contact-info-item">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center contact-icon-wrapper rounded-lg bg-primary/10">
                        <MapPin className="text-primary contact-icon" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="contact-info-label text-gray-500 mb-0.5 font-bold">Address</p>
                      <p className="contact-info-text text-gray-900 leading-relaxed">
                        Kolobot Road, Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3 items-start p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-slate-50 transition-colors duration-200 contact-info-item">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center contact-icon-wrapper rounded-lg bg-primary/10">
                        <Phone className="text-primary contact-icon" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="contact-info-label text-gray-500 mb-0.5 font-bold">Phone</p>
                      <a href="tel:+254717219448" className="contact-info-text text-gray-900 hover:text-primary transition-colors">
                        +254717219448
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3 items-start p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-slate-50 transition-colors duration-200 contact-info-item">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center contact-icon-wrapper rounded-lg bg-primary/10">
                        <Mail className="text-primary contact-icon" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="contact-info-label text-gray-500 mb-0.5 font-bold">Email</p>
                      <a href="mailto:info@nocturnalsoftware.com" className="contact-info-text text-gray-900 hover:text-primary transition-colors break-all">
                        info@nocturnalsoftware.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3 items-start p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-green-50 transition-colors duration-200 contact-info-item">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center contact-icon-wrapper rounded-lg bg-green-100">
                        <svg
                          className="contact-icon text-green-600"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="contact-info-label text-gray-500 mb-0.5 font-bold">WhatsApp</p>
                      <a href="https://wa.me/254717219448" target="_blank" rel="noopener noreferrer" className="contact-info-text text-gray-900 hover:text-green-600 transition-colors">
                        +254717219448
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-gray-200 contact-business-hours">
                <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 contact-business-hours-title flex items-center gap-2">
                  <div className="flex items-center justify-center contact-business-hours-icon-wrapper rounded-lg bg-primary/10">
                    <Clock className="text-primary contact-business-hours-icon" />
                  </div>
                  <span className="contact-business-hours-title-text">Business Hours</span>
                </h4>
                <div className="space-y-1 sm:space-y-1.5 contact-business-hours-list">
                  <div className="flex justify-between items-center py-1 sm:py-1.5 px-2 rounded hover:bg-slate-50 transition-colors contact-business-hours-item">
                    <span className="contact-business-hours-day font-semibold text-gray-800">Monday - Friday</span>
                    <span className="contact-business-hours-time text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 sm:py-1.5 px-2 rounded hover:bg-slate-50 transition-colors contact-business-hours-item">
                    <span className="contact-business-hours-day font-semibold text-gray-800">Saturday</span>
                    <span className="contact-business-hours-time text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 sm:py-1.5 px-2 rounded hover:bg-slate-50 transition-colors contact-business-hours-item">
                    <span className="contact-business-hours-day font-semibold text-gray-800">Sunday</span>
                    <span className="contact-business-hours-time text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 contact-form-card">
            <h3 className="contact-form-title font-bold mb-4 sm:mb-5 text-primary">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 contact-form">
              <div className="contact-form-field">
                <label htmlFor="name" className="block contact-form-label font-medium mb-1 sm:mb-1.5 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full contact-form-input px-3 py-2 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="email" className="block contact-form-label font-medium mb-1 sm:mb-1.5 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full contact-form-input px-3 py-2 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  placeholder="Your email address"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="phone" className="block contact-form-label font-medium mb-1 sm:mb-1.5 text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full contact-form-input px-3 py-2 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  placeholder="Your phone number"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="message" className="block contact-form-label font-medium mb-1 sm:mb-1.5 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full contact-form-textarea px-3 py-2 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none text-gray-900 placeholder:text-gray-400"
                  placeholder="Your message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 sm:py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 contact-form-submit"
              >
                <span className="contact-form-submit-text">Send Message</span>
                <Send className="contact-form-submit-icon" />
              </Button>
              
              <p className="contact-form-disclaimer text-gray-500 text-center mt-2">
                Your message will be sent to our team via email.
              </p>
            </form>
          </div>
        </div>

        {/* Google Map - Full Width Below Cards */}
        <div className="mt-4 sm:mt-6 bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden contact-map-wrapper">
          <div className="w-full contact-map-container overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.834900721358!2d36.81508488754185!3d-1.272153232285589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170009fb55e7%3A0x9df2a696915f3dc8!2sHarmony%20Heights!5e0!3m2!1sen!2ske!4v1762242477377!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full contact-map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
