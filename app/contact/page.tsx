"use client"

import type React from "react"

import { useState } from "react"
import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Send } from "lucide-react"

export default function ContactPage() {
  const { locale } = useLocale()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Отправляем в Telegram через наш API
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setErrorMessage("")
        setFormData({ name: "", email: "", projectType: "", budget: "", message: "" })
      } else {
        const errorData = await response.json()
        console.error("Failed to send message:", errorData)
        setSubmitStatus("error")
        // Показываем понятное сообщение об ошибке
        if (errorData.message) {
          setErrorMessage(errorData.message)
        } else if (errorData.error === 'Telegram bot not started') {
          setErrorMessage('Пожалуйста, запустите бота: https://t.me/Freelance_Buisnes_bot (нажмите START)')
        } else {
          setErrorMessage('Не вдалося надіслати повідомлення. Спробуйте ще раз або зв\'яжіться зі мною безпосередньо.')
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage('Помилка з\'єднання. Перевірте інтернет та спробуйте ще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {locale === "en" && "Get in Touch"}
              {locale === "uk" && "Зв'язатися"}
              {locale === "de" && "Kontakt aufnehmen"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "Let's discuss your project and bring your ideas to life"}
              {locale === "uk" && "Давайте обговоримо ваш проєкт та втілимо ваші ідеї в життя"}
              {locale === "de" && "Lassen Sie uns Ihr Projekt besprechen und Ihre Ideen zum Leben erwecken"}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {locale === "en" && "Send a Message"}
                {locale === "uk" && "Надіслати повідомлення"}
                {locale === "de" && "Nachricht senden"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">
                    {locale === "en" && "Name"}
                    {locale === "uk" && "Ім'я"}
                    {locale === "de" && "Name"}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={locale === "en" ? "Your name" : locale === "uk" ? "Ваше ім'я" : "Ihr Name"}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={
                      locale === "en" ? "your@email.com" : locale === "uk" ? "ваш@email.com" : "ihre@email.com"
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="projectType">
                    {locale === "en" && "Project Type"}
                    {locale === "uk" && "Тип проєкту"}
                    {locale === "de" && "Projekttyp"}
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">
                      {locale === "en" && "Select project type"}
                      {locale === "uk" && "Оберіть тип проєкту"}
                      {locale === "de" && "Projekttyp auswählen"}
                    </option>
                    <option value="landing">
                      {locale === "en" && "Landing Page"}
                      {locale === "uk" && "Лендінг"}
                      {locale === "de" && "Landing-Page"}
                    </option>
                    <option value="website">
                      {locale === "en" && "Multi-Page Website"}
                      {locale === "uk" && "Багатосторінковий сайт"}
                      {locale === "de" && "Mehrseitige Website"}
                    </option>
                    <option value="webapp">
                      {locale === "en" && "Web Application"}
                      {locale === "uk" && "Веб-додаток"}
                      {locale === "de" && "Webanwendung"}
                    </option>
                    <option value="ecommerce">
                      {locale === "en" && "E-commerce"}
                      {locale === "uk" && "Інтернет-магазин"}
                      {locale === "de" && "E-Commerce"}
                    </option>
                    <option value="other">
                      {locale === "en" && "Other"}
                      {locale === "uk" && "Інше"}
                      {locale === "de" && "Andere"}
                    </option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="budget">
                    {locale === "en" && "Budget"}
                    {locale === "uk" && "Бюджет"}
                    {locale === "de" && "Budget"}
                  </Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">
                      {locale === "en" && "Select budget range"}
                      {locale === "uk" && "Оберіть діапазон бюджету"}
                      {locale === "de" && "Budgetbereich auswählen"}
                    </option>
                    <option value="<200">{"< $200"}</option>
                    <option value="200-500">$200 - $500</option>
                    <option value="500-1000">$500 - $1000</option>
                    <option value=">1000">{"> $1000"}</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">
                    {locale === "en" && "Your Preferences"}
                    {locale === "uk" && "Ваші вподобання"}
                    {locale === "de" && "Ihre Präferenzen"}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={
                      locale === "en"
                        ? "Tell me about your project..."
                        : locale === "uk"
                          ? "Розкажіть про ваш проєкт..."
                          : "Erzählen Sie mir von Ihrem Projekt..."
                    }
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-lg bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">
                    {locale === "en" && "Message sent successfully! I'll get back to you soon."}
                    {locale === "uk" && "Повідомлення успішно надіслано! Я зв'яжуся з вами найближчим часом."}
                    {locale === "de" && "Nachricht erfolgreich gesendet! Ich werde mich bald bei Ihnen melden."}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400">
                    {errorMessage ? (
                      <div dangerouslySetInnerHTML={{ __html: errorMessage.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="underline">$1</a>') }} />
                    ) : (
                      <>
                        {locale === "en" && "Failed to send message. Please try again or contact me directly."}
                        {locale === "uk" &&
                          "Не вдалося надіслати повідомлення. Спробуйте ще раз або зв'яжіться зі мною безпосередньо."}
                        {locale === "de" &&
                          "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt."}
                      </>
                    )}
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      {locale === "en" && "Sending..."}
                      {locale === "uk" && "Надсилання..."}
                      {locale === "de" && "Wird gesendet..."}
                    </>
                  ) : (
                    <>
                      {locale === "en" && "Send Message"}
                      {locale === "uk" && "Надіслати"}
                      {locale === "de" && "Nachricht senden"}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {locale === "en" && "Contact Information"}
                {locale === "uk" && "Контактна інформація"}
                {locale === "de" && "Kontaktinformationen"}
              </h2>

              <div className="space-y-6">
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">Email</h3>
                  <a
                    href="mailto:internet.in.ua@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    internet.in.ua@gmail.com
                  </a>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <h3 className="mb-2 font-semibold">
                    {locale === "en" && "Phone / Viber / Telegram"}
                    {locale === "uk" && "Телефон / Viber / Telegram"}
                    {locale === "de" && "Telefon / Viber / Telegram"}
                  </h3>
                  <a
                    href="tel:+380956053239"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    +380956053239
                  </a>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">GitHub</h3>
                  <a
                    href="https://github.com/admine112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    github.com/admine112
                  </a>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-4 font-semibold">
                    {locale === "en" && "Working Hours"}
                    {locale === "uk" && "Години роботи"}
                    {locale === "de" && "Arbeitszeiten"}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>
                        {locale === "en" && "Monday - Friday"}
                        {locale === "uk" && "Понеділок - П'ятниця"}
                        {locale === "de" && "Montag - Freitag"}
                      </span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        {locale === "en" && "Weekend"}
                        {locale === "uk" && "Вихідні"}
                        {locale === "de" && "Wochenende"}
                      </span>
                      <span>
                        {locale === "en" && "By appointment"}
                        {locale === "uk" && "За домовленістю"}
                        {locale === "de" && "Nach Vereinbarung"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-4 font-semibold">
                    {locale === "en" && "Response Time"}
                    {locale === "uk" && "Час відповіді"}
                    {locale === "de" && "Antwortzeit"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === "en" && "I typically respond within 24 hours on business days."}
                    {locale === "uk" && "Зазвичай я відповідаю протягом 24 годин у робочі дні."}
                    {locale === "de" && "Ich antworte in der Regel innerhalb von 24 Stunden an Werktagen."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
