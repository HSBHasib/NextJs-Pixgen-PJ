import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="relative w-5/6 mx-auto">
        {/* Subtle Gradient Glow (Light Version) */}
        <div className="absolute inset-0 -z-10" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Top Grid */}
          <div className="flex justify-between flex-wrap gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="pixgen logo"
                  width={32}
                  height={32}
                  className="brightness-100"
                />
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                  pixgen
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
                Create production-ready AI visuals in seconds. Built for speed,
                scale, and creativity.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Product
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link
                    href="/generate"
                    className="hover:text-black transition"
                  >
                    Generate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/all-photos"
                    className="hover:text-black transition"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-black transition">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-black transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-black transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-black transition">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA Block */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Start creating
              </h3>
              <p className="text-sm text-gray-600">
                Generate your first AI image today.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium transition-all duration-200 hover:bg-black hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-200"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Bottom */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-black transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-black transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
