
interface ButtonProps {
    text: string
    type: string
    handleClick?: () => void
}

const Button = ({ text, type, handleClick = () => { } }: ButtonProps) => {
    return (
        <button
            onClick={handleClick}
            className={` ${type === 'primary' ? 'px-8 py-2 font-bold bg-[#03071E] ' :  'px-3 py-2 font-semibold bg-[#E85D04]  '}  rounded-md hover:scale-110 shadow-md`}>
               
            <span className={`${type === 'primary' ? 'text-[#E85D04]' :  'text-slate-200 ' } text-md `}> {text}</span>
        </button>
    )
}

export { Button }