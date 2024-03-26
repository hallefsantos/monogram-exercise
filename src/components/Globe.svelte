<script>
  import { T, useTask } from '@threlte/core'
  import { interactivity } from '@threlte/extras'
	import { TextureLoader } from 'three'
  import { useLoader } from '@threlte/core'

  const texture = useLoader(TextureLoader).load('/texture.jpg')

  interactivity()
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, -9.2]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.DirectionalLight position={[100, 100, 10]} />
<!-- <T.DirectionalLight position={[100, 100, 100  ]} /> -->

<T.SpotLight
  intensity={100}
  position={[-100, 100, -70]}
  angle={Math.PI / 6}
/>

<T.Mesh
  rotation.y={rotation}
  position.y={1}
>
  <T.SphereGeometry args={[5, 32, 32]} />
  <T.MeshStandardMaterial color="blue" />
    {#if $texture}
      <!-- <T.MeshStandardMaterial transparent={true} map={$texture} /> -->
    {/if}
</T.Mesh>