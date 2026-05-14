<script lang="ts">
    import * as Item from "$lib/components/shadcn-svelte/item/index.js";
    import TypeScriptIcon from "$lib/icons/typescript.svelte";
    import SwiftIcon from "$lib/icons/swift.svelte";
    import SvelteIcon from "$lib/icons/svelte.svelte";
    import VaporIcon from "$lib/icons/vapor.svelte";
    import DockerIcon from "$lib/icons/docker.svelte";
    import PostgresIcon from "$lib/icons/postgres.svelte";
    import type { ExperienceItem } from "$types";

    const languages: ExperienceItem[] = [
        {
            name: "TypeScript",
            icon: TypeScriptIcon,
        },
        {
            name: "Swift",
            icon: SwiftIcon,
        },
    ];

    const frameworks: ExperienceItem[] = [
        {
            name: "Svelte (Kit)",
            icon: SvelteIcon,
        },
        {
            name: "Vapor",
            icon: VaporIcon,
        },
    ];

    const applications: ExperienceItem[] = [
        {
            name: "Docker",
            icon: DockerIcon,
        },
        {
            name: "PostgreSQL",
            icon: PostgresIcon,
        },
    ];
</script>

<section class="my-16">
    <h2>Experience</h2>
    <p class="text-muted-foreground mt-1">My favorite tools recently</p>

    {#snippet experienceItem(item: ExperienceItem)}
        <Item.Root variant="outline">
            <Item.Media variant="icon">
                {@const Icon = item.icon}
                <Icon />
            </Item.Media>
            <Item.Content>
                <Item.Title class="line-clamp-1">
                    {item.name}
                </Item.Title>
            </Item.Content>
        </Item.Root>
    {/snippet}

    {#snippet experienceGrid(
        heading: string,
        experienceItems: ExperienceItem[],
    )}
        <div>
            <h3 class="mb-4">{heading}</h3>
            <Item.Group class="grid grid-cols-1 gap-4">
                {#each experienceItems as item (item.name)}
                    {@render experienceItem(item)}
                {/each}
            </Item.Group>
        </div>
    {/snippet}

    <div class="mt-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
        {@render experienceGrid("Languages", languages)}
        {@render experienceGrid("Frameworks", frameworks)}
        {@render experienceGrid("Applications", applications)}
    </div>
</section>
