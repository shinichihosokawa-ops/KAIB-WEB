import { useEffect, type ComponentType } from "react";
import { useLanguage } from "@/_core/hooks/useLanguage";

/**
 * Wrapper that sets language to English when rendering a page via /en/* route.
 */
export default function EnglishRoute({ component: Component }: { component: ComponentType }) {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage("en");
  }, [setLanguage]);

  return <Component />;
}
