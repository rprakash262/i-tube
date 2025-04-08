type CallAPIProps = {
  URL: URL;
  METHOD: "get" | "post" | "put" | "patch" | "delete";
  HEADERS?: any;
  BODY?: any;
};
export const CallAPI = async ({ URL, METHOD, HEADERS, BODY }: CallAPIProps) => {
  const response = await fetch(URL, {
    method: METHOD,
    headers: HEADERS,
    body: BODY,
  });

  const jsonResponse = await response.json();

  return jsonResponse;
};
