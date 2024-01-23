import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `The day-to-day conditions of the atmosphere at a place with respect to elements.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `
      It involves providing encouragement, giving advice, and demonstrating through behavior. `,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc:` Customization refers to the action of altering a product or service to suit a person's or company's preferences or requirements.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList