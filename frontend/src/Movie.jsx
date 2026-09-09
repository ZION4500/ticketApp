import { useParams } from "react-router";

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
  return (
    <div className="bg-[#FFFDF5]">
      <header className=" border border-[#DDDBD4]">
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
      <div className="m-6">
        <div className="flex mt-10 mb-8 gap-3 items-center">
          <img src="" alt="" />
          <div>
            <p className="text-[#F5C518] font-semibold text-sm tracking-widest">
              RESERVE YOUR SEATS
            </p>
            <p></p>
            <div>
              <p></p>
              <p></p>
              <p></p>
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
        <div className="bg-white border border-[#DDDBD4] rounded-2xl p-6 justify-between items-center">
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
          <p className="text-center mx-4 mt-8 mb-11 font-bold tracking-widest text-[#F5C518] w-full bg-[#FEF9E7] py-2 rounded-4xl border border-[#DDDBD4]">
            SCREEN
          </p>
          <div className="grid grid-cols-8 gap-2">
            {ROW_LETTERS.map((letter) => (
              <button
                key={letter}
                className="aspect-square rounded-lg border text-xs font-semibold transition border-border bg-muted text-muted-foreground hover:border-primary"
              >
                <p>{letter}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
