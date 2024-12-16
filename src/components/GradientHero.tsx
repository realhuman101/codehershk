'use client'

import React from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

function GradientHero() {
  const { scene } = useThree()

  useFrame(() => {
    const mesh: any = scene.getObjectByName('shadergradient-mesh')

    if (mesh.material.userData.uNoiseStrength) {
      mesh.material.userData.uNoiseStrength.value = 10
    }
  })

  return (
    <ShaderGradient
      cDistance={32}
      cPolarAngle={125}
      color1='#ff5005'
      color2='#dbba95'
      color3='#d0bce1'
    />
  )
}

export default GradientHero