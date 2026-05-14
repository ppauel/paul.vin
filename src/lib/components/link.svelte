<script lang="ts" module>
    import type { HTMLAnchorAttributes } from "svelte/elements";
    import type { Component } from "svelte";
    import type { Icon as IconType } from "@lucide/svelte";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { IconProps } from "$types";

    export type LinkProps = WithElementRef<HTMLAnchorAttributes> & {
        icon?: typeof IconType | Component<IconProps>;
    };
</script>

<script lang="ts">
    let {
        ref = $bindable(null),
        icon,
        class: className,
        children,
        ...restProps
    }: LinkProps = $props();
</script>

<a
    bind:this={ref}
    class={cn("text-primary group outline-hidden", className)}
    {...restProps}
>
    {#if icon}
        {@const IconComponent = icon}
        <IconComponent
            class="size-4 ms-0.5 pointer-events-none inline align-[-1.75px]"
        />
    {/if}
    <span
        class="underline-offset-4 decoration-transparent underline group-hover:decoration-primary group-focus-visible:decoration-primary transition-[text-decoration]"
    >
        {@render children?.()}
    </span>
</a>
