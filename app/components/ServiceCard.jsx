import Image from 'next/image'
import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div className='bg-white shadow-card rounded-[10px] pt-[50px] p-[40px] mt-[35px] mb-[40px] max-w-[320px] min-w-[320px] min-h-[336px] border-[2px] border-dashed border-primary'>
        <div className='w-[100px] h-[100px] mt-[-90px] rounded-[10px] flex items-center justify-center overflow-hidden shadow-card'>
            <Image src={service?.image} width={120} height={120} className='w-[100px] h-[100px] object-cover object-center'/>
        </div>
        <div className='mt-[30px]'>
            <h4 className='text-[22px] font-semibold text-primary'>{service?.title}</h4>
            <p className='mt-[20px] text-sm text-text-color'>{service?.description}</p>
        </div>
    </div>
  )
}

export default ServiceCard