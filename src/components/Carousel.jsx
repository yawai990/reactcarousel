import React,{useState} from 'react';
import { Icon } from '@iconify/react';

const Carousel = ({data}) => {
  const [current,setCurrent] = useState(1);
  const length = data.length;

  const nextSlide =()=> setCurrent(current === length - 1 ? 0:current + 1);
  const prevSlide =()=>setCurrent(current === 0 ? length - 1 : current - 1);

  if(!Array.isArray(data) || data.length <= 0) return null

  return (
    <section className='carousel'>
      <Icon className='arrow left-arrow' icon="ant-design:arrow-left-outlined" onClick={prevSlide} />
      <Icon className='arrow right-arrow' icon="ant-design:arrow-right-outlined" onClick={nextSlide} />

            {data.map((da,index)=>{
        return <div key={da.id} className={index === current ? 'slide active':'slide'}>
        {
        index === current && <img src={da.image} alt="" className='img' />
        }
        </div>
})}
    </section>
  )
}
   export default Carousel;