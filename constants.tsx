
import React from 'react';
import { Shield, School, ShoppingBag, UserCheck, Video, Bell, Navigation, Fence, Home } from 'lucide-react';
import { Service } from './types';

export const COMPANY = {
  name: "Apple Security Nigeria Limited",
  established: 2004,
  ceo: "Lion Steven Adetomiwa",
  email: "nigeriaassetprotections@gmail.com",
  phone: "+234 814 587 5675",
  whatsapp: "+2348145875675",
  facebook: "Apple Security Ltd",
  locations: {
    head: {
      title: "Head Office",
      address: "Plot 7, Block IV, Oluyole Extension (Sharp Corner), Ibadan, Oyo State, Nigeria"
    },
    lagos: {
      title: "Lagos Branch Office",
      address: "Block D4, Shop 21, Olugbede Model Market, Egbeda, Lagos, Nigeria"
    }
  }
};

export const SERVICES: Service[] = [
  {
    id: "manned-security",
    title: "Manned Security / Guards",
    description: "Highly trained, professional security personnel for on-site protection and monitoring.",
    useCase: "Ideal for corporate offices, residential estates, and industrial complexes requiring physical presence.",
    icon: "Shield"
  },
  {
    id: "school-security",
    title: "School Security",
    description: "Specialized protection for educational institutions, ensuring the safety of students and staff.",
    useCase: "Crucial for private and public schools, universities, and training centers.",
    icon: "School"
  },
  {
    id: "shopping-security",
    title: "Shopping Centre Security",
    description: "Retail security solutions to prevent loss, manage crowds, and ensure a safe shopping experience.",
    useCase: "Designed for malls, supermarkets, and large retail outlets.",
    icon: "ShoppingBag"
  },
  {
    id: "executive-protection",
    title: "Employee / Executive Protection",
    description: "Personalized security services for high-profile individuals and corporate executives.",
    useCase: "Essential for VIP travel, high-stakes business meetings, and personal safety.",
    icon: "UserCheck"
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & Live Camera Surveillance",
    description: "Advanced 24/7 monitoring systems with remote access and high-definition clarity.",
    useCase: "Perfect for warehouses, retail stores, and monitoring of private properties.",
    icon: "Video"
  },
  {
    id: "alarm-systems",
    title: "Alarm Systems",
    description: "Intrusion detection systems that provide immediate alerts in case of unauthorized entry.",
    useCase: "Recommended for homes, offices, and secure vaults.",
    icon: "Bell"
  },
  {
    id: "gps-tracking",
    title: "GPS Tracking Solutions",
    description: "Real-time vehicle and fleet monitoring with engine cut-off capabilities.",
    useCase: "Best for fleet managers, transport companies, and private vehicle owners.",
    icon: "Navigation"
  },
  {
    id: "perimeter-fencing",
    title: "Perimeter Fencing",
    description: "Electric fencing and physical barriers designed to deter intruders.",
    useCase: "Applied to residential compounds, estates, and sensitive industrial zones.",
    icon: "Fence"
  },
  {
    id: "property-security",
    title: "All Property Security",
    description: "Comprehensive management of property assets, including access control and patrols.",
    useCase: "Tailored for estate managers and large property owners.",
    icon: "Home"
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case "Shield": return <Shield className="w-8 h-8" />;
    case "School": return <School className="w-8 h-8" />;
    case "ShoppingBag": return <ShoppingBag className="w-8 h-8" />;
    case "UserCheck": return <UserCheck className="w-8 h-8" />;
    case "Video": return <Video className="w-8 h-8" />;
    case "Bell": return <Bell className="w-8 h-8" />;
    case "Navigation": return <Navigation className="w-8 h-8" />;
    case "Fence": return <Fence className="w-8 h-8" />;
    case "Home": return <Home className="w-8 h-8" />;
    default: return <Shield className="w-8 h-8" />;
  }
};
