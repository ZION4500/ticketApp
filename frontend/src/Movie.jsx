import { useParams } from "react-router";
import { useState, useRef } from "react";

async function fetchMovie(id) {
  let response = await fetch(id);
  let data = await response.json();
  return data;
}

export default function Movie() {
  const ROW_LETTERS = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
  ];
  const { id } = useParams();
  fetchMovie(id);
  const [seats, setSeats] = useState(0);
  const warningRef = useRef(null);
  const formRef = useRef(null);
  const detailsRef = useRef(null);
  return (
    <div className="bg-[#FFFDF5]  min-h-screen">
      <header className=" border border-[#DDDBD4] w-fu">
        <nav className="flex m-4 justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-1.5 text-sm font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            Back to movies
          </a>
          <p className="text-2xl">
            Cin<span className="text-[#F5C518]">evo</span>
          </p>
          <p className="text-sm text-gray-500">Demo checkout</p>
        </nav>
      </header>
      <div className="m-6 flex lg:flex-row lg:justify-around flex-col lg:w-full">
        <div>
          <div className="flex mt-10 mb-8 gap-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=85"
              alt=""
              className="w-32 h-32 rounded-xl object-cover"
            />
            <div className="flex flex-col gap-1 mx-2.5">
              <p className="text-[#F5C518] font-semibold text-sm tracking-widest">
                RESERVE YOUR SEATS
              </p>
              <p className="text-4xl ">Movie title</p>
              <div className="flex gap-3 text-sm text-gray-500">
                <p>Category</p>
                <p>Rating</p>
                <p>time</p>
              </div>
            </div>
          </div>
          <p className="text-lg font-[650] tracking-wide my-3">
            Choose a showtime
          </p>
          <button className="bg-[#F5C518] px-3.5 py-2.5 rounded-lg border border-yellow-600 flex items-start flex-col gap-1.5 mb-12">
            <p className="font-semibold">Sat, Sep 12</p>
            <p className="flex items-center gap-1 text-[#483C13] font-normal text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              8:30 PM
            </p>
          </button>
          <div className="bg-white border border-[#DDDBD4] rounded-2xl p-6 justify-between items-center lg:w-140">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-semibold">Pick your seats</p>
                <p className="text-sm text-gray-500">
                  Selected seats are highlighted in yellow.
                </p>
              </div>
              <p className="bg-[#F2EDDA] text-[#483C13] font-semibold py-1 px-3 rounded-2xl">
                0 selected
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-lg">
              <p className="text-center  mt-8 mb-11 font-bold tracking-widest text-[#F5C518] w-full bg-[#FEF9E7] py-2 rounded-4xl border border-[#DDDBD4]">
                SCREEN
              </p>
              <div className="grid grid-cols-8 gap-2 ">
                {ROW_LETTERS.map((letter) => (
                  <button
                    onClick={(e) => {
                      if (e.target.classList.contains("bg-[#F5C518]")) {
                        setSeats((prev) => prev - 1);
                      } else {
                        setSeats((prev) => prev + 1);
                      }
                      e.target.classList.toggle("bg-[#F5C518]");
                    }}
                    key={letter}
                    className="aspect-square rounded-lg border text-xs font-semibold bg-[#F2EDDA] text-[#483C13] flex items-center justify-center max-w-14 border-[#D2CEBD] hover:opacity-75 transition-all duration-300"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#111111] text-white p-5 rounded-4xl mt-8 flex flex-col gap-6 h-fit lg:w-96 sticky top-10">
          <p className="flex text-xl font-bold items-center gap-2.5 m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-ticket text-primary"
              aria-hidden="true"
              color="#F5C518"
            >
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
              <path d="M13 5v2"></path>
              <path d="M13 17v2"></path>
              <path d="M13 11v2"></path>
            </svg>
            Your booking
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Movie title</p>
              <p className="text-sm text-[#899D96]">Sat, Sep 12, 8:30 PM</p>
            </div>
            <p className="font-semibold">₦{seats * 10000}</p>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-[#899D96]">
            <p>{seats} x Number of Seats</p>
            <p>₦{seats * 10000}.00</p>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Your booking logic goes here (runs ONLY if inputs are valid)
                console.log("Form is valid and submitted!");
              }}
              className="flex flex-col gap-1 hidden"
              ref={formRef}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1"
              >
                Name
              </label>
              <input
                type="text"
                required
                id="name"
                className="bg-white text-black border border-[#D2CEBD] focus:outline-none focus:ring-2 focus:ring-[#F5C518] p-1 rounded-lg w-full mb-2"
              />
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email
              </label>
              <input
                type="email"
                required
                id="email"
                className="bg-white text-black border border-[#D2CEBD] focus:outline-none focus:ring-2 focus:ring-[#F5C518] p-1 rounded-lg w-full"
              />

              <button
                type="submit"
                className="bg-[#F5C518] text-[#111111] font-bold py-3 px-4 rounded-xl hover:bg-[#E5B710] transition-colors duration-300 my-2"
              >
                Confirm booking
              </button>

              <button
                onClick={() => {
                  formRef.current.classList.add("hidden");
                  detailsRef.current.classList.remove("hidden");
                }}
                type="button"
                className="text-sm my-2 text-[#899A96] font-semibold"
              >
                Back to seats
              </button>
            </form>
          </div>
          <p
            ref={warningRef}
            className="bg-[#3F3513] hidden text-[#D2BA18] p-3 rounded-lg text-sm font-semibold"
          >
            Select at least one seat to continue.
          </p>
          <button
            onClick={() => {
              if (seats === 0) {
                warningRef.current.classList.remove("hidden");
              } else {
                warningRef.current.classList.add("hidden");
                formRef.current.classList.remove("hidden");
                detailsRef.current.classList.add("hidden");
              }
            }}
            className="bg-[#F5C518] text-[#111111] font-bold py-3 px-4 rounded-xl hover:bg-[#E5B710] transition-colors duration-300"
            ref={detailsRef}
          >
            Continue to details
          </button>
        </div>
      </div>
    </div>
  );
}
