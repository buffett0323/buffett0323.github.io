// import Extra from '../components/Experience/Extra';
// import Research from '../components/Experience/Research';
import Skills from '../components/Experience/Skills';
import Work from '../components/Experience/Work';

function Experience() {
  return (
    <>
      <div className="mx-auto flex w-screen flex-col px-5 md:w-2xl lg:w-3xl xl:w-4xl">
        <h1 className="pb-5 pt-10 text-center text-4xl font-bold sm:text-5xl">Experience.</h1>
        <div className="text-container mx-auto max-w-md border-t-2 border-gray-400 pt-2">
          <p className="pb-5 text-center text-xl leading-normal text-gray-600 dark:text-gray-300">
            The only source of knowledge is experience.
          </p>
        </div>
        <div className="mx-auto mt-10 box-border flex w-full flex-col items-center space-y-16 px-5 max-sm:px-0">
          <Work />
          {/* <Research />
          <Extra /> */}
          <Skills />
        </div>
      </div>
    </>
  );
}

export default Experience;