"use client";

import Agents from "@/components/custom/agents/agents";
import AgentsCreateDialog from "@/components/custom/agents/AgentsCreateDialog";

export default function page() {
  return (
    <div className="flex flex-col h-full w-full items-start overflow-hidden px-5 md:px-2">
      <AgentsCreateDialog />
      <Agents />
    </div>
  );
}
