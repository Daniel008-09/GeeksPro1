import './SixSection.css';
import ChasiSix from '../../../images/chasi.png';

export default function SixSection() {
  return (
    <div>
        <p className='titlee'>
      <h1>новые поступления</h1>
      </p>
      <div className='linee'></div>
      <div className='container'>
        <div className='imageRow'>
          {Array.from({ length: 8 }).map((_, index) => (
            <div className='chasiBox' key={index}>
              <div className='imgSix'>
                <img src={ChasiSix} alt="" />
              </div>
              <p>Louis XVI ATHOS</p>
              <p>165 000 руб.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
