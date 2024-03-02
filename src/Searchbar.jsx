import React, { useState } from 'react';

function Searchbar() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (event) => {
        event.preventDefault();  // Prevent default form submission behavior
        console.log("openModal called");
        setModalOpen(true);
    };

    const closeModal = () => {
        console.log("closeModal called");
        setModalOpen(false);
    };

    return (
        <div>
            <form className="flex items-center w-full max-w-xl my-8 mx-12">
                <div className="relative flex-grow">
                    <label htmlFor="default-search" className="sr-only">Search</label>
                    <div className="flex items-center">
                        <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-400 rounded-full" placeholder="Search resources" />
                        <button type="submit" className="absolute top-0 right-0 mt-0 mr-3 h-7 p-2.5 text-sm font-medium text-gray-400 rounded-lg focus:outline-none hover:text-black">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <button onClick={openModal} className="text-black font-bold px-3 rounded-md py-3.5 ml-3 hover:bg-gray-200">+</button>


                {modalOpen && (
                <div id="default-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900git">
                                    Post Details
                                </h3>
                                <button onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <input type="search" id="default-search" className="block w-full p-3 ps-5 text-sm text-gray-900 border border-gray-400 rounded-lg" placeholder="Title:" />
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-12 ps-5 text-sm text-gray-900 border border-gray-400 rounded-lg"
                                    placeholder="Description:"
                                    style={{ paddingTop: '12px' }}
                                />
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                            </svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div> 


                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                                <button onClick={closeModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create</button>
                                <button onClick={() => setModalOpen(false)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Cancel</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
            </form>

            
        </div>
    );
}

export default Searchbar;
