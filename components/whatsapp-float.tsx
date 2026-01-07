"use client"

export default function WhatsAppFloat() {
  const phoneNumber = "254717219448"
  const defaultMessage = "Hello, I would like to inquire about your AI services."
  const encodedMessage = encodeURIComponent(defaultMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="#fff">
        <path d="M19.11 17.64c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.34-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.827.744 5.48 2.044 7.771L0 32l8.449-2.044C10.64 32.256 13.173 33 16 33c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.5c-2.344 0-4.55-.61-6.468-1.68l-.453-.24-4.7 1.14 1.14-4.58-.24-.453C4.61 20.55 4 18.344 4 16 4 9.383 9.383 4 16 4s12 5.383 12 12-5.383 12-12 12z"/>
      </svg>
    </a>
  )
}

