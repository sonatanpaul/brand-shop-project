import { useLoaderData } from "react-router-dom";
import BrandName from "./BrandName";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <h1>this is tha brand : {brands.length}</h1>
            <div className=" container mx-auto grid md:grid-cols-3 gap-5">
            {
                brands.map(brand => <BrandName key={brands._id} brand={brand} ></BrandName>)
            }
            </div>
        </div>
    );
};

export default Home;