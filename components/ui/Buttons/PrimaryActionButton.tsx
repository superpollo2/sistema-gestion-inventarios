import { ActionButtonProps } from './Types';

const PrimaryActionButton = ({
  onClick,
  text,
  type = 'button',
}: ActionButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
    className='px-3 py-2 font-semibold bg-[#E85D04]  rounded-md hover:scale-110 shadow-md'
    >
    <span className='text-slate-200 text-md'>{text}</span> 
    </button>
  );
};

export { PrimaryActionButton };