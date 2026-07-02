import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Heading from "./Heading";
import { PiMailboxFill } from "react-icons/pi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Sandeep Gupta | Contact";
  }, []);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: import.meta.env.VITE_WEB3FORM_API_ID,
          to_email: import.meta.env.VITE_EMAIL_ID,
          subject: `Portfolio Contact from ${data.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-8 lg:mt-2 lg:min-h-[100vh] flex items-center justify-center flex-col text-black/75 mb-4 dark:text-white/65 px-5 lg:px-20">
      <Heading Icon={PiMailboxFill} title={"Contact"} />

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl lg:text-4xl font-black mb-4">
          Get in <span className="glow-text">Touch</span>
        </h1>
        <p className="text-xs lg:text-sm font-medium">
          Feel free to reach out through the form or contact links below.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-1 gap-2 mt-10 lg:w-full w-auto place-items-center">
        <motion.div
          className="rounded-xl lg:p-5 p-4 lg:w-[40%] w-full shadow-[0_4px_8px_rgba(0,_0,_0,_0.4)]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-black mb-4">Send a Message</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_WEB3FORM_API_ID}
            />

            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 text-sm font-medium dark:focus:text-black/65 text-black/65 dark:bg-white/75 bg-white/30 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <p className="text-red-500 font-medium text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2 text-sm font-medium dark:focus:text-black/65 text-black/65 dark:bg-white/75 bg-white/30 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 font-medium text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Write your message here..."
                {...register("message", { required: "Message is required" })}
                rows="4"
                className="w-full p-3 text-sm font-medium dark:focus:text-black/65 text-black/65 dark:bg-white/75 bg-white/30 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: submitting ? 1 : 0.98 }}
              whileTap={{ scale: 0.96 }}
              className="py-2.5 px-4 w-full skill-bg hover:bg-zinc-600 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
            >
              {submitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-500 font-medium text-sm"
              >
                ✅ Message sent! I'll get back to you soon.
              </motion.p>
            )}

            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs opacity-50 font-medium">or reach out directly</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="flex justify-center gap-3 flex-wrap">

              <a
                href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg hover:border-green-500/40 transition-colors duration-200"
              >
                <FaWhatsapp size={18} className="text-green-500" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>

              <a
                href={`mailto:${import.meta.env.VITE_EMAIL_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg hover:border-red-500/40 transition-colors duration-200"
              >
                <SiGmail size={18} className="text-red-500" />
                <span className="text-xs font-semibold">Gmail</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sandeep-gupta-254099233/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg hover:border-blue-500/40 transition-colors duration-200"
              >
                <FaLinkedin size={18} className="text-blue-500" />
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>

            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;