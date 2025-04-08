import { CallAPI } from "../../utils/callApi";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const genreActions = {
  fetchGenresByIds: async function (genreIds: string[]) {
    const url = new URL(`${serverUrl}/genre/ids`);

    const genreResponse = await CallAPI({
      URL: url,
      METHOD: "post",
      HEADERS: { "content-type": "application/json" },
      BODY: JSON.stringify({ ids: genreIds }),
    });

    return genreResponse.data;
  },
};
