export default function Admin() {
  return (
    <div className="w-full h-screen bg-[#F6F4F1] md:p-12 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-sm text-[#F5C518]">Admin Dashboard</h2>
          <p className="text-5xl mt-2 text-[#142018]">Studio overview</p>
        </div>
        <button className="bg-[#F5C518] text-white py-2.5 rounded-full px-5 font-semibold flex gap-3 items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          Add Movie
        </button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:w-full">
        <div className="bg-[#F5C518] text-white rounded-2xl p-5 ">
          <p className="text-[#626F67] text-sm font-semibold">
            Active listings
          </p>
          <p className="text-3xl">2</p>
        </div>
        <div className="bg-white text-black rounded-2xl p-5">
          <p className="text-[#626F67] text-sm font-semibold">
            Showtimes today
          </p>
          <p className="text-3xl">12</p>
        </div>
        <div className="bg-white text-black rounded-2xl p-5">
          <p className="text-[#626F67] text-sm font-semibold">Bookings</p>
          <p className="text-3xl">248</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl mt-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl">Movie listings</p>
            <p className="text-sm text-[#626F67] pt-2">
              Manage what movies are available for booking
            </p>
          </div>
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#626F67"
              class="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="flex justify-between border border-[#DDDDDD] p-4 rounded-xl">
            <div>
              <p className="font-semibold">The Last Horizon</p>
              <p className="text-sm text-[#626F67] pt-1">Sci-Fi - Adventure</p>
            </div>
            <p className="self-center text-xs rounded-full py-1.5 px-3 text-white bg-[#F5C518]">
              Now showing
            </p>
          </div>
          <div className="flex justify-between border border-[#DDDDDD] p-4 rounded-xl">
            <div>
              <p className="font-semibold">Neon Streets</p>
              <p className="text-sm text-[#626F67] pt-1">Drama - Thriller</p>
            </div>
            <p className="self-center text-xs rounded-full py-1.5 px-3 text-white bg-[#F5C518]">
              Tonight
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
