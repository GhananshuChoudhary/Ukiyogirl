const fs = require('fs');
let content = fs.readFileSync('src/components/AboutBook.tsx', 'utf8');

const oldTimelineMap = `{TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={\`flex flex-col md:flex-row items-start \${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  } relative\`}
                >
                  
                  {/* Anchor timeline circle indicator */}
                  <div className="absolute left-[11px] md:left-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-golden-accent border-[2.5px] border-beige-light shadow-md transform md:-translate-x-1/2 z-10" />

                  {/* Left spacing for layout symmetry on desktops */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 md:pl-12 pl-12 text-left">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-kashmir-light text-kashmir-lake font-mono text-[9px] uppercase tracking-wider font-semibold mb-2">
                      {t(event.stage, event.stageMr)}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-kashmir-deep">
                      {t(event.title, event.titleMr)}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-golden-accent tracking-wide mt-1">
                      {t(event.description, event.descriptionMr)}
                    </p>
                    <p className="font-sans text-xs text-kashmir-deep/70 font-light leading-relaxed mt-2.5">
                      {t(event.detail, event.detailMr)}
                    </p>
                  </div>

                  {/* Empty grid element on the opposite side of the timeline */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}`;

const newTimelineMap = `{TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="flex flex-col md:flex-row items-start relative w-full"
                >
                  
                  {/* Center Line for desktop */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-[-48px] w-px bg-kashmir-mist/30 transform -translate-x-1/2" />

                  {/* Anchor timeline circle indicator */}
                  <div className="absolute left-[11px] md:left-1/2 top-1.5 md:top-2 w-3.5 h-3.5 rounded-full bg-golden-accent border-[2.5px] border-beige-light shadow-md transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={\`w-full md:w-1/2 pl-12 md:pl-0 \${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} text-left\`} >
                    <span className="inline-block px-2.5 py-0.5 rounded bg-kashmir-light text-kashmir-lake font-mono text-[9px] uppercase tracking-wider font-semibold mb-2">
                      {t(event.stage, event.stageMr)}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-kashmir-deep">
                      {t(event.title, event.titleMr)}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-golden-accent tracking-wide mt-1">
                      {t(event.description, event.descriptionMr)}
                    </p>
                    <p className="font-sans text-xs text-kashmir-deep/70 font-light leading-relaxed mt-2.5 inline-block text-left">
                      {t(event.detail, event.detailMr)}
                    </p>
                  </div>
                </motion.div>
              );
            })}`;

if (content.includes(oldTimelineMap)) {
    content = content.replace(oldTimelineMap, newTimelineMap);
    fs.writeFileSync('src/components/AboutBook.tsx', content);
    console.log("Replaced timeline map");
} else {
    console.log("Could not find oldTimelineMap in AboutBook.tsx");
}

