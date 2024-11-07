export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-teal-600 mb-4">
        Let´s Settle This.
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Internet debates have raged for too long.
        <br />
        It´s time to settle the big questions so we can move on.
      </p>

      {/* Pronúncia GIF */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          How do you pronounce gif?
        </h2>
        <div className="bg-gray-200 rounded-full overflow-hidden w-full h-8 mb-4">
          <div
            className="bg-teal-500 h-full text-white text-sm font-medium text-center p-2"
            style={{ width: "84%" }}
          >
            Gif (84%)
          </div>
        </div>
        <p className="text-gray-500">
          THE INTERNET HAS DECIDED. It´s pronounced gif.
        </p>
        <p className="text-gray-400 text-sm mt-2">9,218,606 votes</p>
      </div>

      {/* Pergunta sobre o vestido */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Is the dress blue and black or white and gold?
        </h2>
        <div className="flex justify-between">
          <button className="w-1/2 bg-teal-500 text-white font-medium py-2 px-4 rounded-l-lg hover:bg-teal-600">
            Blue & Black
          </button>
          <button className="w-1/2 bg-gray-200 text-gray-600 font-medium py-2 px-4 rounded-r-lg hover:bg-gray-300">
            White & Gold
          </button>
        </div>
      </div>
    </div>
  );
}
