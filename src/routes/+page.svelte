<script lang="ts">
	import { onMount } from 'svelte'
  import AOS from 'aos'
  import 'aos/dist/aos.css'
	import { AuditScores } from '$components/AuditScores'
  import { Api, Footer, Javascript, Hero, Markup } from '$components'

  onMount(() => AOS.init({
    duration: 2000,
    once: true,
  }))
</script>

<svelte:head>
  <title>Front-end Development Exercise III</title>
  <meta name="description" content="This landing page is a exercise created using SvelteKit + Tailwind for Monogram">
</svelte:head>

<!-- Background -->
<div class="fixed z-10 left-1/2 -translate-x-1/2 inset-0 max-w-[1280px] w-full h-full flex justify-between px-16 xl:px-0 opacity-20 pointer-events-none">
  <span class="line inline-block w-[1px] bg-repeat-y bg-[length:1px_8px]"></span>
  <span class="line inline-block w-[1px] bg-repeat-y bg-[length:1px_8px]"></span>
  <span class="line inline-block w-[1px] bg-repeat-y bg-[length:1px_8px]"></span>
  <span class="line inline-block w-[1px] bg-repeat-y bg-[length:1px_8px]"></span>
  <span class="line hidden xl:inline-block w-[1px] bg-repeat-y bg-[length:1px_8px]"></span>
</div>

<Hero />
<Javascript />
<!-- <Api /> -->
<Markup />
<AuditScores />
<Footer />

<style>
  .line {
    background-image: linear-gradient(to bottom, #E8E8E8 0px, #E8E8E8 4px, transparent 4px, transparent 8px);
  }
</style>