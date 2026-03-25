import { getCalApi } from "@calcom/embed-react";
import { CAL_LINK_DISCOVERY } from "@/lib/constants";

export function useCalPopup() {
  return async () => {
    try {
      const cal = await getCalApi({ namespace: "popup" });
      cal("modal", { calLink: CAL_LINK_DISCOVERY });
    } catch {
      window.location.href = `https://cal.com/${CAL_LINK_DISCOVERY}`;
    }
  };
}
