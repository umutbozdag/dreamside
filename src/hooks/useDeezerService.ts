import React, { useEffect, useState } from "react";
import Deezer, { createDeezerService } from "../services/deezer";

export default function useDeezerService(appId: number) {
  const [service, setService] = useState<Deezer | null>(null);
  const deezerService = async () => {
    // todo: take appId from .env
    return await createDeezerService(400384);
  };

  deezerService().then((service: Deezer) => {
    setService(service);
  });
  return [service];
}
