"use client"

import { RESUME_LINK } from "@/lib/data"
import { useRouter } from "next/navigation";
import { useEffect } from "react"



function Resume() {
  const router = useRouter()

  useEffect(() => {
    window.open(RESUME_LINK, "_blank")

    setTimeout(() => {
      router.push("/")
    }, 500)

  }, []);

  return null;
}

export default Resume 