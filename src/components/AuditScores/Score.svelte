<script lang="ts">
	import { onMount } from 'svelte'

  let count = 0
  const totalTime = 10000
  const intervalTime = (totalTime / 100) / 2.15

  onMount(() => {
    const counting = setInterval(() => {
        if (count < 100) {
          count += 1
        } else {
          clearInterval(counting)
        }
    }, intervalTime)
  })
</script>

<div class="relative grid place-items-center xl:max-w-[212px] w-[112px] xl:w-full mx-auto aspect-square rounded-full">
  <svg class="absolute top-1/2 left-[45.5%] -translate-y-1/2 -translate-x-1/2 w-[150%]" viewBox="0 0 320 338" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddd_15_192)">
        <path
            class="animate-score [stroke-dasharray:1000] [stroke-dashoffset:1000] [animation-fill-mode:forwards]"
            d="M275.334 169C275.334 141.861 264.925 115.756 246.251 96.0635C227.578 76.3707 202.062 64.5903 174.962 63.1496C147.861 61.7089 121.24 70.7175 100.584 88.3194C79.9275 105.921 66.8092 130.776 63.9318 157.761C61.0544 184.747 68.6371 211.809 85.1175 233.37C101.598 254.932 125.721 269.351 152.516 273.657C179.311 277.963 206.737 271.828 229.143 256.515C251.549 241.203 267.229 217.879 272.951 191.351"
            stroke="#EFFFE2"
            stroke-width="4"
            stroke-linecap="round"
        />
    </g>
    <defs>
        <filter id="filter0_ddd_15_192" x="0.333984" y="0" width="338" height="338.001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="30.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.325621 0 0 0 0 0.983333 0 0 0 0 0.163889 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_192"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="21"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.9125 0 0 0 0 0.880867 0 0 0 0 0.121667 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_15_192" result="effect2_dropShadow_15_192"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.32549 0 0 0 0 0.984314 0 0 0 0 0.164706 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_15_192" result="effect3_dropShadow_15_192"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_15_192" result="shape"/>
        </filter>
    </defs>
  </svg>
  <span class="text-green-100 font-bold text-lg xl:text-2xl [text-shadow:_0px_0px_12px_#53FB2A,_0px_0px_42px_#E9E11F,_0px_0px_61px_#53FB2A]">{count}</span>
</div>