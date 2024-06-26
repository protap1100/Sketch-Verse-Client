import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvier";
import { useContext } from "react";
import { Navigate,useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

const AddPaint = () => {

    const {user} = useContext(AuthContext);
    const location = useLocation();

    // console.log(user,loading)
    // console.log(user) 
    // const {email,displayName} = user;
    // console.log(email,displayName)
    // if(loading){
    //     return <div className="flex justify-center items-center my-40">
    //        <span className="text-accent loading text-center loading-spinner loading-lg"></span>
    //     </div>
    //   }
    
    const handleAddPaint = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.Rating.value;
        const customization = form.Customization.value;
        const processTime = form.process.value;
        const stockStatus = form.stockStatus.value;
        const email = form.email.value;
        const username = form.username.value;
        const image = form.image.value;

        const paint = { name,category,description,price,rating,customization,processTime,stockStatus,email,username,image}
        // console.log(paint)
        
        fetch('https://server-site-navy.vercel.app/allPaint',{
            method: 'POST',
            headers : {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(paint)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Your Paint have added",
                    icon: "success"
                  });
                <Navigate state={location.pathname} to='/allPaint'></Navigate>
            }
        })
    }

    return (
        <div className="my-10">
            <h1 className="text-center text-3xl font-bold text-orange-400">Add Paint Or Drawing Here</h1>
            <Helmet>
                <title>Add Paint</title>
            </Helmet>
            <div className="my-4">
                <form onSubmit={handleAddPaint} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Paint Or Art Name</span>
                            <input type="text" name="name" placeholder="Paint Or Art Name" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Sub Category Name</span>
                            <select name="category" className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" required>
                                <option value="">Select Sub Category</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Short Description</span>
                            <input type="text" name="description" placeholder="Short Description" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Price</span>
                            <input type="text" name="price" placeholder="Price" required className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"  />
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Rating</span>
                            <input type="number" name="Rating" placeholder="Rating" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Customization</span>
                            <select name="Customization" className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" required>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Processing Time</span>
                            <input type="text" name="process" placeholder="Processing Time" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                        <label className="block w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">Stock Status</span>
                            <select name="stockStatus" className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" required>
                                <option value="">Select Stock Status</option>
                                <option value="available">Available</option>
                                <option value="notAvailable">Not Available</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">User email</span>
                            <input type="text" readOnly name="email" placeholder="User Email" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"  defaultValue={user?.email ? user.email : ""} />
                        </label>
                        <label className="block   w-full px-2 lg:px-0 lg:w-1/2">
                            <span className="mb-1">User Name</span>
                            <input type="text" name="username" placeholder="User Name" required className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" readOnly defaultValue={user.displayName}  />
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <label className="block  w-full px-2 lg:px-0 ">
                            <span className="mb-1">Image</span>
                            <input type="text" name="image" placeholder="Image" required className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100" />
                        </label>
                    </div>
                    <button type="submit" className="self-center px-8 w-full text-lg bg-[#23be0a] rounded-xl btn text-white" >Add Paint</button>
                </form>
            </div>
        </div>
    );
};

export default AddPaint;