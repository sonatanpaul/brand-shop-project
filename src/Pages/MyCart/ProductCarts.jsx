import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductCarts = ({product, deleteProduct,setDeleteProduct}) => {
     const {_id, name, brandName, categoryName,price,imageURL,description,rating} = product;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
                fetch(`http://localhost:5000/product/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                            Swal.fire(
                            'Deleted!',
                            'Your Product has been deleted.',
                            'success'
                        )
                        const remaining = deleteProduct.filter(pro => pro._id !== _id )
                        setDeleteProduct(remaining);
                    }
                })

            }
          })

    }



    return (
        <div>
            <div className="card w-96 bg-base-100 mt-10 mb-10 h-96 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={imageURL} alt="Shoes" className="rounded-xl h-44" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className=" flex justify-evaly -5">
                <div>
                <p> Brand : {brandName}</p>
                <p> Category : {categoryName}</p>
                </div>
                <div>
                <p>Price : {price}</p>
                 <p>Rating : {rating}</p>
                </div>
                </div>
                <div className="card-actions">
                <button className="btn btn-primary">Details</button>
               <Link to={`/updateProduct/${_id}`}>
               <button className="btn btn-primary">Update</button>
               </Link>
                <button
                onClick={() => handleDelete(_id)}
                 className="btn btn-primary">Delete</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductCarts;