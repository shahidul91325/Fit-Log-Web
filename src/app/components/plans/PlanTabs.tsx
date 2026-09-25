"use client";

interface PlanTabsProps {
  activeTab: "today" | "saved";
  onChange: (tab: "today" | "saved") => void;
}

const PlanTabs = ({
  activeTab,
  onChange,
}: PlanTabsProps) => {
  return (
    <div className="inline-flex rounded-xl border border-[#292c35] bg-[#15171e] p-1">
      <button
        type="button"
        onClick={() => onChange("today")}
        className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
          activeTab === "today"
            ? "bg-[#242832] text-white shadow-sm"
            : "text-[#858b99] hover:text-white"}`}>Today&apos;s Plan 
            </button>

      <button
        type="button"
        onClick={() => onChange("saved")}
        className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
          activeTab === "saved"
            ? "bg-[#242832] text-white shadow-sm"
            : "text-[#858b99] hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;