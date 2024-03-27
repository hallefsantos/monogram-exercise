<script lang="ts">
	import visibility from '$actions/visibility'
	import { cn } from '$lib/utils'
  import RetroComputer from './RetroComputer.svelte'

  let isVisible = false
</script>

<section class="relative z-20 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[20.5%] before:bg-gray-900 pt-[42px] px-5 bg-white">
  <div class="relative max-w-[1397px] pb-[58%] w-full mx-auto">
    <picture>
      <source media="(max-width: 640px)" srcset="/javascript-bg-600w.webp" />
      <source media="(min-width: 641px)" srcset="/javascript-bg.webp" />
      <img class="absolute inset-0" src="/javascript-bg.webp" alt="JS background shape">
    </picture>
    <div class="absolute top-[5%] sm:top-[8%] xl:top-[93px] left-1/2 -translate-x-1/2 max-w-[810px] px-5 w-full text-center">
      <h2 class="text-white text-[40px] sm:text-2xl lg:text-4xl font-black" data-aos="fade-up">javascript</h2>
      <p class="max-w-[578px] w-full mt-2 sm:mt-11 mx-auto text-[14px] sm:text-[16px] xl:text-sm text-white" data-aos="fade-up" data-aos-delay="300">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>

      <div use:visibility={(visible) => isVisible = visible}>
        {#if isVisible}
          <RetroComputer />
        {/if}
      </div>
    </div>

    <div class="absolute top-[5%] right-[5%] max-xl:hidden">
      <svg
        class={cn('absolute top-[14rem] right-[3rem] h-[28rem] duration-[2s]', {
          '[clip-path:inset(0_0_100%)]': !isVisible,
          '[clip-path:inset(0)]': isVisible
        })}
      viewBox="0 0 248 451" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00012 0.5C1.00012 0.5 -2.49997 95.5001 111 127C224.5 158.5 265 243 239 333.5C213 424 111 450 111 450" stroke="white" vector-effect="non-scaling-stroke" stroke-width="1" stroke-dasharray="4 4"></path></svg>

      <svg
        class={cn('absolute top-[41.15rem] right-[10rem] h-[1.5rem] duration-[500ms] delay-[1510ms] ease-out rotate-[60deg]', {
          '[clip-path:inset(0_50%)]': !isVisible,
          '[clip-path:inset(0)]': isVisible
        })}
        viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.5428 1.20801L24.2083 24.5425L0.873779 1.20801" stroke="white" vector-effect="non-scaling-stroke" stroke-width="1"></path></svg>
    </div>
  </div>
</section>