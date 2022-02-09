import {
  GearIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import {
  Toolbar,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarButton,
} from "./Toolbar";
import { Input } from "./Input";
import NextLink from "next/link";
import { useState } from "react";
import { PopoverImpl } from "./popoverImpl";

export const NavBar = () => {
	const [value, setValue] = useState("settings");
  return (
    <Toolbar aria-label="Formatting options">
      <ToolbarLink
        href="https://twitter.com/texkodex"
        target="_blank"
      >
        <ToolbarButton>texkodex</ToolbarButton>
      </ToolbarLink>
      <ToolbarSeparator />
      <ToolbarToggleGroup
        type="single"
				value={value}
				onValueChange={(value) => {
					if (value) setValue(value);
				}}
        aria-label="Settings and Search"
      >
        <ToolbarToggleItem value="settings" aria-label="Settings">
					<GearIcon />
        </ToolbarToggleItem>
				<ToolbarSeparator />
        <ToolbarToggleItem value="search" aria-label="Search">
          <MagnifyingGlassIcon />
        </ToolbarToggleItem>
        <ToolbarSeparator />
      </ToolbarToggleGroup>
      <Input css={{ height: 24 }} id="query" placeholder="query" />
      <ToolbarSeparator />
      <NextLink href="/login">
        <ToolbarLink css={{ marginRight: 10 }}>
          <ToolbarButton>Login</ToolbarButton>
        </ToolbarLink>
      </NextLink>
      <NextLink href="/register">
        <ToolbarLink href="">
          <ToolbarButton>Register</ToolbarButton>
        </ToolbarLink>
      </NextLink>
    </Toolbar>
  );
};
