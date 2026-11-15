import { CAL_BASE_URL, CAL_LINK_DISCOVERY } from "@/lib/constants";
import { useTheme } from "@/hooks/useTheme";

export function useCalPopup(calLink: string = CAL_LINK_DISCOVERY) {
  const { resolvedTheme } = useTheme();

  return async () => {
    const namespace = `popup-${resolvedTheme}`;
    try {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ namespace });
      cal("ui", { theme: resolvedTheme });
      cal("modal", { calLink });
    } catch {
      const url = `${CAL_BASE_URL}/${calLink}`;
      const tab = window.open(url, "_blank");
      // Fall back to same-tab navigation if the browser blocked the popup.
      if (!tab) window.location.href = url;
    }
  };
}
