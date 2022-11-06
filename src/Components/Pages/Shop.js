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
                <div className='category-subcategory-div'>
                <h3 className='category-subcategory-h3'>Flowers/Single flower</h3>
                </div>
               
                <Products/>
            </div>
        </div>
);
}

export default Shop;

