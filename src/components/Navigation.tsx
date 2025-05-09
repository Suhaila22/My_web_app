import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, BrainCircuitIcon, CalendarIcon, CoinsIcon, UsersIcon, BellIcon } from 'lucide-react';
export function Navigation() {
  return <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around">
        <NavItem to="/" icon={<HomeIcon size={20} />} label="Trends" />
        <NavItem to="/summarizer" icon={<BrainCircuitIcon size={20} />} label="AI Summary" />
        <NavItem to="/events" icon={<CalendarIcon size={20} />} label="Events" />
        <NavItem to="/funding" icon={<CoinsIcon size={20} />} label="Funding" />
        <NavItem to="/forum" icon={<UsersIcon size={20} />} label="Forum" />
        <NavItem to="/notifications" icon={<BellIcon size={20} />} label="Alerts" />
      </div>
    </nav>;
}
interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}
function NavItem({
  to,
  icon,
  label
}: NavItemProps) {
  return <NavLink to={to} className={({
    isActive
  }) => `flex flex-col items-center py-2 px-3 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
      <div className="mb-1">{icon}</div>
      <span className="text-xs">{label}</span>
    </NavLink>;
}