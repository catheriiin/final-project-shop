import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/productsSlice";

const Filter = ({subcategory}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
          <p onClick={() => {dispatch(filterCategory(subcategory))}} className={selectedCategory === subcategory ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{subcategory}</p>
        </div>
    )
}
export default Filter;