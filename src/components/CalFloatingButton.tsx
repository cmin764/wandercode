import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useLocation } from "react-router-dom";

interface CalFloatingButtonProps {
  calLink: string;
  buttonText?: string;
}

const CalFloatingButton = ({ calLink, buttonText = "Book a Call" }: CalFloatingButtonProps) => {
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink,
        buttonText,
        buttonColor: "#000000",
        buttonTextColor: "#ffffff",
        hideButtonIcon: false,
      });
      cal("ui", { hideEventTypeDetails: false });
    })();
  }, [calLink, buttonText]);

  if (location.pathname === "/contact") return null;

  return null;
};

export default CalFloatingButton;
