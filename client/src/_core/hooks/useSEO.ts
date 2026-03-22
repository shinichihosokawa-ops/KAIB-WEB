import { useEffect } from "react";

const OGP_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663255440915/pZrMXUTAEjDsCOGE.jpg";
const SITE_NAME = "KAIB - Kagawa Innovation Base";
const BASE_URL = "https://kaib.jp";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

function setMetaTag(property: string, content: string, isName = false) {
  const attr = isName ? "name" : "property";
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({ title, description, path, type = "website" }: SEOProps) {
  useEffect(() => {
    document.title = title;

    // General meta
    setMetaTag("description", description, true);

    // OGP
    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:type", type);
    setMetaTag("og:url", `${BASE_URL}${path}`);
    setMetaTag("og:image", OGP_IMAGE);
    setMetaTag("og:site_name", SITE_NAME);

    // Twitter Card
    setMetaTag("twitter:title", title, true);
    setMetaTag("twitter:description", description, true);
    setMetaTag("twitter:image", OGP_IMAGE, true);
  }, [title, description, path, type]);
}
