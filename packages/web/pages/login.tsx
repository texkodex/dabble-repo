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
        <DialogTitle>User login</DialogTitle>
        <DialogDescription>Thank you for returning.</DialogDescription>
        <Fieldset>
          <Label htmlFor="name">Name or Email</Label>
          <Input id="nameOrEmail" defaultValue="name or email" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Password</Label>
          <Input id="password" defaultValue="password" />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <DialogClose asChild>
            <Button aria-label="Close" variant="pink" onClick={ () => { router.push("/"); }} >
             login 
            </Button>
          </DialogClose>
        </Flex>
        <DialogClose asChild >
          <IconButton onClick={ () => { router.push("/"); }} >
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;

