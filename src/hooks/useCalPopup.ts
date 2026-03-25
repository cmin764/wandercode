import { getCalApi } from "@calcom/embed-react";
import { CAL_LINK_DISCOVERY } from "@/lib/constants";
import { useTheme } from "@/hooks/useTheme";

export function useCalPopup(calLink: string = CAL_LINK_DISCOVERY) {
  const { resolvedTheme } = useTheme();

  return async () => {
    try {
      const cal = await getCalApi({ namespace: "popup" });
      cal("ui", { theme: resolvedTheme });
      cal("modal", { calLink });
    } catch {
      const url = `https://cal.com/${calLink}`;
      const tab = window.open(url, "_blank");
      // Fall back to same-tab navigation if the browser blocked the popup.
      if (!tab) window.location.href = url;
    }
  };
}
