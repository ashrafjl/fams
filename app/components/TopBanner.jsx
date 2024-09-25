import React from 'react'

const TopBanner = () => {
  return (
    <div className={`bg-[url('/images/bannerBg.jpg')] relative bg-cover bg-center`}>
        <div className='absolute top-0 left-0 w-full h-full bg-primary bg-opacity-60'></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere voluptatum architecto nobis aliquid sequi suscipit perspiciatis obcaecati? Optio similique totam dignissimos consequatur provident hic cumque consectetur temporibus alias tempore?</p>
        <div className='min-h-[300px]'></div>
    </div>
  )
}

export default TopBanner