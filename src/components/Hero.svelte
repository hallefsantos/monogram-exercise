<script lang="ts">
	import { onMount } from 'svelte'

  let scrollY: number
  let section: HTMLElement
  let mousePosition: number

  function scrollMouse() {
    mousePosition = ((section?.clientHeight * scrollY) / 100) / 100
  }
</script>

<svelte:window bind:scrollY on:scroll={scrollMouse}/>

<section bind:this={section} class="relative z-20 pt-14 lg:pt-[153px] bg-white">
  <div class="max-w-[1320px] mx-auto px-5">
    <div class="flex">
      <div>
        <h1 class="text-[40px] sm:text-2xl lg:text-4xl font-black text-center xl:text-left">
          jamstack
          <span class="bg-gradient-to-r from-[#fdbf85] via-[#f38e80] to-[#ca77a3] bg-clip-text text-transparent">
            101
        </span>
        </h1>
        <div class="mt-5 sm:mt-11 xl:max-w-[550px] w-full xl:ml-[52px]">
          <p class="font-light text-[16px] sm:text-sm text-gray-400 text-center xl:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
        </div>
        <!-- Mouse -->
        <figure class="hidden lg:block relative w-min mt-[87px] mx-auto xl:ml-[256px]">
          <svg class="w-[83px] clip-path-inset-[0_0_100%] duration-[1.4s] entered:clip-path-inset-[0]" viewBox="0 0 83 538" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41 1C41 1 76 42 81.5 125C87 208 16.4999 305.5 2.99996 380.5C-10.5 455.5 41.5 537.5 41.5 537.5" stroke="#151515" stroke-dasharray="4 4" vector-effect="non-scaling-stroke" stroke-width="1"></path></svg>
          <svg class="absolute left-[17%] -bottom-[0%] w-1/2 clip-path-inset-[0_50%] duration-[500ms] delay-[1310ms] ease-out -rotate-[26deg] entered:clip-path-inset-[0]" viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.5428 1.20801L24.2083 24.5425L0.873779 1.20801" stroke="#151515" vector-effect="non-scaling-stroke" stroke-width="1"></path></svg>
          <svg class="mouse absolute top-0 left-0 -translate-x-8 transition-all" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="offset-distance: {mousePosition}%;"><path d="M45.7409 22.5508L45.741 18.0508C45.7412 10.124 39.3234 3.8007 31.4913 3.80052L17.9913 3.80021C10.0766 3.80003 3.74117 10.1352 3.74098 18.0499L3.74088 22.5499C3.7407 30.382 10.0637 36.8 17.9905 36.8002L31.4905 36.8005C39.3349 36.8007 45.7407 30.3952 45.7409 22.5508Z" fill="#151515" stroke="white" stroke-width="6"></path><path d="M29.2409 20.3006C29.2408 21.4959 30.2252 22.5506 31.4908 22.5507L33.7408 22.5507C35.0064 22.5508 35.9908 21.4961 35.9909 20.3008C35.9909 19.0352 35.0065 18.0508 33.7409 18.0507L31.4909 18.0507C30.2253 18.0506 29.2409 19.035 29.2409 20.3006Z" fill="white"></path></svg>
        </figure>
      </div>
      <div class="relative flex-grow h-[964px] hidden xl:block">
        <img loading="lazy" class="absolute top-[171px] right-[340px] animate-updown" src="/shape-hero-left.webp" alt="" data-aos="fade-up" data-aos-delay="300">
        <img loading="lazy" class="absolute top-0 right-4 animate-updown animation-delay-1000" src="/shape-hero-right.webp" alt="" data-aos="fade-up">
        <span class="absolute bottom-0 right-[176px] block w-[280px] h-[479px] bg-white/50 rounded-[68px] backdrop-blur-[60px]" data-aos="fade-up" data-aos-delay="600"></span>
        <span class="absolute bottom-0 -right-[144px] block w-[280px] h-[662px] bg-white/50 rounded-[68px] backdrop-blur-[60px]" data-aos="fade-up" data-aos-delay="900"></span>
      </div>
    </div>
  </div>
</section>

<style>
  .mouse {
    offset-path: path("M41 1C41 1 76 42 81.5 125C87 208 16.4999 305.5 2.99996 380.5C-10.5 455.5 41.5 537.5 41.5 537.5");
  }
</style>