export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <div className="flex items-center justify-center">
        <img className="w-[150px] h-[60px]" src="./Geld.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="loading loading-spinner loading-lg bg-blue-600"></span>
        <button type="button" disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          <p>Түр хүлээнэ үү...</p>
        </button>
      </div>
    </div>
  );
}
