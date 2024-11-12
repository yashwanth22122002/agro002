import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, CloudSun, Wallet } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Package, label: 'Products', path: '/products' },
  { icon: CloudSun, label: 'Weather', path: '/weather' },
  { icon: Wallet, label: 'Loans', path: '/loans' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)]">
      <nav className="p-4 space-y-2">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-3 p-3 rounded-lg ${
              location.pathname === path
                ? 'bg-green-50 text-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}