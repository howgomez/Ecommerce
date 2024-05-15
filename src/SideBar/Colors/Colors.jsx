import Input from '../../components/Input'
import './Colors.css'

function Colors({ handleChange }) {
  return (
    <div>
      <h1>Colors</h1>
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          value=''
          type="radio"
          name='test3' />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value='black'
        title='Black'
        name='test1'
        color='black'
      />
      <Input
        handleChange={handleChange}
        value='blue'
        title='Blue'
        name='test1'
        color='blue'
      />

      <Input
        handleChange={handleChange}
        value='red'
        title='Red'
        name='test1'
        color='red'
      />
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value='white' name='test1' />
        <span className="checkmark" style={{ backgroundColor: 'white', border: '2px solid black' }}></span> White

      </label>
    </div>
  )
}

export default Colors