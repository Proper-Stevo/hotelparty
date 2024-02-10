export default function HotelContactUs() {
  return (
    <>
      <h2 className="mt-12 mb-10 text-3xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Contact Info
      </h2>
      <div class="container mx-auto mb-12 px-4">
        <div class="flex justify-center	 flex-wrap -mx-2">
          <div class="flex items-center justify-center w-full sm:w-1/3 px-2 mb-4">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
              className="mr-3"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            <p>John Mail</p>
          </div>
          <div class="flex items-center justify-center w-full sm:w-1/3 px-2 mb-4">
            <svg
              viewBox="0 0 900 1000"
              fill="currentColor"
              height="2em"
              width="2em"
              className="mr-3"
            >
              <path d="M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200" />
            </svg>
            <p>john@hotel.com</p>
          </div>
          <div class="flex items-center justify-center w-full sm:w-1/3 px-2 mb-4">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
              className="mr-3"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <p>800-800-8000</p>
          </div>
        </div>
      </div>
    </>
  );
}
