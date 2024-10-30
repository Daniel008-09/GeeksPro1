import './SecondLine.css';
import Cart from '../../../images/cart.png';
import Lupa from '../../../images/lupa.png';

export default function SecondLine() {
  return (
    <div className='body'>
      <p className='porten'>PORTEN</p>
        <div className='like'>
        <p className='box'>ПОНРАВИЛОСЬ</p>
        </div>

      <div className='line-container'>
        <p className='line'>ЛИЧНЫЙ КАБИНЕТ</p>
        <p className='line'>НАСТРОЙКИ</p>
      </div>
      <img src={Cart} alt="" className='cart'/>
      <img src={Lupa} alt=""  className='lupa'/>
    </div>
  )
}


