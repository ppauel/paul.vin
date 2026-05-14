<script lang="ts">
    import MailIcon from "@lucide/svelte/icons/mail";
    import * as Avatar from "$lib/components/shadcn-svelte/avatar/index.js";
    import Link from "$lib/components/link.svelte";
    import GitHubIcon from "$lib/icons/github.svelte";
    import {
        PUBLIC_AVATAR_URL,
        PUBLIC_EMAIL_ADDRESS,
        PUBLIC_GITHUB_URL,
    } from "$env/static/public";
</script>

<section class="my-16">
    <div class="flex items-center gap-x-3 mb-4">
        <Avatar.Root class="size-10">
            <Avatar.Image
                loading="lazy"
                src={PUBLIC_AVATAR_URL}
                alt="GitHub Avatar"
            />
            <Avatar.Fallback class="text-lg">P</Avatar.Fallback>
        </Avatar.Root>
        <div>
            <h1>Paul</h1>
        </div>
    </div>

    <p class="text-muted-foreground text-pretty">
        I’m a computer science student living in Germany. I have an interest in
        web and app development, often delving into freelance projects alongside
        my work and studies.
    </p>

    <p class="text-muted-foreground text-pretty">
        You can find me on <Link
            target="_blank"
            href={PUBLIC_GITHUB_URL}
            icon={GitHubIcon}>GitHub</Link
        > or send me an
        <Link href={`mailto:${PUBLIC_EMAIL_ADDRESS}`} icon={MailIcon}
            >email</Link
        >.
    </p>
</section>
