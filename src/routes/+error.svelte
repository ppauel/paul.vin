<script lang="ts">
    import { page } from "$app/state";
    import Link from "$lib/components/link.svelte";
</script>

<section class="my-16">
    <div class="mb-4">
        <h1>{page.status}</h1>
    </div>
    <p class="text-muted-foreground text-pretty">
        Don’t worry, you can always <Link href="/">return home</Link>.
    </p>
</section>
