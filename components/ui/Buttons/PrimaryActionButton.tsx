import { ActionButtonProps } from './Types';

const PrimaryActionButton = ({
  loading,
  onClick,
  text,
  type = 'button',
}: ActionButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`px-3 py-2 font-semibold ${loading ? 'bg-slate-400' : 'bg-[#E85D04]'} rounded-md ${
        loading ? '' : 'hover:scale-110'
      } shadow-md`}
    >
      <span  
      className={`${loading ? 'text-slate-800' : 'text-slate-200'} text-md `}>{text}</span>
    </button>
  );
};

export { PrimaryActionButton };