import { Link } from "react-router-dom";


const BrandName = ({brand}) => {
    const {name, image} = brand
    return (
        <div>
            <Link to={`/product/:${name}`}>
            <div className="card  w-96 bg-base-100 mt-10 mb-10 shadow-2xl">
            <figure className="px-10 pt-10">
                <img  src={image} alt="Shoes" className="rounded-xl h-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                </div>
            
            </div>
            </Link>
        </div>
    );
};

export default BrandName;