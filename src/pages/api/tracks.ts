import type { NextApiRequest, NextApiResponse } from "next";
import { ITrackItem, TracksResponseData } from "../../types/track";
import endpoints from "./_endpoints";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TracksResponseData>
) {
  fetch(`${endpoints.CHART}?limit=${req.query.limit}`)
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data.tracks.data);
    });
}
