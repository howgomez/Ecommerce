import Input from "../../components/Input";
import "./Category.css";

function Category( {handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input 
          onChange={handleChange} 
          value='' 
          type="radio"
           name='test' />
           <span className="checkmark"></span>All
        </label>
      </div>
      <div>
      <Input 
        handleChange={handleChange}
        value='sneakers'
        title='Sneakers'
        name='test'
        />
         <Input 
        handleChange={handleChange}
        value='falts'
        title='Falts'
        name='test'
        />
         <Input 
        handleChange={handleChange}
        value='sandals'
        title='Sandals'
        name='test'
        />
         <Input 
        handleChange={handleChange}
        value='heels'
        title='Heels'
        name='test'
        />
       
      </div>
    </div>
  );
}

export default Category;
