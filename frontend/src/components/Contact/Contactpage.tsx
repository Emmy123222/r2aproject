import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure form.current is not null before using it
    if (!form.current) {
      alert("Form reference is not initialized.");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_9mgp9or", // Replace with your Service ID
        "template_nmnanfn", // Replace with your Template ID
        form.current,
        "S-yva2i_DOnH-p24Y" // Replace with your Public Key
      );

      console.log("Email sent successfully:", result.text);
      alert("Message sent successfully!");

      // Reset the form after submission
      form.current.reset();
    } catch (error: any) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-12">
        Contact Us
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-6 shadow-md rounded-lg space-y-4 max-w-2xl mx-auto"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
