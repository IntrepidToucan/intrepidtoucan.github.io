import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <p>
          Nothing to see here! Maybe you're looking for my{" "}
          <a href="/portfolio/">portfolio</a>?
        </p>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
