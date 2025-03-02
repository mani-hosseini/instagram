function Creat() {

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="flex flex-col justify-center items-center shadow-2xl w-100 h-100 rounded-2xl">
                <h4 className="mb-25 border-b-1 w-full justify-center items-center flex p-3">Create new post</h4>
                <div className="flex flex-col justify-center items-center mb-30 gap-5">
                    <p className="text-xl">Title</p>
                    <p className="text-xl">Content</p>
                    <button className=" p-2 bg-blue-500 rounded-2xl text-amber-50 w-50">Select from computer</button>
                </div>
            </div>
        </div>
    );
}

export default Creat;
