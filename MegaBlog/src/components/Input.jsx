import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    placeholder = '',
    ...props

},ref){
    const id = useId()
    return (

        <div className='w-full flex '>
            {
                label && <label className='text-sm text-gray-700' htmlFor={id} >
                    {label}
                </label>
            }
            <input
            type={type}
            className={`${className} px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            ref ={ref}
            {...props}
            id={id}
            placeholder={placeholder}
            />
            
        </div>
    )
})

export default Input
