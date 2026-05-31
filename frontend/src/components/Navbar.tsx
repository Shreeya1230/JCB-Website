"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setShowNavbar(false);
            } else {
                // scrolling up
                setShowNavbar(true);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-3xl font-bold text-[#1F2937]"
                    >
                        Purva
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center gap-8">

                        <Link
                            href="/"
                            className="hover:text-[#D4A017] transition"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="hover:text-[#D4A017] transition"
                        >
                            About Us
                        </Link>

                        <Link
                            href="/contact"
                            className="hover:text-[#D4A017] transition"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/login"
                            className="hover:text-[#D4A017] transition"
                        >
                            Login
                        </Link>

                        <Link
                            href="/signup"
                            className="bg-[#D4A017] text-white px-5 py-2 rounded-lg hover:bg-[#b88b12] transition"
                        >
                            Sign Up
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}
