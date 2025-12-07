const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    general: [
      { name: "About", href: "#about" },
      { name: "Work", href: "#work" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ],
    social: [
      { name: "GitHub", href: "https://github.com/GaneshShah" },
      { name: "LinkedIn", href: "https://linkedin.com/in/ganesh-shah" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "Twitter", href: "https://twitter.com" }
    ]
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* General Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm uppercase tracking-wider">
              General
            </h3>
            <ul className="space-y-2">
              {footerLinks.general.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm uppercase tracking-wider">
              Social
            </h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm uppercase tracking-wider">
              About
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A passionate web developer crafting amazing digital experiences with modern technologies.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Proudly Made in Nepal by{" "}
              <a
                href="https://linkedin.com/in/ganesh-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline font-medium"
              >
                Ganesh Shah
              </a>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
