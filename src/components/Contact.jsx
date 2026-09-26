import { Suspense, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { contactInfo, socialLinks } from "../constants";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const earthRef = useRef();
  // only start downloading the 3D globe when the section is about to be seen
  const earthInView = useInView(earthRef, { once: true, margin: "200px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mohammed",
          from_email: form.email,
          to_email: contactInfo.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 border border-white/5 p-6 sm:p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <p className="mt-3 text-secondary text-[15px] leading-relaxed">
            Have a project in mind or an opportunity to discuss? Drop me a message and
            I&apos;ll get back to you as soon as possible.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="glass rounded-xl p-4 flex items-center gap-3 transition-colors hover:border-[#915EFF]/60"
            >
              <span className="w-10 h-10 shrink-0 rounded-lg bg-[#915EFF]/20 flex items-center justify-center text-[18px]" aria-hidden="true">
                ✉
              </span>
              <span className="min-w-0">
                <span className="block text-secondary text-[12px]">Email</span>
                <span className="block text-white text-[14px] font-medium truncate">
                  {contactInfo.email}
                </span>
              </span>
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="glass rounded-xl p-4 flex items-center gap-3 transition-colors hover:border-[#915EFF]/60"
            >
              <span className="w-10 h-10 shrink-0 rounded-lg bg-[#00cea8]/20 flex items-center justify-center text-[18px]" aria-hidden="true">
                ☎
              </span>
              <span className="min-w-0">
                <span className="block text-secondary text-[12px]">Phone</span>
                <span className="block text-white text-[14px] font-medium truncate">
                  {contactInfo.phone}
                </span>
              </span>
            </a>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="What's your good name?"
                className="input-field"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="What's your email address?"
                className="input-field"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message</span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="input-field resize-none"
              />
            </label>

            <button type="submit" disabled={loading} className="btn-primary w-full sm:w-fit">
              {loading ? "Sending..." : "Send Message"}
              {!loading && <span aria-hidden="true">→</span>}
            </button>
          </form>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="social-icon"
              >
                <img src={social.icon} alt="" className="w-[55%] h-[55%] object-contain" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={earthRef}
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          {earthInView && (
            <Suspense fallback={null}>
              <EarthCanvas />
            </Suspense>
          )}
        </motion.div>
      </div>
      <ToastContainer position="bottom-center" theme="dark" />
    </>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
