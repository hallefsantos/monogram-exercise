<script lang="ts">
  import RetroComputer from "./RetroComputer.svelte";
</script>

<section class="mt-[42px]">
  <div class="relative max-w-[1397px] w-full mx-auto">
    <img src="/javascript-bg.svg" class="w-full">
    <div class="absolute top-[93px] left-1/2 -translate-x-1/2 max-w-[810px] w-full text-center">
      <h2 class="text-white text-4xl font-black">javascript</h2>
      <p class="max-w-[578px] w-full mt-11 mx-auto text-sm text-white">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>

      <div class="relative mt-[95px]">
        <img src="/retro-computer.svg" alt="">
        <RetroComputer />
      </div>
    </div>
  </div>
</section>

<style>
  .typewriter .line {
    overflow: hidden;
    border-right: .15em solid black;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation:
      typewriter 4s steps(40) 1s 1 normal both,
      blinkCursor 500ms steps(40) infinite normal;
  }
</style>