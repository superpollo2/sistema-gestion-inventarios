export interface ActionButtonProps {
    loading: boolean;
    onClick: () => void;
    text: string;
    type?: 'button' | 'submit' | 'reset';
  }