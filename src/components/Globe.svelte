<script lang="ts">
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { TextureLoader } from 'three'
  import { useLoader } from '@threlte/core'

  const texture = useLoader(TextureLoader).load('/texture.webp')
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 2]}
  lookAt.y={0}
>
  <OrbitControls
    autoRotate
    enableZoom={false}
    rotateSpeed={1}
    minPolarAngle={1.5}
    maxPolarAngle={1.6}
  />
</T.PerspectiveCamera>

<T.AmbientLight intensity={1} />

<T.Mesh>
  <T.SphereGeometry args={[1, 8, 8]} />
  {#if $texture}
    <T.MeshStandardMaterial map={$texture} />
  {/if}
</T.Mesh>