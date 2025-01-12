import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  sidebarOpen?: boolean;
  to?: string;
}

const SidebarItem = ({ 
  icon, 
  label, 
  active = false,
  sidebarOpen = true,
  to
}: SidebarItemProps) => {
  const content = (
    <div
      className={`flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer ${
        active ? 'text-primary border-r-2 border-primary bg-blue-50' : ''
      }`}
    >
      {icon}
      <span className={`font-medium transition-all duration-300 whitespace-nowrap ${
        !sidebarOpen ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
      }`}>
        {label}
      </span>
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
};

export default SidebarItem;