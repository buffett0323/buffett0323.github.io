// import Extra from '../components/Experience/Extra';
import Research from '../components/Experience/Research';
import Skills from '../components/Experience/Skills';
import Work from '../components/Experience/Work';
// import Selected_Projects from '../components/Experience/Projects';
// import Research_Interest from '../components/Experience/Research_Interest';

function Experience() {
  return (
    <>
      <div className="mx-auto flex w-screen flex-col px-5 md:w-2xl lg:w-3xl xl:w-4xl">
        <h1 className="pb-5 pt-10 text-center text-4xl font-bold sm:text-5xl">My Experience</h1>
        <div className="text-container mx-auto max-w-lg border-t-2 border-gray-400 pt-2">
          <p className="pb-5 text-center text-xl leading-normal text-gray-600 dark:text-gray-300">
            Knowledge gives us the tools to dream, and experience gives us the courage to achieve those dreams.
          </p>
        </div>
        <div className="mx-auto mt-10 box-border flex w-full flex-col items-center space-y-16 px-5 max-sm:px-0">
            {/* <Research_Interest /> */}
            <Work />
            {/* <Selected_Projects /> */}
            <Research />
            <Skills />
        </div>
      </div>
    </>
  );
}

export default Experience;