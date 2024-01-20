import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 mx-8">
            <h1 className="text-center text-sky-500 text-[46px] font-bold font-['Nunito']">
              Unleash Your Inner Traveller
            </h1>
            <p className="pb-8 text-center text-white text-opacity-80 text-2xl font-medium font-['Nunito']">
              Your passport to a world of extraordinary hotel experiences. Join
              us today and unlock a realm of comfort, luxury, and adventure.
            </p>

            <div className="flex flex-col  justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className=" px-28 py-2 text-xl font-medium text-center text-white bg-sky-500 rounded-[59.18px] "
              >
                Start Search
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="w-[636px] h-[709px] bg-sky-500 rounded-full">
            <Image
              src="/assets/homepage_hero_desktop.png"
              width="621"
              height="709"
              className="w-[621px] h-[709px] rounded-full"
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
          {/* <div className="w-[636px] h-[709px] bg-sky-500 rounded-full">
            <Image
              src="/assets/homepage_hero_desktop.png"
              width="621"
              height="709"
              className="w-[621px] h-[709px] rounded-full"
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
          <div className="w-[636px] h-[709px] bg-sky-500 rounded-full">
            <Image
              src="/assets/homepage_hero_desktop.png"
              width="621"
              height="709"
              className="w-[621px] h-[709px] rounded-full"
              alt="Hero Illustration"
              loading="eager"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
