import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-950">
      <div className="max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-[#33cccc] mb-4 text-center"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-gray-300 text-center max-w-xl mb-12"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          veritatis in vero maiores veniam, voluptatibus illum voluptas
          aspernatur earum modi!
        </motion.p>
        <div className="grid md:grid-flow-col gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="bg-[#c7e9ec] shadow-xl shadow-[#33cccc] rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]"
          >
            <form className="flex flex-col space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-3 block w-full text-white border-2 border-[#33cccc] bg-gray-900 rounded-md shadow-sm sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 block w-full text-white border-2 border-[#33cccc] bg-gray-900 rounded-md shadow-sm sm:text-sm"
                  placeholder="John.doe@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  className="mt-1 p-3 block w-full text-white border-2 border-[#33cccc] bg-gray-900 rounded-md shadow-sm sm:text-sm"
                  placeholder="Write your message here..."
                />
              </div>
              <button className="bg-[#33cccc] text-white py-2 px-4 rounded-md shadow-md hover:bg-black">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="bg-[#c7e9ec] shadow-xl shadow-[#33cccc] rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
              <div className="text-gray-900 flex gap-2 ">
                <MapPin fill="#33cccc" className="text-gray-900" />
                <p>
                  365 Business Avenue, <br /> Qo'shtepa Qishlog'i, G'uzor tumani
                </p>
              </div>
              <div className="text-gray-950 flex gap-2 items-center mt-4">
                <Phone fill="#33cccc" className="text-gray-900" />
                <p className="text-gray-950 ">phone: (93) 755-04-12</p>
              </div>
              <div className="text-gray-950 flex gap-2 items-center mt-4">
                <Mail fill="#33cccc" className="text-gray-900" />
                <p className="text-gray-950">
                  Email:asilbekxoliyorov441@gmail.com
                </p>
              </div>
            </div>
            <div>
              <div className="w-full h-64 bg-gray-300 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.6861262614307!2d66.24925961032453!3d38.70243707164853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4b8ca6604f38fd%3A0x90b61b3dfdd5ca4!2sGuzar%20District%2C%20Qashqadaryo%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1735485185893!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
