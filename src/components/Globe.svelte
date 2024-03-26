<script>
  import { T, useTask } from '@threlte/core'
  import { interactivity } from '@threlte/extras'
  import { spring } from 'svelte/motion'
	import { MeshLambertMaterial, TextureLoader } from 'three';
  import { useLoader } from '@threlte/core'

  const texture = useLoader(TextureLoader).load('/texture.png')

  interactivity()
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })
</script>

<T.PerspectiveCamera
  makeDefault
  position={[15, 0, 0]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.DirectionalLight position={[100, 100, 100]} />
<T.DirectionalLight position={[100, 100, 100  ]} />

<T.Mesh
  rotation.y={rotation}
  rotation.x={-100}
  position.y={1}
>
  <T.SphereGeometry args={[5, 100, 16]} />
  <T.MeshStandardMaterial color="white" map={$texture} />
</T.Mesh>