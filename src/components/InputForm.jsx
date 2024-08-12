// eslint-disable-next-line react/prop-types
const InputForm = ({children, onInputChange , ...props}) => {
    return (
        <div className='flex flex-col gap-1'>
          <label htmlFor={children} className="text-lg font-semibold">{children}</label>
          <input {...props} onChange={onInputChange} className='bg-transparent border-2 border-[#64748b] rounded-md h-full text-lg px-2 focus:outline-blue-500/50' name={children} id={children} type="number"></input>
        </div>
    )
}

export default InputForm;
