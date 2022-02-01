import dotenv from "dotenv-safe";

const main = async() => {
	console.log("starting ...");
	dotenv.config();
}

main().catch((err) => {
	console.error(err);
})