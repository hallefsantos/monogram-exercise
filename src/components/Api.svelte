<script lang="ts">
	import { Canvas } from '@threlte/core';
  // import { Canvas } from '@threlte/core'
  // import Globe from './Globe.svelte'
	import GlobeJs from './GlobeJs.svelte'
	import { Globe } from '$components';
</script>

<section class="relative pt-[275px] bg-gray-900">
  <div class="grid grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-0 max-w-[1280px] w-full mx-auto px-20 xl:px-0">
    <div class="col-start-3 xl:col-start-4 flex justify-center" data-aos="fade-up">
      <img loading="lazy" class="xl:drop-shadow-path" src="/nextjs.svg" alt="Nextjs logo" width="124" height="75">
    </div>
    <div class="row-start-2 flex justify-center xl:mt-[32px]" data-aos="fade-up">
      <img loading="lazy" class="xl:drop-shadow-path" src="/react.svg" alt="React logo" width="200" height="55">
    </div>
    <div class="row-start-3 col-start-2 flex justify-center xl:mt-[52px]" data-aos="fade-up">
      <img loading="lazy" class="xl:drop-shadow-path" src="/nextjs.svg" alt="Nextjs logo" width="124" height="75">
    </div>
    <div class="row-start-4 col-start-3 xl:col-start-4 flex justify-center mt-3" data-aos="fade-up">
      <img loading="lazy" class="xl:drop-shadow-path" src="/react.svg" alt="React logo" width="200" height="55">
    </div>
    <div class="row-start-5 flex justify-center mt-[42px]" data-aos="fade-up">
      <img loading="lazy" class="opacity-40 xl:drop-shadow-path" src="/svelte.svg" alt="Svelte logo" width="220" height="53">
    </div>
    <div class="row-start-5 col-start-3 flex justify-center mt-[22px]" data-aos="fade-up">
      <img loading="lazy" class="opacity-60 xl:opacity-100 xl:drop-shadow-path" src="/vuejs.svg" alt="Vuejs logo" width="180" height="65">
    </div>
    <div class="row-start-6 col-start-2 flex justify-center mt-[73px]" data-aos="fade-up">
      <img loading="lazy" class="opacity-10 xl:drop-shadow-path" src="/react.svg" alt="React logo" width="200" height="55">
    </div>
    <div class="row-start-7 xl:col-start-4 flex justify-center mt-[35px]" data-aos="fade-up">
      <img loading="lazy" class="opacity-10 xl:drop-shadow-path" src="/svelte.svg" alt="Svelte logo" width="220" height="53">
    </div>
  </div>

  <div class="max-w-[770px] mt-10 ml:mt-0 w-full mx-auto px-5 text-center">
    <h2 class="text-[50px] sm:text-4xl font-black text-white">api</h2>
    <p class="mt-5 xl:mt-[63px] text-sm xl:text-md text-white">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
  </div>

  <!-- globe -->
  <div class="relative before:absolute before:left-0 before:top-0 before:w-full before:h-2/6 before:bg-gray-900 mt-16 xl:mt-[170px] px-5 bg-white">
    <img src="/squiggly.svg" class="absolute top-[31%] left-0 w-full" alt="Squiggly bg">
    <div class="relative z-20 w-full md:w-[900px] aspect-square mx-auto -rotate-[27deg]">
      <img class="absolute z-[-1] top-[40%] left-[40%] -translate-y-1/2 -translate-x-1/2 w-full scale-[1.4]" src="/globe-glow.svg" alt="Globe glow">
      <img class="absolute z-[-1] inset-0" src="/globe.svg" alt="Globe" />
      <div class="w-full h-full mix-blend-color-dodge">
        <Canvas>
          <Globe />
        </Canvas>
      </div>
    </div>
  </div>
</section>

<style>
  :global(canvas) {
    border-radius: 50%;
  }
</style>