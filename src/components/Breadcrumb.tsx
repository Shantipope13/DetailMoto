import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const getBreadcrumbItems = (pathname: string): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [];
    
    // Always start with home
    items.push({ label: 'Home', path: '/' });
    
    // Handle different routes
    if (pathname === '/') {
      return items;
    }
    
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // Build breadcrumb items based on path segments
    pathSegments.forEach((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      let label = segment;
      
      // Convert path segments to readable labels
      switch (segment) {
        case 'services':
          label = 'Services';
          break;
        case 'motorcycle-detailing':
          label = 'Motorcycle Detailing';
          break;
        case 'ceramic-coating':
          label = 'Ceramic Coating';
          break;
        case 'paint-protection-film':
          label = 'Paint Protection Film';
          break;
        case 'about':
          label = 'About';
          break;
        case 'gallery':
          label = 'Gallery';
          break;
        case 'contact':
          label = 'Contact';
          break;
        case 'booking':
          label = 'Booking';
          break;
        default:
          // Capitalize first letter and replace hyphens with spaces
          label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      }
      
      items.push({
        label,
        path,
        isActive: index === pathSegments.length - 1
      });
    });
    
    return items;
  };
  
  const breadcrumbItems = getBreadcrumbItems(location.pathname);
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
              )}
              
              {item.isActive ? (
                <span
                  className="text-primary-orange font-medium"
                  aria-current="page"
                >
                  {index === 0 ? (
                    <Home className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    item.label
                  )}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded-lg px-1 py-1"
                >
                  {index === 0 ? (
                    <Home className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;