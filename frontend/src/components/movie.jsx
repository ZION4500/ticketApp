import { useNavigate } from "react-router";

export default function Movie(props) {
  const navigate = useNavigate();

  return (
    <div className="text-white m-3">
      <div className="p-4">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={props.img}
            onClick={() => navigate(`/movie/${props.id}`)}
            className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110 "
          />
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <div className="">
          <h1 className="text-2xl">{props.name}</h1>
          <h1 className="text-[#8E8D89] font-medium ">{props.category}</h1>
        </div>
        <p className="text-sm">{props.rating}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-sm text-[#8E8D89] flex gap-2 items-center font-semibold">
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
          {props.time}
        </p>
        <button
          className="flex items-center gap-1 text-[#F5C516] font-bold text-sm cursor-pointer"
          onClick={() => navigate(`/movie/${props.id}`)}
        >
          Choose seats
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
