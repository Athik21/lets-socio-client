import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import sponcer from "sponcer.jpg"

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={sponcer}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>NullClass</Typography>
        <Typography color={medium}><a href="https://nullclass.com/" target="_blank" style={{ textDecoration: "none" }}>nullclass.com</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        NullClass brings you an opportunity full of knowledge-packed industry-based real-time projects. You get an opportunity to apply your knowledge in a real-world environment to gain experience by building your real-time project from scratch
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
