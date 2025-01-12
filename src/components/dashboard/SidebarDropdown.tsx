import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarDropdownProps {
  icon: React.ReactNode;
  label: string;
  items: { icon: React.ReactNode; label: string; }[];
  sidebarOpen: boolean;
}

const SidebarDropdown = ({
  icon,
  label,
  items,
  sidebarOpen
}: SidebarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen && sidebarOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:bg-gray-50 transition-colors">
        {icon}
        <span className={`font-medium flex-1 transition-all duration-300 whitespace-nowrap ${
          !sidebarOpen ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
        }`}>
          {label}
        </span>
        {sidebarOpen && (
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`} />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-gray-50">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-3 px-4 py-3 pr-8 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {item.icon}
            <span className={`font-medium transition-all duration-300 whitespace-nowrap ${
              !sidebarOpen ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
            }`}>
              {item.label}
            </span>
          </a>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarDropdown;