import './index.sass'

const BurgerButton = ({checked, onClick}) => (
  <div className='burgerButton'>
    <input checked={checked} type='checkbox' id='operator' onClick={onClick} />
    <label className='hamburger' htmlFor='operator'>
      <div className='top-bun'></div>
      <div className='meat'></div>
      <div className='bottom-bun'></div>
    </label>
  </div>
)

export default BurgerButton;
