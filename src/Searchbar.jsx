function Searchbar() {
    return (
        <form className="flex items-center w-full max-w-xl my-8 mx-12">   
            <div className="relative flex-grow">
                <label htmlFor="default-search" className="sr-only">Search</label>
                <div className="flex items-center">
                    <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-400 rounded-full" placeholder="Search resources" />
                    <button type="submit" className="absolute top-0 right-0 mt-0 mr-3 h-full p-2.5 text-sm font-medium text-gray-400 rounded-lg focus:outline-none hover:text-black">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <button data-modal-target="default-modal" default-modal-toggle="default-modal" className="text-black font-bold px-3 rounded-md py-3.5 ml-3 hover:bg-gray-200">+</button>
            


        </form>

        

    );
}

export default Searchbar;
