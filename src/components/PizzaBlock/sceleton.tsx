import React from "react";
import ContentLoader from "react-content-loader";

interface SceletonProps {
  speed?: number;
  width?: number;
  height?: number;
  viewBox?: string;
  backgroundColor?: string;
  foregroundColor?: string;
}

const Sceleton: React.FC<SceletonProps> = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="106" cy="123" r="90" />
    <rect x="26" y="231" rx="0" ry="0" width="160" height="33" />
    <rect x="3" y="273" rx="0" ry="0" width="204" height="50" />
    <rect x="36" y="344" rx="0" ry="0" width="141" height="27" />
  </ContentLoader>
);

export default Sceleton;
