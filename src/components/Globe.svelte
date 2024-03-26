<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, OrbitControls } from '@threlte/extras'
  import { TextureLoader } from 'three'
  import { useLoader } from '@threlte/core'

  let controls

  const texture = useLoader(TextureLoader).load('/texture.jpg')

  export const reset = () => controls.reset()
  let rotation = 0

  interactivity()
  useTask((delta) => {
    rotation += delta
  })
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 18]}
  lookAt.y={0}
>
  <OrbitControls
    enableZoom={false}
    bind:ref={controls}
  />
</T.PerspectiveCamera>

<T.AmbientLight intensity={4} />

<T.DirectionalLight
  intensity={15}
  position={[ 25, 0, 5 ]}
  angle={Math.PI / 6}
/>

<T.Mesh rotation.y={rotation} position.y={1}>
  <T.SphereGeometry args={[5, 50, 50]} />
  {#if $texture}
    <T.MeshStandardMaterial map={$texture} />
  {/if}
</T.Mesh>