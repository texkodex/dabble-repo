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
} from "../components/toolbar";
import { Input } from "../components/input";
import NextLink from "next/link";

const Index = () => {
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
        defaultValue="left"
        aria-label="Text alignment"
      >
        <ToolbarToggleItem value="bold" aria-label="Settings">
          <GearIcon />
        </ToolbarToggleItem>
				<ToolbarSeparator />
        <ToolbarToggleItem value="bold" aria-label="Search">
          <MagnifyingGlassIcon />
        </ToolbarToggleItem>
        <ToolbarSeparator />
      </ToolbarToggleGroup>
      <Input css={{ height: 24 }} id="query" defaultValue="query" />
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

export default Index;
