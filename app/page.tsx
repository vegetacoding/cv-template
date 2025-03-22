"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LightGallery from "lightgallery/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import lightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    date: "2023",
    description:
      "A full-featured e-commerce platform built with Next.js and Node.js",
    tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
    images: ["/project1-1.webp", "/project1-2.webp", "/project1-3.webp"],
    link: "https://github.com/username/project1",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    date: "2022",
    description:
      "Real-time social media analytics dashboard with data visualization",
    tech: ["React", "D3.js", "Firebase", "Material-UI"],
    images: ["/project2-1.webp", "/project2-2.webp", "/project2-3.webp"],
    link: "https://github.com/username/project2",
  },
  {
    id: 3,
    title: "AI-Powered Task Manager",
    date: "2021",
    description: "Smart task management system with AI-driven prioritization",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    images: ["/project3-1.webp", "/project3-2.webp", "/project3-3.webp"],
    link: "https://github.com/username/project3",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // Reset image index when changing projects
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen bg-sage-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="playfair text-xl">Curriculum Vitae</h1>
          <div className="flex gap-4">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="nav-link hover:text-black transition-colors"
            >
              about
            </a>
            <a
              href="#education"
              onClick={(e) => handleScroll(e, "education")}
              className="nav-link hover:text-black transition-colors"
            >
              education
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="nav-link hover:text-black transition-colors"
            >
              projects
            </a>
            <a
              href="#resume"
              onClick={(e) => handleScroll(e, "resume")}
              className="nav-link hover:text-black transition-colors"
            >
              experience
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="nav-link hover:text-black transition-colors"
            >
              contact
            </a>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-4 py-2 rounded"
                onClick={() => {
                  window.print();
                }}
              >
                Download CV
              </motion.button>      
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="playfair text-6xl mb-4">Nakia Hart</h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Full Stack Developer
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Phone:</span> 123-456-7890
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                nakia.hart@email.com
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                github.com/nakiahart
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="https://linkedin.com" className="social-link">
                LinkedIn
              </Link>
              <span>•</span>
              <Link href="https://facebook.com" className="social-link">
                Facebook
              </Link>
              <span>•</span>
              <Link href="https://twitter.com" className="social-link">
                Twitter
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={500}
              height={500}
              priority
              className="object-cover rounded-lg shadow-xl w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* See full CV Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center pb-16"
      >
        <Link
          href="#resume"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          See full CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </motion.div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3 }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2 variants={fadeInUp} className="playfair text-4xl mb-8">
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                As a Full Stack Developer with over 5 years of experience, I
                specialize in building scalable web applications using modern
                technologies. My expertise includes React, Node.js, TypeScript,
                and cloud services, with a strong focus on creating efficient
                and maintainable code.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I have a proven track record of delivering complex projects,
                implementing microservices architectures, and optimizing
                application performance. I'm passionate about clean code
                practices, agile methodologies, and staying current with
                emerging technologies.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Core Skills</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Frontend Development</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• React.js / Next.js</li>
                    <li>• TypeScript / JavaScript</li>
                    <li>• HTML5 / CSS3</li>
                    <li>• Tailwind CSS / SASS</li>
                    <li>• Redux / Context API</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Backend Development</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Node.js / Express.js</li>
                    <li>• RESTful APIs</li>
                    <li>• MongoDB / PostgreSQL</li>
                    <li>• GraphQL</li>
                    <li>• AWS / Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3 }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2 variants={fadeInUp} className="playfair text-4xl mb-12">
            Education
          </motion.h2>
          <div className="space-y-12">
            <motion.div
              variants={fadeInUp}
              className="relative pl-8 border-l-2 border-gray-200"
            >
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-0" />
              <div className="space-y-2">
                <span className="text-sm text-gray-500">2014 - 2018</span>
                <h3 className="text-xl font-semibold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600">Stanford University</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Major: Computer Science</li>
                  <li>Minor: Data Science</li>
                  <li>GPA: 3.8/4.0</li>
                  <li>
                    Relevant Coursework: Data Structures, Algorithms, Database
                    Systems, Web Development
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative pl-8 border-l-2 border-gray-200"
            >
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-0" />
              <div className="space-y-2">
                <span className="text-sm text-gray-500">2018 - 2020</span>
                <h3 className="text-xl font-semibold">
                  Master of Science in Software Engineering
                </h3>
                <p className="text-gray-600">
                  Massachusetts Institute of Technology
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    Specialization: Cloud Computing and Distributed Systems
                  </li>
                  <li>
                    Thesis: "Optimizing Microservices Architecture for Scale"
                  </li>
                  <li>GPA: 3.9/4.0</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="playfair text-4xl mb-12"
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project Images */}
            <div className="relative">
              <motion.div
                key={`${selectedProject.id}-${currentImageIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${
                    currentImageIndex + 1
                  }`}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Image Navigation */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentImageIndex === index ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-white"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-white"
              >
                →
              </button>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-8 border-l-2 cursor-pointer transition-all duration-300 ${
                    selectedProject.id === project.id
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className={`absolute w-4 h-4 rounded-full -left-[9px] top-0 transition-colors duration-300 ${
                      selectedProject.id === project.id
                        ? "bg-black"
                        : "bg-gray-200"
                    }`}
                  />
                  <div className="space-y-2">
                    <span className="text-sm text-gray-500">
                      {project.date}
                    </span>
                    <h3
                      className={`text-xl font-semibold transition-colors duration-300 ${
                        selectedProject.id === project.id
                          ? "text-black"
                          : "text-gray-600"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-block text-black hover:underline mt-2"
                      target="_blank"
                    >
                      View Code →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3 }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2 variants={fadeInUp} className="playfair text-4xl mb-12">
            Experience
          </motion.h2>
          <div className="space-y-12">
            <motion.div
              variants={fadeInUp}
              className="relative pl-8 border-l-2 border-gray-200"
            >
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-0" />
              <div className="space-y-2">
                <span className="text-sm text-gray-500">2020 - Present</span>
                <h3 className="text-xl font-semibold">
                  Senior Full Stack Developer
                </h3>
                <p className="text-gray-600">TechCorp Solutions</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    Led development of microservices-based e-commerce platform
                    serving 100K+ daily users
                  </li>
                  <li>
                    Architected and implemented CI/CD pipeline reducing
                    deployment time by 60%
                  </li>
                  <li>
                    Mentored junior developers and conducted code reviews to
                    maintain high code quality
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative pl-8 border-l-2 border-gray-200"
            >
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-0" />
              <div className="space-y-2">
                <span className="text-sm text-gray-500">2018 - 2020</span>
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-gray-600">Digital Innovation Labs</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    Developed and maintained multiple React-based web
                    applications
                  </li>
                  <li>Implemented RESTful APIs using Node.js and Express</li>
                  <li>
                    Optimized database queries resulting in 40% performance
                    improvement
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3 }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2 variants={fadeInUp} className="playfair text-4xl mb-8">
            Get in Touch
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <p className="text-gray-600">
                I'm always interested in hearing about new projects and
                opportunities. Feel free to reach out if you'd like to connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@mysite.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">123-456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-3 rounded-md font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600">
        <p>© 2024 Nakia Hart. All rights reserved.</p>
      </footer>
    </main>
  );
}
