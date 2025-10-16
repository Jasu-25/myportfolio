import { personalInfo, education, experience, contactDetails } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const TimelineItem = ({
  item,
  isLast,
}: {
  item: {
    icon: React.ElementType;
    year?: string;
    degree?: string;
    institution?: string;
    role?: string;
    company?: string;
    period?: string;
    description?: string;
  };
  isLast: boolean;
}) => (
  <motion.div
    className="flex gap-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col items-center">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
        <item.icon className="w-6 h-6" />
      </div>
      {!isLast && (
        <div className="w-px h-full bg-border flex-grow mt-2"></div>
      )}
    </div>
    <div className="pb-12">
      <p className="text-sm font-medium text-indigo-600">
        {item.year || item.period}
      </p>
      <h3 className="text-lg font-semibold text-foreground mt-1">
        {item.degree || item.role}
      </h3>
      <p className="text-muted-foreground text-sm">
        {item.institution || item.company}
      </p>
      {item.description && (
        <p className="mt-2 text-muted-foreground">{item.description}</p>
      )}
    </div>
  </motion.div>
);
export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{personalInfo.about}</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-center gap-3">
                      <detail.icon className="w-5 h-5 text-muted-foreground" />
                      <a
                        href={detail.href}
                        className="text-foreground hover:text-indigo-600 transition-colors"
                      >
                        {detail.value}
                      </a>
                    </div>
                  ))}
                  <div className="flex gap-2 pt-2">
                    {personalInfo.socials.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="h-5 w-5" />
                          <span className="sr-only">{social.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                Education
              </h2>
              <div>
                {education.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                Experience
              </h2>
              <div>
                {experience.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    isLast={index === experience.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}