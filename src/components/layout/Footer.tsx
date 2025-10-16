import { personalInfo } from "@/data";
import { Button } from "@/components/ui/button";
export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground">
              {personalInfo.name}
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {personalInfo.socials.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Built with ❤️ at Cloudflare
        </div>
      </div>
    </footer>
  );
}