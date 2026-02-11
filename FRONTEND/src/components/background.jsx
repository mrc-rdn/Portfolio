import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

export default function Background() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
   
    if (!vantaEffect && myRef.current) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          THREE: THREE, 
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x101010,
          shininess: 30.00,
          waveHeight: 15.00,
          waveSpeed: 1.00,
          zoom: 1.00
        })
      )
    }
    

  }, [vantaEffect])

return (
  
  <div  className="absolute w-full h-full overflow-hidden" style={{ 
    
    
  }}>
    
    
    <div 
      ref={myRef} 
      className='absolute w-full h-full top-0 left-0 z-0 backdrop-blur-md'
      
    />
    <div className="absolute bottom-0 left-0 w-full h-48 z-10 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
  </div>
)
}