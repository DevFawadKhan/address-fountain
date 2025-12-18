"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, Menu, X, Map, Box } from "lucide-react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Rooms", href: "/rooms" },
  { label: "About Us", href: "/about" },
  { label: "Floor Plans", href: "/floor-plan" },
  { label: "Payment Plan", href: "/payment-plan" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="main-wrapper px-4 md:px-8 flex items-center justify-between">
          {/* --- 1. LOGO (LEFT) --- */}
          <Link href="/" className="shrink-0">
            <div className="relative w-36 h-10 md:w-48 md:h-12">
              <Image
                src="/assets/logo.webp"
                alt="Address Fountain Logo"
                fill
                className="object-contain object-left"
                // priority
                loading="lazy"
              />
            </div>
          </Link>

          {/* --- 2. CENTER PILL NAV --- 
              CHANGED: 'hidden xl:flex' -> 'hidden lg:flex'
              Now appears on Large screens (1024px+) and up.
          */}
          <nav className="hidden lg:flex items-center bg-white rounded-xl px-2 py-1.5 shadow-sm border border-gray-100 mx-2">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`
                        flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                        ${
                          isActive
                            ? "bg-btn-navy text-white! shadow-md"
                            : "text-black!"
                        }
                      `}
                    >
                      {Icon && (
                        <Icon
                          size={16}
                          className={isActive ? "text-white" : "text-current"}
                        />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* --- 3. ACTION BUTTONS (RIGHT) --- 
              CHANGED: 'hidden lg:flex' (Kept as is, matches the nav visibility)
          */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button icon={Box} className="text-white">
              3D Virtual Tour
            </Button>

            {/* Added 'text-white!' to force the color */}
            <Button icon={Map} className="text-white">
              3D Guided Map
            </Button>
          </div>

          {/* --- 4. MOBILE TOGGLE --- */}
          <button
            className="lg:hidden p-2 text-btn-navy"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 transform flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <div className="relative w-28 h-8">
              <Image
                src="/assets/logo.webp"
                alt="Address Fountain Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 border-b border-gray-50 ${
                  pathname === link.href
                    ? "text-span-blue"
                    : "text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <Button icon={Box} className="w-full py-3 text-base">
                3D Virtual Tour
              </Button>
              <Button
                icon={Map}
                className="w-full py-3 text-base bg-white text-btn-navy border border-btn-navy hover:bg-gray-50"
              >
                3D Guided Map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
