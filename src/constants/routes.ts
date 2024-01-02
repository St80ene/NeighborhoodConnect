const ROUTES: Record<string, { pathname: string }> = {
  HOME: { pathname: "/" },
  FORBIDDEN: { pathname: "forbidden" },
};

export default Object.freeze(ROUTES);
