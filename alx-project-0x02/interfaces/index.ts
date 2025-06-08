export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount?: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

export interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}