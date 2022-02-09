import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../components/Dialog";
import {
  Button,
  Fieldset,
  Flex,
  IconButton,
  Input,
  Label,
} from "../components/Input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import React from "react";

const DialogDemo = () => {
  const router = useRouter();
  return (
    <Dialog open={true}>
      <DialogContent css={{ backgroundColor: "$violet4" }}>
        <DialogTitle>Register User</DialogTitle>
        <DialogDescription>Register to see more of the site.</DialogDescription>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="name" />
        </Fieldset>
				<Fieldset>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="email" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="password" />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <DialogClose asChild>
            <Button
              aria-label="Register"
              variant="pink"
              onClick={() => {
                router.push("/login");
              }}
            >
              register
            </Button>
          </DialogClose>
        </Flex>
        <DialogClose asChild>
          <IconButton
            onClick={() => {
              router.push("/");
            }}
          >
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;
