import { Home, Info, Image, Wrench, Users, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "About", href: "/about", icon: Info },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Tools", href: "/tools", icon: Wrench },
    { name: "Connections", href: "/connections", icon: Users },
    { name: "GitHub", href: "https://github.com/GaneshShah", icon: Github, external: true },
    { name: "LinkedIn", href: "https://linkedin.com/in/ganesh-shah", icon: Linkedin, external: true },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter, external: true },
    { name: "Email", href: "mailto:contact@ganeshshah.com", icon: Mail, external: true },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-900 mt-0">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mb-6">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            const LinkComponent = link.external ? 'a' : Link;
            const linkProps = link.external
              ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
              : { to: link.href };

            return (
              <LinkComponent
                key={link.name}
                {...linkProps}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors text-sm group"
              >
                <Icon size={16} className="flex-shrink-0 text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
                <span>{link.name}</span>
              </LinkComponent>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-center text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Ganesh Shah · Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
