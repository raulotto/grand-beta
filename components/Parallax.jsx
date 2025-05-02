import React from 'react'

const Parallax = () => {
  return (
    <div
    className="ContainerFull bg-fixed bg-center bg-cover bg-no-repeat relative items-center lg:items-end h-[20vh] lg:h-[40vh]"
    style={{
      backgroundImage: "url('../images/platillo-paprika.jpg')",
     
    }}
  >

<div className='ContainerFlex justify-start lg:justify-end p-0'>
  <h4 className='TitleSection text-white z-1'>Restaurantes & Bares</h4>
  <div className='OverlayDiv'></div>
</div>


  </div>
  )
}

export default Parallax
