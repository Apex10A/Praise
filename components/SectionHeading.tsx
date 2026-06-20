export default function SectionHeading({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:pointer-events-none lg:relative lg:top-auto lg:mx-auto lg:w-full lg:bg-transparent lg:px-0 lg:py-0 lg:opacity-0 lg:backdrop-blur-none">
      <h2
        id={id}
        className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only"
      >
        {title}
      </h2>
    </div>
  );
}
