import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarDropdownItem {
  icon: React.ReactNode;
  label: string;
  to?: string;
}

interface SidebarDropdownProps {
  icon: React.ReactNode;
  label: string;
  items: SidebarDropdownItem[];
  sidebarOpen?: boolean;
}

const SidebarDropdown = ({ 
  icon, 
  label, 
  items,
  sidebarOpen = true 
}: SidebarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors ${
          isOpen ? 'bg-gray-50' : ''
        }`}
      >
        {icon}
        <span className={`font-medium flex-1 text-right transition-all duration-300 ${
          !sidebarOpen ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
        }`}>
          {label}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${
          isOpen ? 'transform rotate-180' : ''
        } ${!sidebarOpen ? 'w-0 opacity-0' : ''}`} />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        {items.map((item, index) => (
          item.to ? (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors pl-8"
            >
              {item.icon}
              <span className={`font-medium transition-all duration-300 ${
                !sidebarOpen ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
              }`}>
                {item.label}
              </span>
            </Link>
          ) : (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors pl-8"
            >
              {item.icon}
              <span className={`font-medium transition-all duration-300 ${
                !sidebarOpen ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
              }`}>
                {item.label}
              </span>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default SidebarDropdown;