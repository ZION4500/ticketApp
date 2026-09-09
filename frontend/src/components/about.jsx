export default function About() {
  return (
    <div className="bg-[#FFFDF5]">
      <div className=" border-b-[#DDDBD4] border-b px-7 py-20 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col  gap-2 pb-7">
          <p className="text-4xl">Small room</p>
          <p className="text-4xl text-[#F5C518] text">Big screen energy</p>
        </div>
        <p className="leading-8 text-lg text-gray-500 w-auto md:w-1/2">
          We believe a movie is better when the room feels like yours.
          Thoughtful programming, comfortable seats, and the best popcorn in
          town.
        </p>
      </div>
      <div className="px-7 py-8 text-sm leading-9 text-gray-500">
        <p>© 2026 Lumen Cinevo</p>
        <p>Open daily · 11am — 11pm</p>
      </div>
    </div>
  );
}
