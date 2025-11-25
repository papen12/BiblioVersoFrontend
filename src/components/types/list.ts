import type { IconType } from 'react-icons';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon?: IconType;
};

export interface NavBarProps {
  items: NavItem[];
  logo: string;
  logoAlt?: string;
  className?: string;
}

export const socialItems: NavItem[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: '#',
    icon: FaFacebookF,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: '#',
    icon: FaInstagram,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: '#',
    icon: FaTwitter,
  },
  {
    id: 'email',
    label: 'Email',
    href: '#',
    icon: MdEmail,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: '#',
    icon: FaYoutube,
  },
];
