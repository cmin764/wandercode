import { getCalApi } from "@calcom/embed-react";
import { CAL_LINK_DISCOVERY } from "@/lib/constants";

export function useCalPopup() {
  return async () => {
    const cal = await getCalApi();
    cal("modal", { calLink: CAL_LINK_DISCOVERY });
  };
}
