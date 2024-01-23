import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>I had a really great trip. I have no complaints. Loved the boat, it was exactly what I was looking for. Had my exterior cabin. That’s so important for a cruise like this.  Food was excellent too! Honestly, what a positive difference from last year’s cruise.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Jack</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Your pre cruise service was very good & easy to understand, the cruise was very enjoyable, the crew were fantastic, the meals were great, although a bit big, we had to ask cook to cut back a little, the cabin we had was very small although comfortable, some of the swim stops were a little too long, one was 6 hours, the cruise tour manager had a few problems trying to explain what our next stop was all about & some passengers felt she was very hard to understand, otherwise all very enjoyable.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Angelina Jolie</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>First many thanks to you for the good and fast response to all our requests. I think the management of our booking and pre-trip  documentation & information was far better than I can remember on other holidays so far.  Regarding the trip itself:-
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>The cruise was absolutely amazing there was nothing that was not perfect. Their attention to detail and their service was very personalized and on point.  Furthermore the cleanliness in the boat was impeccable. I walked around in my white socks and they never got dirty – That tells you something! I would recommend this cruise to any of my friends.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials