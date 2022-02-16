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
	const register = () => { router.push("/"); };
  return (
    <Dialog open={true}>
      <DialogContent onClick={home}>
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
              onClick={register}
            >
              register
            </Button>
          </DialogClose>
        </Flex>
        <DialogClose asChild>
          <IconButton
            onClick={home}
          >
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;
