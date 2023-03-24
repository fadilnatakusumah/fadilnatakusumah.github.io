import { useEffect } from "react";

import { RESUME } from "../config";

function Resume() {
  useEffect(() => {
    const location = window?.location;
    location.href = RESUME;
  }, []);

  return null;
}

export default Resume;
