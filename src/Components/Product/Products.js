import { productsdata } from "../../data/productsdata";
import Product from "./Product";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/productsSlice";

const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
            <div className="products-div">
            {productsdata
            .filter(product => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === product.subcategory;
              
            }
            )
            .map((product, id) => <Product product={product} key={id}/>)}
            </div>
    )
}

export default Products;

