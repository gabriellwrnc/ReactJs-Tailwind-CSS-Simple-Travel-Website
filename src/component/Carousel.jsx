import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://media.istockphoto.com/photos/pristine-beach-bathed-by-the-bali-sea-picture-id459892839?b=1&k=20&m=459892839&s=170667a&w=0&h=jrxtB-IrrRugkAtHqE668gy64kXFcCIna1q7KHQHk9Y='
    },
    {
        url: 'https://media.istockphoto.com/photos/tanah-lot-temple-bali-indonesia-picture-id1263867030?b=1&k=20&m=1263867030&s=170667a&w=0&h=GWgxhDwkYq8SDIb9-vdkN_THGZ1R9c3EijQyluYtsBc='
    },
    {
        url: 'https://media.istockphoto.com/photos/young-woman-in-swimsuit-sit-on-boat-mask-and-flippers-picture-id546206792?b=1&k=20&m=546206792&s=170667a&w=0&h=RzxvBbRII76uPARNErdCeQ2ZsyMxsspKrVuQIlldQWA='
    }
]

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8 '/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
        {sliderData.map((item,index) =>(
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (<img className='w-[1240px] h-full rounded-md' src={item.url} alt="/" />)}
            </div>
        ))}
    </div>
  )
}

export default Carousel