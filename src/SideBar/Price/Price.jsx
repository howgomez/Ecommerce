import './Price.css'
import Input from '../../components/Input'

function Price({handleChange}) {
  return (
    <div className="ml">
      <h2 className="sidebar-label-title">Price</h2>
      <div>
        <label className="sidebar-label-container">
          <input 
          onChange={handleChange} 
          value='' 
          type="radio"
          name='test2' />
           <span className="checkmark"></span>All
          </label>

           <Input
           handleChange={handleChange}
           value= {100}
           title='$50 - $100'
           name= 'test2'
           />
             <Input
           handleChange={handleChange}
           value= {150}
           title='$100 - $150'
           name= 'test2'
           />
             <Input
           handleChange={handleChange}
           value= {200}
           title='Over $150'
           name= 'test2'
           />
  
      </div>
    </div>
  )
}

export default Price