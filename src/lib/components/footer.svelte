<script lang="ts">
    import Separator from "./shadcn-svelte/separator/separator.svelte";
    import WineIcon from "@lucide/svelte/icons/wine";
</script>

<footer
    class="max-w-3xl mx-auto px-4 pb-8 mt-8 text-muted-foreground select-none w-full"
>
    <Separator class="mb-8" />
    <div class="flex items-center gap-x-2">
        <p>
            <span class="font-medium text-foreground">paul</span>.vin
        </p>
        <WineIcon size="16" />
    </div>
</footer>
