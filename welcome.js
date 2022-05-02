import { response } from "express";

export const welcomeHome = (request, response) => {
  response.send("Welcome to our API!");
};
