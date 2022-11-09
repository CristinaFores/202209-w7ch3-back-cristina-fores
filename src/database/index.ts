import mongoose from "mongoose";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("items:root");

export const connectDb = async (url: string) => {
  try {
    await mongoose.connect(url);
    debug(chalk.green(`Successfully connected to the data base`));
  } catch (error: unknown) {
    debug(
      chalk.red(
        `There was an error connecting to data base: ${
          (error as Error).message
        }`
      )
    );
  }
};
