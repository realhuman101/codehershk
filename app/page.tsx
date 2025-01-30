import Link from "next/link";
import Image from "next/image";
import WorkshopsSection from "./components/WorkshopsSection";

export default function Home() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48">
      <div className="flex flex-col-reverse pt-4 pb-10 lg:gap-8 gap-y-12 md:py-16 md:flex-row mb-10">
        <div className="flex flex-col space-y-6 lg:space-y-12">
          <h1 className="text-6xl font-bold leading-none md:leading-tight lg:text-7xl xl:text-8xl text-text-900">
            Code
            <b>
            <span className="text-transparent bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text">
              Hers
            </span>
            </b>
          </h1>
          <h2 className="text-3xl font-bold lg:text-4xl xl:text-5xl text-text-800">
            Empowering <i><b>her</b></i> future.
          </h2>
          <p></p>
          <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="#event-section"
              className="relative top-0 inline-flex items-center justify-center px-8 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transitiona-all bg-secondary-100 text-text-700"
            >
              Learn More
            </Link>
            <div className="relative inline-flex items-center justify-center ease-out group">
              <div className="absolute duration-1000 transitiona-all opacity-70 -inset-px bg-primary-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeecJLOzCaWIQ5ox6ofmv31NsMSm2gsM6k30e6_eY92oIJrbA/viewform"
                className="relative top-0 inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white duration-300 rounded-lg bg-primary-500 hover:-top-2 transitiona-all"
                target="_blank"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div
        id="event-section"
        className="flex flex-col bg-secondary-500/20 p-6 md:p-8 space-y-6 rounded-xl lg:py-12 lg:px-20"
      >
        <h2 className="block text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Event
        </h2>
        <div className="grow flex-col md:flex-row flex gap-6">
          <div className="md:w-1/2 flex-col space-y-6">
            <div >
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Time & Date
              </h5>
              <p className="text-text-600 text-lg">
                Saturday 15th March 2025 10:00am to 4:00pm
              </p>
            </div>
            <div> 
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Venue
              </h5>
              <p className="text-text-600 text-lg">
              Victoria Shanghai Academy, 19 Shum Wan Road
              Aberdeen, Hong Kong
              </p>
            </div>
            <div>
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Transit
              </h5>
              <p className="text-text-600 text-lg">
                MTR Wong Chuk Hang Station Exit B
              </p>
            </div>
            <div>
              <h5 className="block text-xl font-medium leading-6 tracking-wide text-text-900">
                Cost
              </h5>
              <p className="text-text-600 text-lg">Free!</p>
            </div>
          </div>
        <div className="grow md:w-1/2 lg:w-1/3 flex flex-col justify-center h-72 md:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.9566727193946!2d114.16393337356682!3d22.241722645019458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3406aaa0131d0785%3A0x379649d90714e1a7!2sVictoria%20Shanghai%20Academy!5e0!3m2!1sen!2shk!4v1738038640705!5m2!1sen!2shk" 
            className="w-full h-full md:h-2/3 lg:h-full rounded-xl" 
            loading="lazy">
          </iframe>
        </div>
        </div>
      </div>

      <WorkshopsSection />

      <SchoolCredits />

      <div className="w-full py-10 mx-auto space-y-8 text-center lg:py-16">
        <div className="flex flex-col space-y-4">
          <h2 className="block text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl">
            Interested?
          </h2>
          <h5 className="block text-2xl leading-6 tracking-wide text-text-800">
            Sign up for the 2025 event now!
          </h5>
        </div>
        <div className="inline-flex rounded-md shadow">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeecJLOzCaWIQ5ox6ofmv31NsMSm2gsM6k30e6_eY92oIJrbA/viewform"
            className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-medium leading-loose text-center text-white rounded-lg bg-primary-500 bg-gradient-to-r from-primary-500 to-accent-500"
            target="_blank"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}

function SchoolCredits() {
  const schoolLogos = [
  { src: "/school-logos/CIS on white.jpeg" },
  { src: "/school-logos/GSIS.png" },
  { src: "/school-logos/Harrow on white.jpg" },
  { src: "/school-logos/Kellett on white.jpg" },
  { src: "/school-logos/KGV ESF version.png" },
  { src: "/school-logos/STC on transparent.png" },
  { src: "/school-logos/SIS ESF version.webp" },
  { src: "/school-logos/VSA.jpeg" },
  { src: "/school-logos/WIS ESF version.png" },
  { src: "/school-logos/HKIS.png" },
  { src: "/school-logos/ISF.png" }
  ];
  const schoolLogoImages = schoolLogos.map((img) => {
    return (
      <div
        key={img.src}
        className="flex items-center justify-center w-full p-2 bg-white rounded-lg grow lg:h-full"
      >
        <Image
          src={img.src} alt={img.src}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-h-16"
        />
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center w-full py-10 space-y-12 md:py-16 h-full">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Partners
        </h1>
        <h5 className="block text-2xl leading-6 tracking-wide text-center text-text-800">
          Proudly organised by students from these schools
        </h5>
      </div>
      <div className="grid w-full grid-cols-2 gap-3 px-8 py-6 rounded-lg lg:gap-1 bg-secondary-500/10 lg:h-32 justify-items-center md:grid-cols-3 lg:flex lg:flex-row lg:space-x-3 lg:items-center lg:justify-center xl:justify-around">
        {schoolLogoImages}
      </div>
    </div>
  );
}
