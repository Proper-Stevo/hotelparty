import Image from "next/image";
import Link from "next/link"

export default function Homepage() {
  return (
    <>
      <div className="container p-8 my-16 mx-auto xl:px-0 flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 mx-8">
            <h1 className="text-center pb-4 text-sky-500 text-[46px] font-bold font-['Nunito']">
              Unleash Your Inner Traveller
            </h1>
            <p className="pb-8 text-center text-white text-opacity-80 text-2xl font-medium font-['Nunito']">
              Your passport to a world of extraordinary hotel experiences. Join
              us today and unlock a realm of comfort, luxury, and adventure.
            </p>

            <div className="flex flex-col  justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/search"
                className=" px-28 py-2 text-xl font-medium text-center text-white bg-sky-500 rounded-[59.18px] "
              >
                Start Search
              </Link>
            </div>
            <div className="flex  my-3 justify-center  sm:items-center sm:flex-row">
              <p
                className="text-white text-center text-opacity-60 text-2xl font-medium font-['Roboto']"
              >
                Already have an account?
              </p>
              <Link
                href="/signin"
                className="text-xl font-medium text-center ml-2 text-sky-400"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="w-[636px] h-[621px] bg-sky-500 rounded-full">
            <Image
              src="/assets/homepage_hero_desktop.png"
              width="621"
              height="621"
              className="w-[621px] h-[621px]  rounded-full"
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  );
}
