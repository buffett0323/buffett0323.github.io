import Awards from '../components/About/Awards';
// import Contact from '../components/About/Contact';
// import Description from '../components/About/Description';
// import Education from '../components/About/Education';
import { title } from '../constants/about';

function About() {
  return (
    <>
      <div className="mx-auto flex w-screen flex-col px-5 md:w-2xl lg:w-3xl xl:w-4xl">
        <h1 className="w-full pb-5 pt-10 text-center text-4xl font-bold sm:text-5xl">About Me.</h1>
        <div className="text-container mx-auto max-w-md border-t-2 border-gray-400 pt-2">
          <p className="pb-5 text-center text-xl leading-normal text-gray-600 dark:text-gray-300">
            {title}
          </p>
        </div>
        <div className="mx-auto mt-10 box-border flex w-full flex-col items-center space-y-16 px-5 max-sm:px-0">
          {/* <Description /> */}
          {/* <Education /> */}
          <Awards />
          {/* <Contact /> */}
        </div>
      </div>
    </>
  );
}

export default About;