<script>
	import { Score } from '.'
</script>
<section class="bg-gray-900">
  <div class="relative -top-20 before:absolute before:inset-0 before:bg-[linear-gradient(25.39deg,_rgba(255,_255,_255,_0.024)_18.54%,_rgba(123,_245,_93,_0.108)_62.25%)] before:backdrop-blur-2xl before:scale-x-[-1] max-w-[1204px] w-full h-[1328px] pt-[120px] px-[77px] pb-[217px] mx-auto rounded-[68px] border-2 border-[#7BF55D]/10 overflow-hidden">
    <div class="relative z-10">
      <h2 class="text-green-100 font-black text-center text-3xl">top audit scores</h2>
      <div class="flex justify-between items-center mt-[96px]">
        <Score />
        <Score />
        <Score />
        <Score />
      </div>
      <div class="max-w-[756px] w-full mt-32 mx-auto space-y-16 [&>p]:text-white [&>p]:text-lg">
        <p>Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</p>
        <p>Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</p>
        <p>A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .card::before {
    /* content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; */
    background: linear-gradient(25.39deg, rgba(255, 255, 255, 0.024) 18.54%, rgba(123, 245, 93, 0.108) 62.25%);
    /* backdrop-filter: blur(60px); */
    /* border-radius: 68px; */
    /* border: 1px solid rgba(123, 245, 93, .01); */
    /* transform: matrix(-1, 0, 0, 1, 0, 0); */
  }
</style>
