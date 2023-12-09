interface Props {
  title: string;
  children: React.ReactNode;
}
const MovieSection = ({ title, children }: Props) => {
  return (
    <section className="border-2 border-black p-2 rounded-3xl bg-gray-200">
      <div className="p-2 my-2 rounded-2xl bg-gradient-to-t from-blue-400 to-blue-900">
        <h2 className="text-center text-2xl font-medium text-white">{title}</h2>
      </div>
      <div className="border border-black p-2 my-2 rounded-3xl bg-white">
        {children}
      </div>
    </section>
  );
};

export default MovieSection;
