export default function ImageCard(props: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure
      className={`
                  group bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative                 
                  col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2
                `}
      style={{
        borderWidth: "0.5px",
      }}
    >
      <section className="relative overflow-hidden h-full">
        <img
          src={props.src}
          alt={props.alt}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
        />
        <section className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></section>
        <figcaption
          className={`
                        absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                        text-white transform translate-y-full group-hover:translate-y-0 
                        transition-transform duration-300 p-3 sm:p-3 md:p-4
                      `}
        >
          <h3 className="mb-1">{props.caption}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{props.alt}</p>
        </figcaption>
      </section>
    </figure>
  );
}
