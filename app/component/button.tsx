import React from "react";

interface SidebarButtonProps {
  label: string;
  current?: boolean;
  badgeCount?: number;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  current = false,
  badgeCount,
}) => {
  return (
    <button
      className={`
        flex items-center 
        w-full px-4 py-2 rounded-md
        text-sm font-medium
        transition-colors
        ease-in-out duration-1000
        ${
          current
            ? "bg-white/10 text-cyan-400" // active state
            : "text-white/70 hover:bg-[#c2e1f1] hover:text-[#11455D]"
        }
      `}
    >
      <span>{label}</span>

      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="text-xs bg-[#c2e1f1] text-[#11455D] rounded-full px-2 py-0.5 m-1 hover:text-[#11455D]">
          {badgeCount}
        </span>
      )}
    </button>
  );
};

export default SidebarButton;
