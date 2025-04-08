import { CallAPI } from "../../utils/callApi";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const audioActions = {
  fetchAllAudios: async function () {
    const url = new URL(`${serverUrl}/audio`);

    const audioResponse = await CallAPI({
      URL: url,
      METHOD: "get",
      HEADERS: { "content-type": "application/json" },
    });

    return audioResponse.data;
  },
  // deleteAudioByIds: async function (audioIds: string[]) {
  //   const url = new URL(`${serverUrl}/audio/${audioId}`)
  // }
};
