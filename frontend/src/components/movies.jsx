export default function Movies({ children }) {
  return (
    <div
      className="bg-[#111111] flex flex-col text-white mt-11 px-5 py-20 "
      id="movies"
    >
      <div className="flex flex-col text-start">
        <p className="text-[#F5C518] tracking-widest pb-2.5">
          ON THE BIG SCREEN
        </p>
        <p className="text-5xl">Now playing</p>
      </div>
      <div className="flex flex-col md:flex-row mt-16">{children}</div>
    </div>
  );
}
