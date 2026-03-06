export default function Footer() {
  return (
    <footer className="py-12 border-t border-light-gray">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <span className="text-sm text-soft-gray">
            &copy; {new Date().getFullYear()} Clear Web Collective. All rights reserved.
          </span>
          <ul className="flex gap-7">
            {[
              { label: "Services", href: "#services" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "mailto:hello@clearwebcollective.com" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-soft-gray hover:text-charcoal transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
