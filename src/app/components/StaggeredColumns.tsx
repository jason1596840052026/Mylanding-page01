import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ColumnItem {
  image: string;
  title: string;
  category: string;
  index: number;
}

const columns: ColumnItem[][] = [
  [
    {
      image: 'https://images.unsplash.com/photo-1573384293689-0327bf65bd86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYXJjaGl0ZWN0dXJlJTIwbmlnaHR8ZW58MXx8fHwxNzcyOTIzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Architectural Vision',
      category: 'Design',
      index: 1,
    },
    {
      image: 'https://images.unsplash.com/photo-1595411425732-e69c1abe2763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm5zfGVufDF8fHx8MTc3MzAyMzg3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Geometric Harmony',
      category: 'Abstract',
      index: 2,
    },
  ],
  [
    {
      image: 'https://images.unsplash.com/photo-1753557684236-97be1c5a58b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczMDIzODcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tech Innovation',
      category: 'Technology',
      index: 1,
    },
    {
      image: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzAxNzg3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Team Synergy',
      category: 'Collaboration',
      index: 2,
    },
  ],
  [
    {
      image: 'https://images.unsplash.com/photo-1746461147623-75ddedfb6ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbHV4dXJ5JTIwZGVzaWdufGVufDF8fHx8MTc3MjkxMTQyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Minimal',
      category: 'Lifestyle',
      index: 1,
    },
    {
      image: 'https://images.unsplash.com/photo-1770153792570-fd188336199a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGxpZ2h0fGVufDF8fHx8MTc3MzAyMzg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Innovation Light',
      category: 'Future',
      index: 2,
    },
  ],
  [
    {
      image: 'https://images.unsplash.com/photo-1762983870490-63e5ba07105b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzczMDIzODcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Workspace',
      category: 'Studio',
      index: 1,
    },
    {
      image: 'https://images.unsplash.com/photo-1728281144091-b743062a9bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzAyMzg3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Creative Space',
      category: 'Design',
      index: 2,
    },
  ],
];

export function StaggeredColumns() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500" />
            <span className="text-sm tracking-[0.3em] text-white/60 uppercase">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-white/70">
            A curated collection of our most impactful projects, showcasing innovation and precision across digital experiences.
          </p>
        </motion.div>
      </div>

      <div className="flex gap-4 md:gap-6 px-4">
        {columns.map((column, columnIndex) => {
          const yOffset = useTransform(
            scrollYProgress,
            [0, 1],
            [columnIndex * 100, -(100 + columnIndex * 150)]
          );

          return (
            <motion.div
              key={columnIndex}
              style={{ y: yOffset }}
              className="flex-1 space-y-4 md:space-y-6"
            >
              {column.map((item, itemIndex) => (
                <ColumnCard key={itemIndex} item={item} />
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ColumnCard({ item }: { item: ColumnItem }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ duration: 0.4 }}
      className="relative group cursor-pointer"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-b from-indigo-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10">
        {/* Index number */}
        <div className="absolute top-6 left-6 z-10">
          <span className="text-6xl md:text-8xl font-bold text-white/10 leading-none">
            {item.index.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs tracking-[0.2em] text-indigo-400 uppercase mb-2 block">
                {item.category}
              </span>
              <h3 className="text-2xl md:text-3xl mb-4">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-sm">View Project</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="stroke-current"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M5 10h10m0 0l-4-4m4 4l-4 4" strokeWidth="2" strokeLinecap="round" />
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Motion blur effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );
}