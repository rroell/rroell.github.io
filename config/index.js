// Choose what server to use: localhost:3000 when in development or websiteName else.
const dev = process.env.NODE_ENV !== "production";
const websiteName =
  "https://raw.githubusercontent.com/rroell/rroell.github.io/main";
export const server = dev ? "http://localhost:3000" : websiteName;
