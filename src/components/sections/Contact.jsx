import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success/Error message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mldwylll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com", // Replace with user's github if known, or generic
      color: "hover:text-slate-200 hover:border-slate-200/50",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400 hover:border-blue-400/50",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/918709916110",
      color: "hover:text-green-400 hover:border-green-400/50",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.49-5.388c1.62.96 3.206 1.488 4.793 1.49 5.382 0 9.761-4.38 9.764-9.764.002-2.607-1.01-5.059-2.85-6.899-1.84-1.84-4.291-2.853-6.899-2.855-5.384 0-9.764 4.381-9.767 9.768-.001 1.707.456 3.376 1.325 4.887l-.99 3.619 3.708-.973zm11.386-6.702c-.312-.156-1.848-.912-2.128-1.014-.28-.103-.485-.156-.69.156-.204.311-.79.1-.994 1.246-.204.204-.408.229-.72.072-1.016-.45-2.016-1.116-2.73-1.815-.714-.7-.936-1.44-.993-1.802-.057-.361.353-.353.69-.69.204-.204.312-.408.408-.611.103-.204.052-.387-.026-.54-.078-.156-.69-1.662-.947-2.278-.248-.599-.501-.518-.69-.527-.179-.009-.387-.01-.595-.01s-.54.078-.823.388c-.282.311-1.08.105-1.08 2.56 0 2.455 1.787 4.829 2.036 5.16.25.33 3.52 5.372 8.528 7.528 1.192.514 2.122.82 2.849 1.05 1.198.38 2.29.327 3.15.198.96-.144 2.65-.678 3.025-1.302.375-.624.375-1.158.263-1.266-.112-.108-.42-.26-.732-.416z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:ayushsingh0455@gmail.com", // Replace with user's mail if known
      color: "hover:text-cyan-400 hover:border-cyan-400/50",
      svg: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-start md:items-center justify-center py-28 md:py-24 w-full relative"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Connect & Details */}
            <div className="md:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent inline-block">
                  Let's Connect
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                  Have an innovative project blueprint in mind or looking to hire a full-stack engineer intern? 
                  Drop a message or reach out via direct channels. I'm always open to discussing new opportunities.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                {/* Email Display */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Direct Email</h4>
                    <a href="mailto:ayushsingh0455@gmail.com" className="text-[var(--text-primary)] hover:text-blue-500 transition-colors font-medium">
                      ayushsingh0455@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Display */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.49-5.388c1.62.96 3.206 1.488 4.793 1.49 5.382 0 9.761-4.38 9.764-9.764.002-2.607-1.01-5.059-2.85-6.899-1.84-1.84-4.291-2.853-6.899-2.855-5.384 0-9.764 4.381-9.767 9.768-.001 1.707.456 3.376 1.325 4.887l-.99 3.619 3.708-.973zm11.386-6.702c-.312-.156-1.848-.912-2.128-1.014-.28-.103-.485-.156-.69.156-.204.311-.79.1-.994 1.246-.204.204-.408.229-.72.072-1.016-.45-2.016-1.116-2.73-1.815-.714-.7-.936-1.44-.993-1.802-.057-.361.353-.353.69-.69.204-.204.312-.408.408-.611.103-.204.052-.387-.026-.54-.078-.156-.69-1.662-.947-2.278-.248-.599-.501-.518-.69-.527-.179-.009-.387-.01-.595-.01s-.54.078-.823.388c-.282.311-1.08.105-1.08 2.56 0 2.455 1.787 4.829 2.036 5.16.25.33 3.52 5.372 8.528 7.528 1.192.514 2.122.82 2.849 1.05 1.198.38 2.29.327 3.15.198.96-.144 2.65-.678 3.025-1.302.375-.624.375-1.158.263-1.266-.112-.108-.42-.26-.732-.416z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">WhatsApp</h4>
                    <a href="https://wa.me/918709916110" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-green-500 transition-colors font-medium">
                      +91 87099 16110
                    </a>
                  </div>
                </div>

                {/* Location Display */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Based In</h4>
                    <p className="text-[var(--text-primary)] font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">Digital Channels</h4>
                <div className="flex space-x-3">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-primary)] transition-all duration-300 ${social.color}`}
                      title={social.name}
                    >
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form Card */}
            <div className="md:col-span-7 w-full">
              <div className="glass-panel p-8 rounded-2xl w-full">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[var(--text-primary)]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] transition duration-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[var(--text-primary)]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] transition duration-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="rahul.sharma@gmail.com"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-[var(--text-primary)]">
                      Message Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] transition duration-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Describe your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-xl font-medium transition duration-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>

                {status && (
                  <div
                    className={`mt-4 p-3 rounded-xl text-center text-sm font-semibold ${
                      status.includes("successfully")
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {status}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
    </section>
  );
};

