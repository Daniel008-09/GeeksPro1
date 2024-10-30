import './TopLine.css';
import phoneIcon from '../../../images/phone.png';
import phoneIcon1 from '../../../images/phone1.png';



export default function TopLine() {
  return (
    <div className='header-container'>
   
     <img src={phoneIcon} alt="Телефон" className='imgHeader'/> 
    

     <p className='Ftext'>8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00 </p>
     <img src={phoneIcon1} alt="Телефон" className='imgHeader1'/>
     <p className='Stext'>Войти / Регистрация</p>
    </div>



  )
}



