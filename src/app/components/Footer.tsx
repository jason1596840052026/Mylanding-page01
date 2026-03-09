import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-20 px-4 overflow-hidden border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 pb-20 border-b border-white/10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6">
            Ready to Create
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with precision and excellence.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 rounded-full bg-white text-black font-semibold text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Let's Talk
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
              NEXORA
            </h3>
            <p className="text-white/60 mb-6">
              Crafting exceptional digital experiences that inspire and transform.
            </p>
            <div className="flex gap-4">
              {[
                { icon: 'ri:twitter-x-fill', label: 'Twitter' },
                { icon: 'ri:linkedin-fill', label: 'LinkedIn' },
                { icon: 'ri:instagram-fill', label: 'Instagram' },
                { icon: 'ri:dribbble-fill', label: 'Dribbble' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  <iconify-icon icon={social.icon} width="18" height="18" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Careers', 'Blog'].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="text-white/60 hover:text-white transition-colors inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Brand Design', 'UI/UX Design', 'Digital Strategy', 'Consulting'].map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="text-white/60 hover:text-white transition-colors inline-block"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="mailto:hello@nexora.com" className="hover:text-white transition-colors">
                  hello@nexora.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  123 Innovation Street
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-white/40">
            © 2026 NEXORA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <motion.a href="#" whileHover={{ opacity: 1 }} className="hover:text-white transition-colors">
              Privacy Policy
            </motion.a>
            <motion.a href="#" whileHover={{ opacity: 1 }} className="hover:text-white transition-colors">
              Terms of Service
            </motion.a>
            <motion.a href="#" whileHover={{ opacity: 1 }} className="hover:text-white transition-colors">
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
