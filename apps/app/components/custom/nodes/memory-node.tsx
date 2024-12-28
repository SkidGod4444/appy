'use client';

import { Handle, Position, useReactFlow } from '@xyflow/react';
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const options = [
  { id: '1', label: 'Memory 1' },
  { id: '2', label: 'Memory 2' },
  { id: '3', label: 'Memory 3' },
  { id: '4', label: 'Memory 4' },
  { id: '5', label: 'Memory 5' },
];


import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface MemoryNodeProps {
  data: {
    label: string;
    selected?: string;
  };
  id: string;
  onDelete?: (nodeId: string) => void;
}

export function MemoryNode({ data, id, onDelete }: MemoryNodeProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(data.selected || '');

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: typeof options[0]) => {
    setSelected(option.label);
    setIsOpen(false);
    setSearchTerm('');
  };

  const { setNodes } = useReactFlow();
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div className="rounded-lg flex items-center group">
      <div className="p-1 bg-white shadow-md rounded-lg relative">
        <Handle type="target" position={Position.Top} className="w-2 h-2 absolute bottom-0" />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between border dark:border-gray-200 dark:bg-white dark:text-black"
            >
              {value
                ? options.find((options) => options.label === value)?.label
                : "Select Memory..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search Memory..." />
              <CommandList>
                <CommandEmpty>No Memory found.</CommandEmpty>
                <CommandGroup>
                  {options.map((options) => (
                    <CommandItem
                      key={options.id}
                      value={options.label}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                      onClick={() => handleSelect(options)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === options.label ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {options.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
          <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
        </Popover>
      </div>
      <div className='bg-transparent flex items-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'>
        <button
          aria-label="Delete Node Provider"
          className="text-red-500 bg-transparent p-1 hover:bg-gray-100 rounded-full pointer-events-auto"
          onClick={() => {
            if (onDelete) {
              onDelete(id);
            } else {
              setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
            }
          }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
} 