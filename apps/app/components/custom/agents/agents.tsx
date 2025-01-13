import React from "react";
import { Card } from "../../ui/card";
import { ImagePlus } from "lucide-react";
import { Badge } from "../../ui/badge";

type Agent = {
  id: string;
  img: JSX.Element;
  state: string;
  name: string;
  description: string;
};

const agents: Agent[] = [
  {
    id: "1",
    name: "AI Assistant",
    description:
      "A conversational AI for answering customer queries. A conversational AI for answering customer queries. A conversational AI for answering customer queries.",
    img: <ImagePlus className="size-6 text-gray-900 " />,
    state: "Active",
  },
  {
    id: "2",
    name: "NLP",
    description: "An AI agent that provides product recommendations.",
    img: <ImagePlus className="size-6 text-gray-900 " />,
    state: "Inactive",
  },
  {
    id: "3",
    name: "Vision AI",
    description: "An AI agent for image recognition tasks.",
    img: <ImagePlus className="size-6 text-gray-900 " />,
    state: "Active",
  },
  {
    id: "4",
    name: "Sentiment Analyzer",
    description: "Analyzes customer feedback and determines sentiment.",
    img: <ImagePlus className="size-6 text-gray-900 " />,
    state: "Active",
  },
];

const Agents: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {agents.map((ag) => {
        return (
          <Card
            key={ag.id}
            className=" cursor-pointer p-2 sm:p-3 h-auto justify-between space-y-1.5 flex flex-col"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-lg w-fit bg-slate-100 p-1">
                {ag.img}
              </div>
              <h3 className="text-sm font-semibold ">{ag.name}</h3>
            </div>
            <p className="text-xs line-clamp-3">{ag.description}</p>
            <div className="flex gap-2">
              <Badge
                variant={`${ag.state === "Active" ? "secondary" : "destructive"}`}
              >
                {ag.state}
              </Badge>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Agents;
