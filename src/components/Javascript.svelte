<script lang="ts">
	import visibility from '$actions/visibility'
  import RetroComputer from './RetroComputer.svelte'

  let isVisible = false
</script>

<section class="relative z-20 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[20.5%] before:bg-gray-900 pt-[42px] px-5 bg-white">
  <div class="relative max-w-[1397px] pb-[58%] w-full mx-auto">
    <!-- <img class="absolute inset-0" src="/javascript-bg.svg" alt="JS background shape"> -->
    <div class="absolute top-[5%] sm:top-[8%] xl:top-[93px] left-1/2 -translate-x-1/2 max-w-[810px] px-5 w-full text-center">
      <h2 class="text-white text-[40px] sm:text-2xl lg:text-4xl font-black" data-aos="fade-up">javascript</h2>
      <p class="max-w-[578px] w-full mt-2 sm:mt-11 mx-auto text-[14px] sm:text-[16px] xl:text-sm text-white" data-aos="fade-up" data-aos-delay="300">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>

      <div use:visibility={(visible) => isVisible = visible}>
        {#if isVisible}
          <RetroComputer />
        {/if}
      </div>
    </div>
  </div>
</section>