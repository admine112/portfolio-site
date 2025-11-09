"use client"

import { useLocale } from "@/lib/locale-provider"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
export function Footer() {
  const { t } = useLocale()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Arsen Web. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="mailto:internet.in.ua@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/admine112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
