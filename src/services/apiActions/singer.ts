import { CallAPI } from "../../utils/callApi";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const singerActions = {
  fetchSingersByIds: async function (singerIds: string[]) {
    const url = new URL(`${serverUrl}/singer/ids`);

    const singerResponse = await CallAPI({
      URL: url,
      METHOD: "post",
      HEADERS: { "content-type": "application/json" },
      BODY: JSON.stringify({ ids: singerIds }),
    });

    return singerResponse.data;
  },
};
