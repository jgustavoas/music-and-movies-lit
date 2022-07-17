/* eslint-disable no-param-reassign */
export default async (screen, app) => {
  const model = screen.toLowerCase();
  const order = screen.slice(0, -1).toLowerCase();

  app.data = await fetch(`http://localhost:3000/${model}?by=${order}`)
    .then(response => response.json())
    .then(data => data);

  app.screen = screen;
};
