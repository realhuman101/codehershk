'use client'

import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

function GradientHero() {
  return (
	<>
		<ShaderGradientCanvas style={{ position: 'absolute', top: 0 }}>
      <ShaderGradient cDistance={32} cPolarAngle={125} />
    </ShaderGradientCanvas>
	</>
  )
}

export default GradientHero