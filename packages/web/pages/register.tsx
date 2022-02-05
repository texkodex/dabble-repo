import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../components/dialog";
import {
  Button,
  Fieldset,
  Flex,
  IconButton,
  Input,
  Label,
} from "../components/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import React from "react";

const DialogDemo = () => {
  const router = useRouter();
  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogTitle>Register User</DialogTitle>
        <DialogDescription>Register to see more of the site.</DialogDescription>
        <Fieldset>
          <Label htmlFor="nameOrEmail">Name or Email</Label>
          <Input id="name" placeholder="name or email" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="password" />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <DialogClose asChild>
            <Button
              aria-label="Close"
              variant="pink"
              onClick={() => {
                router.push("/");
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
