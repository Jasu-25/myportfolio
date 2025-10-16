import { Link } from "react-router-dom";
import { personalInfo, projects, skills } from "@/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight">
                Hi, I'm <span className="text-indigo-600">{personalInfo.name}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {personalInfo.about}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Link to="/contact">
                    Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => toast.info("CV is not available yet.")}
                >
                  Download CV <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
            <p className="mt-4 text-lg text-muted-foreground">Technologies I'm proficient with.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Badge
                  variant="outline"
                  className="text-lg px-6 py-3 transition-all hover:bg-accent"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">A selection of my recent work.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.slice(0, 3).map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="p-6 flex flex-col flex-grow">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-sm text-foreground">Skills Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skillsUsed.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                      <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Interested in working together? Let's talk.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="mt-12 max-w-xl mx-auto"
          >
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}