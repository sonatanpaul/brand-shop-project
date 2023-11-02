import { useLoaderData } from "react-router-dom";
import ProductCarts from "./ProductCarts";
import { useState } from "react";

const MyCart = () => {

    const products = useLoaderData();
    const [deleteProduct, setDeleteProduct] = useState(products)

    return (
        <div>
          <h1> total product : {products.length}</h1>

          <div className=" container mx-auto grid md:grid-cols-3 gap-5">
          {
            products.map(product => <ProductCarts 
                key={product._id}
                 product={product} 
                 deleteProduct={deleteProduct} 
                 setDeleteProduct={setDeleteProduct}></ProductCarts>)
          }
          </div>
            
        </div>
    );
};

export default MyCart;