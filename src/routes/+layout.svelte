<script lang="ts">
    import "./layout.css";
    import { ModeWatcher } from "mode-watcher";
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";

    let { children } = $props();
</script>

<ModeWatcher modeStorageKey="mode" themeStorageKey="theme" />

<Header />

<main class="max-w-3xl mx-auto px-4 flex-1 w-full">
    {@render children()}
</main>

<Footer />
