import Publications from '../components/Experience/Publications';

function Publication() {
    return (
    <>
        <div className="mx-auto flex w-screen flex-col px-5 md:w-2xl lg:w-3xl xl:w-4xl">
            <div className="mx-auto mt-10 box-border flex w-full flex-col items-center space-y-16 px-5 max-sm:px-0">
                <Publications />
            </div>
        </div>
    </>
    );
}

export default Publication;
