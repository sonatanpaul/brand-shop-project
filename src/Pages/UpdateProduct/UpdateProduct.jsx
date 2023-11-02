import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const upDateProduct = useLoaderData()

    const {_id, name, brandName, categoryName,price,imageURL,description,rating} = upDateProduct;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const imageURL = form.imageURL.value;
        const description = form.description.value;
        const rating = form.rating.value;
        
        const upProduct = {name, brandName, categoryName,price,imageURL,description,rating}




        
        fetch(`http://localhost:5000/product/${_id}`,{
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(upProduct),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
            })
            //reset input felid
                event.target.reset();

            }
        });



    };




    return (
        <div>
            <form onSubmit={handleUpdateProduct} >
                    <div className="grid gap-6 mb-6  container mx-auto rounded-md  bg-slate-900 p-24">
                        
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text"  name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" defaultValue={name} required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                            <input type="text"  name="brandName" defaultValue={brandName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apple"  required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                            <input type="text"  name="categoryName" defaultValue={categoryName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category Name" required/>
                        </div>  
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number"  name="price" defaultValue={price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="25,000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                            <input type="url"  name="imageURL" defaultValue={imageURL} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                            <input type="text"  name="description" defaultValue={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required/>
                        </div>

                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                            <input type="number"  name="rating" defaultValue={rating} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5/5" required/>
                        </div>
                    
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Product</button>
                    </div>
                  
                   
                </form>
        </div>
    );
};

export default UpdateProduct;