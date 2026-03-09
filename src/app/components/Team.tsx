import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechVision',
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mjk0MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'NEXORA transformed our digital presence beyond our wildest expectations. Their attention to detail and innovative approach set them apart.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, InnovateLabs',
    image: 'https://images.unsplash.com/photo-1720887937897-75c40c656d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzMwMjM4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Working with this team was a game-changer. They delivered a product that not only looks stunning but performs flawlessly.',
    rating: 5,
  },
];

export function Team() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500" />
            <span className="text-sm tracking-[0.3em] text-white/60 uppercase">Testimonials</span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-pink-500 to-indigo-500" />
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">
            Trusted by Leaders
          </h2>
          <p className="text-xl text-white/70">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-20 border-t border-white/10"
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl mb-4">Trusted by Global Brands</h3>
            <p className="text-white/60">Collaborating with industry leaders worldwide</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60">
            {[
              { name: 'Google', icon: 'logos:google-icon' },
              { name: 'Microsoft', icon: 'logos:microsoft-icon' },
              { name: 'Apple', icon: 'logos:apple' },
              { name: 'Amazon', icon: 'logos:aws' },
              { name: 'Meta', icon: 'logos:meta-icon' },
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <iconify-icon icon={brand.icon} width="48" height="48" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative h-full p-8 md:p-10 bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl">
        {/* Quote icon */}
        <div className="absolute top-8 right-8 opacity-10">
          <Quote className="w-16 h-16" />
        </div>

        {/* Rating stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-400">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 relative z-10">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-lg">{testimonial.name}</div>
            <div className="text-sm text-white/60">{testimonial.role}</div>
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/20 to-pink-500/20 rounded-tl-full" />
        </div>
      </div>
    </motion.div>
  );
}
