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

const DialogDemo = () => {
	const router = useRouter();
	const home = () => { router.push("/"); }; 
	const login = () => { router.push("/"); };
  return (
    <Dialog open={true}>
      <DialogContent onClick={home}>
        <DialogTitle>User login</DialogTitle>
        <DialogDescription>Thank you for returning.</DialogDescription>
        <Fieldset>
          <Label htmlFor="nameOrEmail">Name or Email</Label>
          <Input id="nameOrEmail" defaultValue="name or email" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Password</Label>
          <Input id="password" defaultValue="password" />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <DialogClose asChild>
            <Button aria-label="Login" variant="pink" onClick={login} >
             login 
            </Button>
          </DialogClose>
        </Flex>
        <DialogClose asChild >
          <IconButton onClick={home} >
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;

