<script lang="ts">
	import { AuditScores } from '$components/AuditScores'
  import { Footer, Javascript, Hero, Markup } from '$components'
</script>

<svelte:head>
  <title>Front-end Development Exercise III</title>
</svelte:head>


<Hero />
<Javascript />

<section>
  <h2>api</h2>
  <p>At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
</section>


<Markup />
<AuditScores />
<Footer />