import { useEffect } from "react";

const DEFAULT_TITLE = "Line-Marking.co.nz | Professional Line Marking Services NZ";
const DEFAULT_DESCRIPTION = "Professional line marking services across Christchurch, Auckland and New Zealand. Car park marking, industrial safety lines, sports courts, playground games, epoxy flooring. Call 022 439 3344 for a free quote.";
const SITE_URL = "https://line-marking.co.nz";
const SCHEMA_SCRIPT_ID = "page-schema-ld";

function setMetaTag(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function injectSchema(schema: object) {
  let el = document.getElementById(SCHEMA_SCRIPT_ID) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = SCHEMA_SCRIPT_ID;
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

function removeSchema() {
  const el = document.getElementById(SCHEMA_SCRIPT_ID);
  if (el) el.remove();
}

interface PageMeta {
  title: string;
  description: string;
  path?: string;
  schema?: object;
}

export function usePageTitle(titleOrMeta: string | PageMeta) {
  const meta = typeof titleOrMeta === "string"
    ? { title: titleOrMeta, description: DEFAULT_DESCRIPTION, path: "/" }
    : titleOrMeta;

  useEffect(() => {
    document.title = meta.title;
    setMetaTag("description", meta.description);
    setMetaTag("og:title", meta.title, true);
    setMetaTag("og:description", meta.description, true);
    setMetaTag("og:url", `${SITE_URL}${meta.path || "/"}`, true);
    setCanonical(`${SITE_URL}${meta.path || "/"}`);
    if (meta.schema) {
      injectSchema(meta.schema);
    } else {
      removeSchema();
    }

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaTag("description", DEFAULT_DESCRIPTION);
      setMetaTag("og:title", DEFAULT_TITLE, true);
      setMetaTag("og:description", DEFAULT_DESCRIPTION, true);
      setMetaTag("og:url", SITE_URL, true);
      setCanonical(SITE_URL);
      removeSchema();
    };
  }, [meta.title, meta.description, meta.path]);
}
