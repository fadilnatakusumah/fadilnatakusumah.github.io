"use client";

import { useEffect } from "react";

import { RESUME } from "../config";

function Resume() {
  useEffect(() => {
    if (window !== undefined) {
      window.location.replace(RESUME);
    }
    // const location = window?.location;
    // location.href = RESUME;
  }, []);

  return <></>;
}

export default Resume;
