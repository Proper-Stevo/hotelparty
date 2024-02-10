import Image from "next/image";

export default function Hotel2ColumnRight(props) {
  return (
    <>
      <div className="container p-8 my-16 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
          <div>
            <Image
              src="/assets/homepage_hero_desktop.png"
              alt="Benefits"
              className="w-full h-auto object-cover" // Use `object-cover` or `object-contain` as needed
              layout="responsive" // Only if using Next.js Image and you want it to be responsive
              width={521} // Original width
              height={521} // Original height to maintain aspect ratio
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full lg:w-1/2">
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Experience
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Nestled in the lush tropical paradise of Jimbaran, Bali, AYANA
                Resort and Spa offers an enchanting escape for travelers seeking
                luxury, relaxation, and breathtaking ocean views.
              </p>
              <a
                className="rounded w-1/3 border-2 border-neutral-50 text-center px-[12px] py-[14px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
