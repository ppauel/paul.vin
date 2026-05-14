import type { Asset } from "$app/types";
import type { ButtonProps } from "$lib/components/shadcn-svelte/button";
import type { Component } from "svelte";
import type { Icon } from "@lucide/svelte";
import type { SVGAttributes } from "svelte/elements";

export type IconProps = SVGAttributes<SVGSVGElement>;

export interface Project {
  name: string;
  description: string;
  image: Asset;
  button: {
    label: string;
    icon?: typeof Icon | Component<IconProps>;
    props: ButtonProps;
  };
}

export interface ExperienceItem {
  name: string;
  icon: Component<IconProps>;
}
