<script lang="ts">
    import { userPrefersMode, setMode } from "mode-watcher";
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import SunMoonIcon from "@lucide/svelte/icons/sun-moon";
    import * as DropdownMenu from "$lib/components/shadcn-svelte/dropdown-menu/index.js";
    import { Button } from "$lib/components/shadcn-svelte/button/index";
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        {#snippet child({ props })}
            <Button {...props} variant="ghost" size="icon">
                {#if userPrefersMode.current === "dark"}
                    <MoonIcon />
                {:else if userPrefersMode.current === "light"}
                    <SunIcon />
                {:else}
                    <SunMoonIcon />
                {/if}
            </Button>
        {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-24" align="end" alignOffset={1}>
        <DropdownMenu.Label>Color scheme</DropdownMenu.Label>
        <DropdownMenu.Group>
            <DropdownMenu.CheckboxItem
                checked={userPrefersMode.current === "system"}
                onclick={() => setMode("system")}
                >System</DropdownMenu.CheckboxItem
            >
            <DropdownMenu.CheckboxItem
                checked={userPrefersMode.current === "light"}
                onclick={() => setMode("light")}
                >Light</DropdownMenu.CheckboxItem
            >
            <DropdownMenu.CheckboxItem
                checked={userPrefersMode.current === "dark"}
                onclick={() => setMode("dark")}
            >
                Dark
            </DropdownMenu.CheckboxItem>
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>
