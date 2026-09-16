export default function Admin() {
  return (
    <div className="w-full h-screen bg-[#F6F4F1] p-4">
      <div className="flex">
        <h2>Admin Dashboard</h2>
        <button>Add Movie</button>
      </div>
      <p>Studio Overview</p>
      <div className="flex">
        <div>
          <p>Active listings</p>
          <p>2</p>
        </div>
        <div>
          <p>Showtimes today</p>
          <p>5</p>
        </div>
        <div>
          <p>Bookings</p>
          <p>248</p>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            <p>Movie listings</p>
            <p>Manage what movies are available for booking</p>
          </div>
          <p>S</p>
        </div>
        <div className="flex">
          <div>
            <p>The Last Horizon</p>
            <p>Sci-Fi - Adventure</p>
          </div>
          <p>Now showing</p>
        </div>
        <div className="flex">
          <div>
            <p>Neon Streets</p>
            <p>Drama - Thriller</p>
          </div>
          <p>Tonight</p>
        </div>
      </div>
    </div>
  );
}
