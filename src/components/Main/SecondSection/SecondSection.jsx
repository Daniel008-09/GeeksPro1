import './SecondSection.css'
import Chasi from '../../../images/chasi.png';

export default function SecondSection() {
  return (
    <div className='SSbody'>
      <p className='Season'><h1>СЕЗОН 2020/21</h1></p>
        <div className='SSline'></div>
          <div className='LineImg'>
            <div className='box1'>
              <div className='XXL'>
              <img src={Chasi} alt="" className='chasi'/>
              </div>
                <p>Louis XVI ATHOS</p>
                <p>165 000 руб.</p>
              </div>


            <div className='box1'>
              <div className='XXL'>
              <img src={Chasi} alt="" className='chasi'/>
              </div>
            <p>Louis XVI ATHOS</p>
            <p>165 000 руб.</p>
              </div>


            <div className='box1'>
              <div className='XXL'>
              <img src={Chasi} alt="" className='chasi'/>
              </div>
              <p>Louis XVI ATHOS</p>
              <p>165 000 руб.</p>
              </div>


          </div>

      
    </div>
  )
}
