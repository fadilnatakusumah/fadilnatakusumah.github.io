import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://fadilnatakusumah.vercel.app"
    : "";
export const RESUME =
  "https://drive.google.com/file/d/15zlvcRbXLTSQ6zVLTom7KqfZ-leK6pNT/view?usp=sharing";
export const HACKERRANK = "https://www.hackerrank.com/fadil_ntksmh";
export const GITHUB = "https://github.com/fadilnatakusumah";
export const LINKEDIN = "https://linkedin.com/in/muhammad-fadhilah-mulyana";
