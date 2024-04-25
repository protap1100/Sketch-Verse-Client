const AddPaint = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-3xl font-bold text-orange-400">Add Paint Or Drawing Here</h1>
            <div className="my-4">
                <form onClick={()=>{console.log('hello world')}} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Paint Or Art Name</span>
                            <input type="text" name="name" placeholder="Paint Or Art Name" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Sub Category Name</span>
                            <input type="email" name="category" placeholder="Sub Category Name" required className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"  />
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Short Description</span>
                            <input type="text" name="description" placeholder="Short Description" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Price</span>
                            <input type="email" name="price" placeholder="Price" required className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"  />
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Rating</span>
                            <input type="text" name="Rating" placeholder="Rating" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Customization</span>
                            <input type="email" name="Customization" placeholder="Customization" required className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"  />
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Processing Time</span>
                            <input type="text" name="process" placeholder="Processing Time" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Stock Status</span>
                            <input type="email" name="stockStatus" placeholder="Stock Status" required className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"  />
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">User Email</span>
                            <input type="text" name="email" placeholder="User Email" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">User Name</span>
                            <input type="email" name="username" placeholder="User Name" required className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"  />
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block  w-full px-2 lg:px-0 ">
                            <span className="mb-1">Image</span>
                            <input type="text" name="image" placeholder="Image" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                    </div>
                    <button type="submit" className="self-center px-8 w-full text-lg bg-[#23be0a] rounded-xl btn text-white  " >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddPaint;