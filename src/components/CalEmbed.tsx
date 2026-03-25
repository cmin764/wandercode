import Cal from "@calcom/embed-react";
import { useTheme } from "@/hooks/useTheme";

interface CalEmbedProps {
  calLink: string;
  style?: React.CSSProperties;
}

const CalEmbed = ({ calLink, style }: CalEmbedProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Cal
      calLink={calLink}
      style={style ?? { width: "100%", height: "100%", overflow: "scroll" }}
      config={{ theme: resolvedTheme }}
    />
  );
};

export default CalEmbed;
