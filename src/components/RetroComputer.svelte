<script lang="ts">
  import { onMount, tick } from 'svelte'
  import { cn } from '$lib/utils';

  let retroComputer: HTMLElement
  let typewritingFinished = false

  onMount(() => {
    const codeArr = retroComputer.innerText.split('')
    codeArr.pop()
    let index = 0
    if (retroComputer) {
      retroComputer.innerText = ''
      const interval = setInterval(async () => {
        await tick()
        retroComputer.innerText += codeArr[index] ? codeArr[index] : ''
        index++

        if (codeArr.length === index) {
          typewritingFinished = true
          clearInterval(interval)
        }
      }, 50)

    }
  })
</script>

<div class="absolute top-[4%] left-[12%]">
<pre class="text-left leading-[7px]">
<code class="font-mono text-blue-400 text-[6px]">
<span bind:this={retroComputer} class={cn('after:relative after:top-0.5 after:w-1 after:inline-block after:h-2 after:bg-blue-400 after:ml-0.5', {
  'after:animate-blink': typewritingFinished,
})}>
{`
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/*Fonts*/}
					<link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
					<link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
					<link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
					<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
					<noscript>
						<link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
					</noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument`}
</span>
</code>
</pre>
</div>

<style>
  code {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    --tw-text-opacity: 1;
    color: rgb(68 219 255 / var(--tw-text-opacity));
    text-shadow: 0 0 9em #59cdff;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
  }
</style>