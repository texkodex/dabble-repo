import argon2 from "argon2";
import { User } from "../../entity/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "hello world";
  }

  @Mutation(() => User)
  async register(
    @Arg("data") { firstName, lastName, email, password }: RegisterInput,
  ): Promise<User> {
    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();

    return user;
  }
}
