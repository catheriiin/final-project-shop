import Filter from "./Filter";

function AllCategories() {
    return(
        <div className="categories-div">
                     <h4 className="all"> {['ALL'].map((subcategory, id) => <Filter subcategory={subcategory} key={id}/>)} </h4>
            <h4 className="category-deco">Flowers</h4>
            <div className="subcategory-margin">
            {['Single flower', 'Flowers mix'].map((subcategory, id) => <Filter subcategory={subcategory} key={id}/>)}
            </div>
            <h4 className="category-deco">Cakes</h4>
            <div className="subcategory-margin">
            {['Chocolate', 'Fruits', 'Kids', 'Wedding'].map((subcategory, id) => <Filter subcategory={subcategory} key={id}/>)}
            </div>
            <h4 className="category-deco">Baloons</h4>
            <div className="subcategory-margin">
            {['Single baloon', 'Baloons set', 'Special'].map((subcategory, id) => <Filter subcategory={subcategory} key={id}/>)}
            </div>
            <h4 className="category-deco">Decor</h4>
            <div className="subcategory-margin">
            {['Utensils', 'Signs', 'Confetti'].map((subcategory, id) => <Filter subcategory={subcategory} key={id}/>)}
            </div>
        </div>
    )
}

export default AllCategories;