export const hello = (request, response) => {
  response.send("Hello. Is it me you're looking for?");
};

export const helloPerson = (request, response) => {
  const { person } = request.params; // herr we extract person from the response
  response.send(`hello there, ${person}.`);
};

export const greetNewPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  //response.send({ firstName, lastName });
  response.send("Hello there, ${firstName} ${lastName}. ");
};
