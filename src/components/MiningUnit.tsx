import { FC } from "react";

const MiningUnit: FC = () => {
  return (
    <div className="mining-background">
      <svg
        width="150"
        height="100"
        viewBox="0 0 150 100"
        xmlns="http://www.w3.org/2000/svg"
        className="dig-unit"
      >
        {/* Body of the excavator */}
        <rect x="20" y="50" width="60" height="20" fill="#333" />
        
        {/* Arm */}
        <rect
          x="60"
          y="40"
          width="10"
          height="30"
          fill="#0070f3"
          className="digging-arm arm"
        />
        
        {/* Shovel */}
        <rect
          x="65"
          y="65"
          width="15"
          height="10"
          fill="#0070f3"
          className="digging-arm shovel"
        />
        
        {/* Tracks */}
        <rect x="15" y="70" width="70" height="10" fill="#555" />
      </svg>
    </div>
  );
};

export default MiningUnit;
