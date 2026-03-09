import { motion } from 'motion/react';
import { Code, Palette, Zap, Layers, Globe, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Cutting-edge web applications built with modern frameworks and scalable architecture.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Compelling visual identities that resonate with your audience and stand out in the market.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast experiences optimized for speed, accessibility, and user engagement.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces crafted with precision, backed by research and user-centered design.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align technology with business goals for maximum impact.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    description: 'Visionary leadership that transforms ideas into award-winning digital experiences.',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function Services() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500" />
            <span className="text-sm tracking-[0.3em] text-white/60 uppercase">Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">
            What We Do
          </h2>
          <p className="text-xl text-white/70">
            Full-spectrum digital services designed to elevate your brand and drive measurable results.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-white/10"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl mb-6">Our Core Values</h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge technology and creative solutions.',
              },
              {
                number: '02',
                title: 'Precision',
                description: 'Meticulous attention to detail in every pixel, every line of code.',
              },
              {
                number: '03',
                title: 'Excellence',
                description: 'Unwavering commitment to delivering exceptional results that exceed expectations.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-b from-indigo-500/0 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl">
                  <div className="text-6xl font-bold text-white/10 mb-4">{value.number}</div>
                  <h4 className="text-2xl mb-4">{value.title}</h4>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer"
    >
      {/* Glow effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative h-full p-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Number */}
          <div className="absolute top-0 right-0 text-5xl font-bold text-white/5">
            {(index + 1).toString().padStart(2, '0')}
          </div>

          <h3 className="text-2xl mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 group-hover:bg-clip-text transition-all duration-300">
            {service.title}
          </h3>
          
          <p className="text-white/60 leading-relaxed">
            {service.description}
          </p>

          {/* Hover arrow */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            className="mt-6 flex items-center gap-2 text-sm text-white/80"
          >
            <span>Learn more</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="stroke-current"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M3 8h10m0 0l-3-3m3 3l-3 3" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-tl ${service.gradient} opacity-20 rounded-tl-full`} />
        </div>
      </div>
    </motion.div>
  );
}
