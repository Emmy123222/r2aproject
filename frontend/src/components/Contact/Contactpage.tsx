import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import image from "@/assets/images/facebook_408745.png";
import image_2 from "@/assets/images/youtube_2965363.png";




const Contactpage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9mgp9or', // Replace with your EmailJS Service ID
        'template_nmnanfn', // Replace with your EmailJS Template ID
        form.current,
        'S-yva2i_DOnH-p24Y' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-12">Contact Us</h1>
      
      {/* Contact Form Section */}
      <section className="mb-16">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-6 shadow-md rounded-lg space-y-4 max-w-2xl mx-auto"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
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
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
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
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
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
      </section>


       {/* Contact Information Section */}
       <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Information</h2>
        <div className="bg-white p-6 shadow-md rounded-lg space-y-4 text-center">
          {/* Mailing Address */}
         
          {/* Phone Number */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Numbers</h3>
            <p className="text-gray-700">+234-703-704-3343</p>
            <p className="text-gray-700">+234-812-360-5848</p>

          </div>

          {/* Email Address */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Address</h3>
            <p className="text-gray-700">toallreachout@gmail.com</p>
          </div>
        </div>
      </section>


         {/* Social Media Section */}
       <section className="mb-16">
         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Follow Us on Social Media</h2>
         <div className="flex space-x-6 justify-center">
           <a
             href="https://www.facebook.com/profile.php?id=100064950391474"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
              <img src={image} alt="Facebook Profile" className="hover:opacity-80 w-12 h-12" />

          </a>
        
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://m.youtube.com/@reachout2all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
         <img src={image_2} alt="Facebook Profile" className="hover:opacity-80 w-12 h-12"/>

          </a>
        </div>
      </section>
    </div>
  );
};

export default Contactpage;

