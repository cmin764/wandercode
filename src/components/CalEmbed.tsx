import Cal from "@calcom/embed-react";
import { type CSSProperties, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

interface CalEmbedProps {
  calLink: string;
  style?: CSSProperties;
}

const CalEmbed = ({ calLink, style }: CalEmbedProps) => {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Cal.com's embed SDK calls scrollIntoView on its own root element (the
    // iframe or its wrapper) on every booking step transition. Patching the
    // instance alone doesn't help because the call target is inside the Cal
    // component tree, not our wrapper. Instead, we intercept at the prototype
    // level and suppress only calls whose target lives inside our container,
    // leaving all other page scrollIntoView behaviour intact.
    const original = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (this: Element, ...args) {
      if (container.contains(this)) return;
      original.apply(this, args);
    };
    return () => {
      Element.prototype.scrollIntoView = original;
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Cal
        namespace="inline"
        calLink={calLink}
        style={style ?? { width: "100%", height: "100%", overflow: "scroll" }}
        config={{ theme: resolvedTheme }}
      />
    </div>
  );
};

export default CalEmbed;
