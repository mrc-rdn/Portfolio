import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section className="lg:w-6/12 w-full flex justify-center p-10">
      <div className="w-full max-w-2xl p-10 rounded-2xl shadow-2xl border border-gray-800">
        
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Have a project in mind? Let’s build something amazing.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-lime-600 hover:bg-lime-700 hover:scale-105 transition-all duration-300 py-3 rounded-lg text-white font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {success === true && (
            <p className="text-lime-700 text-center">
              Message sent successfully!
            </p>
          )}

          {success === false && (
            <p className="text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}

        </form>
      </div>
    </section>
  );
}
