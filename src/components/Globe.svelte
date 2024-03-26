<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, OrbitControls } from '@threlte/extras'
  import { TextureLoader } from 'three'
  import { useLoader } from '@threlte/core'

  const texture = useLoader(TextureLoader).load('/texture.webp')

  let rotation = 0

  interactivity()
  useTask((delta) => {
    rotation += delta
  })
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 12]}
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

<T.AmbientLight intensity={4} />

<T.Mesh>
  <T.SphereGeometry args={[5, 50, 50]} />
  {#if $texture}
    <T.MeshStandardMaterial map={$texture} />
  {/if}
</T.Mesh>