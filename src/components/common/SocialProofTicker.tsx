import React, { useState, useEffect } from 'react';
import { Users, Star, Calendar, TrendingUp } from 'lucide-react';

interface Activity {
  id: number;
  type: 'booking' | 'review' | 'completion';
  message: string;
  time: string;
  icon: React.ReactNode;
}

const SocialProofTicker: React.FC = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const activities: Activity[] = [
    {
      id: 1,
      type: 'booking',
      message: 'John booked a Motorcycle Detail service',
      time: '2 hours ago',
      icon: <Calendar className="w-4 h-4" />
    },
    {
      id: 2,
      type: 'review',
      message: 'Maria left a 5-star review for Ceramic Coating',
      time: '5 hours ago',
      icon: <Star className="w-4 h-4" />
    },
    {
      id: 3,
      type: 'completion',
      message: '3 vehicles detailed today',
      time: 'Today',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      id: 4,
      type: 'booking',
      message: 'Carlos scheduled Paint Protection Film',
      time: '1 day ago',
      icon: <Calendar className="w-4 h-4" />
    },
    {
      id: 5,
      type: 'review',
      message: 'Jake: "Best detailing service in Las Piñas!"',
      time: '2 days ago',
      icon: <Star className="w-4 h-4" />
    },
    {
      id: 6,
      type: 'completion',
      message: '15+ satisfied customers this week',
      time: 'This week',
      icon: <Users className="w-4 h-4" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activities.length]);

  if (!isVisible) return null;

  const activity = activities[currentActivity];

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 animate-slide-up">
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-full ${
            activity.type === 'booking' ? 'bg-blue-100 text-blue-600' :
            activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
            'bg-green-100 text-green-600'
          }`}>
            {activity.icon}
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-800 font-medium">
              {activity.message}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {activity.time}
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofTicker;
