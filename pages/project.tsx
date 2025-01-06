import Selected_Projects from '../components/Experience/Projects';
// import Research_Interest from '../components/Experience/Research_Interest';

function Project() {
    return (
    <>
        <div className="mx-auto flex w-screen flex-col px-5 md:w-2xl lg:w-3xl xl:w-4xl">
            <h1 className="pb-5 pt-10 text-center text-4xl font-bold sm:text-5xl">Selected Projects</h1>
            <div className="mx-auto mt-10 box-border flex w-full flex-col items-center space-y-16 px-5 max-sm:px-0">
                {/* <Research_Interest /> */}
                <Selected_Projects />
            </div>
        </div>
    </>
    );
}

export default Project;