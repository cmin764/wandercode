import Cal from "@calcom/embed-react";
import { type CSSProperties, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

interface CalEmbedProps {
  calLink: string;
  style?: CSSProperties;
}

interface CalEmbedImplProps extends CalEmbedProps {
  resolvedTheme: "light" | "dark";
}

const CalEmbedImpl = ({ calLink, style, resolvedTheme }: CalEmbedImplProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iframe = containerRef.current?.querySelector("iframe");
    if (iframe && !iframe.title) iframe.title = "Book a call";
  });

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
        namespace={`inline-${resolvedTheme}`}
        calLink={`${calLink}?theme=${resolvedTheme}`}
        style={style ?? { width: "100%", height: "100%", overflow: "scroll" }}
      />
    </div>
  );
};

// FIXME: https://github.com/calcom/cal.diy/issues/28979
// @calcom/embed-react ignores config prop changes after initial mount because
// its internal init effect is guarded by a one-time ref, making the dep array
// entry for `config` a no-op. The workaround here forces a full remount on
// theme change (key + unique namespace) and bakes the theme into the calLink
// URL param so it is applied at iframe load time. Once the upstream bug is
// fixed, this can collapse into a single <Cal> instance with config={{ theme }}
// and no inner/outer split needed.
const CalEmbed = ({ calLink, style }: CalEmbedProps) => {
  const { resolvedTheme } = useTheme();
  return (
    <CalEmbedImpl
      key={resolvedTheme}
      calLink={calLink}
      style={style}
      resolvedTheme={resolvedTheme}
    />
  );
};

export default CalEmbed;
