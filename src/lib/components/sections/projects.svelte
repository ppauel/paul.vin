<script lang="ts">
    import ConstructionIcon from "@lucide/svelte/icons/construction";
    import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
    import * as Item from "$lib/components/shadcn-svelte/item/index.js";
    import Button from "$lib/components/shadcn-svelte/button/button.svelte";
    import { AspectRatio } from "$lib/components/shadcn-svelte/aspect-ratio/index.js";
    import PortableMediaPlayerImage from "$lib/assets/portable-media-player.webp";
    import RolesBotImage from "$lib/assets/roles-bot.webp";

    import type { Project } from "$types";

    const projects: Project[] = [
        {
            name: "Roles Bot",
            description:
                "Robust role management app used on more than 40,000 servers on Discord.",
            image: RolesBotImage,
            button: {
                label: "Visit Website",
                icon: ExternalLinkIcon,
                props: {
                    href: "https://roles.bot",
                    target: "_blank",
                },
            },
        },
        {
            name: "Portable Media Player",
            description:
                "A concept device running a software built with Swift Embedded",
            image: PortableMediaPlayerImage,
            button: {
                label: "Read more",
                icon: ConstructionIcon,
                props: {
                    disabled: true,
                },
            },
        },
    ];
</script>

<section class="my-16">
    <h2>Projects</h2>
    <p class="text-muted-foreground mt-1 text-sm">What I’ve been working on</p>

    <div class="my-4">
        <Item.Group
            class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4"
        >
            {#each projects as project (project.name)}
                <Item.Root
                    variant="outline"
                    class="rounded-2xl p-4 max-w-none flex-col justify-between items-stretch"
                >
                    <div class="space-y-3.5">
                        <Item.Header>
                            <AspectRatio
                                ratio={16 / 9}
                                class="bg-muted rounded-lg"
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    draggable={false}
                                    class="h-full w-full rounded-lg object-cover"
                                />
                            </AspectRatio>
                        </Item.Header>
                        <Item.Content>
                            <Item.Title>{project.name}</Item.Title>
                            <Item.Description class="hyphens-auto"
                                >{project.description}</Item.Description
                            >
                        </Item.Content>
                    </div>
                    <Item.Footer class="*:w-full basis-auto">
                        <Button variant="outline" {...project.button.props}>
                            {#if project.button.icon}
                                {@const Icon = project.button.icon}
                                <Icon />
                            {/if}
                            {project.button.label}
                        </Button>
                    </Item.Footer>
                </Item.Root>
            {/each}
        </Item.Group>
    </div>
</section>
