import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src="/fav.png" alt="AiEducator - Leading AI Education Platform" width={32} height={32} />
              </div>
              <span>AiEducator.com</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The #1 AI-powered education platform transforming learning through personalized experiences, adaptive learning paths, and comprehensive analytics.
            </p>
            <div className="flex items-center gap-4">
              <Link href="mailto:info@orcalextech.com" className="text-muted-foreground hover:text-primary">
                <Mail className="size-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+918008066228" className="text-muted-foreground hover:text-primary">
                <Phone className="size-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">AI Education Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Features
                </Link>
              </li>
              <li>
                <Link href="/implementation" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Implementation
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-primary transition-colors">
                  Try AI Demo
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AiEducator.com - The #1 AI Education Platform. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="mailto:info@orcalex.ai"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              info@orcalex.ai
            </Link>
            <Link
              href="tel:+918008066228"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              +91 8008066228
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
