<script lang="ts">
  // import { Canvas } from '@threlte/core'
  // import Globe from './Globe.svelte'
	import GlobeJs from './GlobeJs.svelte'
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
  <!-- <GlobeThree /> -->

  <GlobeJs />
</section>

<style>
  :global(canvas) {
    border-radius: 50%;
  }
</style>