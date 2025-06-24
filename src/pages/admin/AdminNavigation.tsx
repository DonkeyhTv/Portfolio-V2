import { Link, useLocation } from 'react-router-dom';
import { Mail, Database, ArrowLeft } from 'lucide-react';

export default function AdminNavigation() {
  const location = useLocation();

  const navItems = [
    {
      path: '/admin/dashboard',
      label: 'Dashboard',
      icon: Database,
      description: 'Manage projects',
    },
    {
      path: '/admin/messages',
      label: 'Messages',
      icon: Mail,
      description: 'View contact messages',
    },
  ];

  return (
    <nav className="bg-card border-b mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>

          <div className="flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                    ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}

            <div className="h-6 w-px bg-border mx-2" />

            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Site</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
