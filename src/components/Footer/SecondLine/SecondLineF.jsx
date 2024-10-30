import './SecondLine.css';
import Phon from '../../../images/phon.png';

export default function SecondLine() {
  return (
    <div className='bu'>
      <img src={Phon} alt="" className='phon' />
      <div className='param'>
        <h1>О МАГАЗИНЕ</h1>
        <h1>КАТЕГОРИИ</h1>
        <h1>РАССЫЛКИ</h1>
      </div>

      <div className="lorems">
        <p className='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
      </div>

      <div className="boxx">
        <div className="time"><p>
        часы
          </p>
          </div>


        <div className="braslet"><  p>
        браслет
          </p></div>


        <div className="remen"><p>
        ремень
          </p></div>


        <div className="jeweler"><p>
        ювелирные изделия
          </p></div>


        <div className="zaponki"><p>
          запонки
          </p></div>
      </div>

      <div className="lorr">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
        </p>
      </div>
    </div>
  );
}
