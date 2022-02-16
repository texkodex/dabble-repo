import { Field, InputType } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {
	@Field() 
	@Length(1, 25)
	firstName: string;

	@Field()
	@Length(1, 40) 
	lastName: string;

	@Field() 
	@IsEmail()
	@IsEmailAlreadyExist({message: "Email already in use"})
	email: string;
	
	@Field() 
	password: string;
}