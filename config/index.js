// Choose what server to use: localhost:3000 when in development or websiteName else.
const dev = process.env.NODE_ENV !== "production";
const websiteName = "https://rroell.github.io";
export const server = dev ? "http://localhost:3000" : websiteName;
