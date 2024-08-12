const Section = ({ children }) => {
  return (
    <section className={`sm:w-[75%] w-[96%] mx-auto overflow-hidden`}>
      {children}
    </section>
  );
};

export default Section;
