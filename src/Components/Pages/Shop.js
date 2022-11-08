import '../../App.css';
import Products from '../Product/Products';
import AllCategories from '../Filter/AllCategories';


function Shop() {
    return(
        <div className='App'>
            <div className='block'>
                <AllCategories/>
            </div>
            <div className='products-boxes-div'>
                <Products/>
            </div>
        </div>
);
}

export default Shop;

