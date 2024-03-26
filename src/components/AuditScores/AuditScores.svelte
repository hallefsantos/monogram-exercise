<script>
	import { Score } from '.'
  import visibility from '$actions/visibility'

  let isVisible = false
</script>
<section class="relative bg-gray-900 px-4">
  <div class="relative z-20 -top-20 before:absolute before:inset-0 before:bg-[linear-gradient(25.39deg,_rgba(255,_255,_255,_0.024)_18.54%,_rgba(123,_245,_93,_0.108)_62.25%)] before:backdrop-blur-2xl before:scale-x-[-1] max-w-[1204px] w-full xl:h-[1328px] py-10 xl:pt-[120px] px-4 xl:px-[77px] xl:pb-[217px] mx-auto rounded-3xl xl:rounded-[68px] border-2 border-[#7BF55D]/10 overflow-hidden">
    <div class="relative z-10 flex flex-col items-center">
      <h2 class="text-green-100 font-black text-center text-[32px] xl:text-3xl">top audit scores</h2>
      <div use:visibility={(visible) => isVisible = visible} class="grid grid-cols-2 sm:grid-cols-4 gap-4 xl:flex xl:justify-between xl:items-center xl:w-full mt-10 xl:mt-[96px]">
        {#if isVisible}
          <Score />
          <Score />
          <Score />
          <Score />
        {/if}
      </div>
      <div class="xl:max-w-[756px] w-full mt-10 xl:mt-32 mx-auto space-y-5 xl:space-y-16 [&>p]:text-white xl:[&>p]:text-lg opacity-70">
        <p class="mix-blend-color-dodge">Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</p>
        <p class="mix-blend-color-dodge">Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</p>
        <p class="mix-blend-color-dodge">A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>
      </div>
    </div>
  </div>
</section>