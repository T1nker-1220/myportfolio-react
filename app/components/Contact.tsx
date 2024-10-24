'use client';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Get in Touch</h2>
        <form className="flex flex-col space-y-4">
          <motion.input 
            type="text" 
            placeholder="Name" 
            className="w-full h-12 pl-4 pr-4 text-lg font-bold rounded-lg"
            whileFocus={{ scale: 1.1 }}
          />
          <motion.input 
            type="email" 
            placeholder="Email" 
            className="w-full h-12 pl-4 pr-4 text-lg font-bold rounded-lg"
            whileFocus={{ scale: 1.1 }}
          />
          <motion.textarea 
            placeholder="Message" 
            className="w-full h-24 pl-4 pr-4 text-lg font-bold rounded-lg"
            whileFocus={{ scale: 1.1 }}
          />
          <motion.button 
            type="submit" 
            className="w-full h-12 bg-purple-500 hover:bg-purple-700 text-lg font-bold rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </form>
        <div className="flex justify-center space-x-4 mt-8">
          <motion.a 
            href="tel:+1234567890" 
            className="text-lg font-bold hover:text-purple-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 01.502-.79l1.498-4.493a1 1 0 01-.948-.684H9.5a2 2 0 01-2 2zM7 9a1 1 0 011-1h.01a1 1 0 011 1v.01zM7 10a1 1 0 011-1h.01a1 1 0 011 1v.01zM10 9a1 1 0 011-1h.01a1 1 0  011 1v.01zM10 10a1 1 0 011-1h.01a1 1 0 011 1v.01z" />
            </svg>
            +1234567890
          </motion.a>
          <motion.a 
            href="mailto:john@example.com" 
            className="text-lg font-bold hover:text-purple-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.5a2.5 2.5 0 01.5.5v.5h.5a1 1 0 01.5.5v.5h.5a2.5 2.5 0 01-.5.5h-.5a1 1 0 01-.5-.5v-.5h-.5a2.5 2.5 0 01-.5-.5v-.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3v-.5a2.5 2.5 0 00-1.5-.5h-.5a1 1 0 00-1.5-.5v-.5a2.5 2.5 0 00-1.5-.5h-.5a1 1 0 00-1.5.5v.5a2.5 2.5 0 001.5.5h.5a1 1 0 001.5.5v.5z" />
            </svg>
            john@example.com
          </motion.a>
          <motion.a 
            href="https://www.facebook.com/johnmarquez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-bold hover:text-purple-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v-4h2v4h3v-4h2v-1A5 5 0 0018 2z" />
            </svg>
            Facebook
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/johnmarquez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-bold hover:text-purple-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 0112.5 8 4 4 0 019 11.37zM8 11a3 3 0 103-3 3 3 0 00-3 3zm3.5 2.5M18 10a8 8 0 01-4 4.92M12 19.35 21.65 12M16.5 14.2 9.9 21.7" />
            </svg>
            Instagram
          </motion.a>
          <motion.a 
            href="https://github.com/johnmarquez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-bold hover:text-purple-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6 .27.65 4.07 1S3 3.5 3 6.5c0 2.5 1.07 4.61 2.83 6.45 1.75 1.84 3.73 3.37 5.91 4.27 1.67.69 3.46 1.02 5.02 1.02 1.76 0 3.48-.69 4.84-1.98.42-.74.65-1.73.65-2.73 0-1.49-.39-2.78-1.07-3.94-.67-.67-1.49-1.07-2.45-1.07-.9 0-1.76.2-2.46.57A13.38 13.38 0 0016 2.48 13.38 13.38 0 0013 3.5c0 .83.05 1.74.15 2.59a4.06 4.06 0 00.44 1.05A2.37 2.37 0 0012 7.95l-1.65 1.65a2.37 2.37 0 00-.6 1.45 2.37 2.37 0 001.7 1.02 2.37 2.37 0 001.45-.6L12 6.45l1.65 1.65c.2.2.6.3 1 .3.4 0 .8-.1 1-.3a2.37 2.37 0 000-1.45 2.37 2.37 0 00-1.7-1.02 2.37 2.37 0 00-1.45.6z" />
            </svg>
            GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};