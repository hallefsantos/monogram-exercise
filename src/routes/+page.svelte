<script lang="ts">
	import { onMount } from 'svelte'
	import { AuditScores } from '$components/AuditScores'
  import { Api, Footer, Javascript, Hero, Markup } from '$components'

  import AOS from 'aos'
  import 'aos/dist/aos.css'

  onMount(() => AOS.init({
    duration: 2000,
    once: true,
  }))
</script>

<svelte:head>
  <title>Front-end Development Exercise III</title>
</svelte:head>


<Hero />
<Javascript />
<Api />
<Markup />
<AuditScores />
<Footer />