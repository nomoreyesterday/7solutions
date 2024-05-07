interface LayoutColumnProps {
  text: string
  children : React.ReactNode
}

export const LayoutColumn = ({ text, children } : LayoutColumnProps) => {
  return (
    <div className="grid grid-cols-1 justify-center border border-solid border-gray-200 shadow-sm">
      <div className='w-full flex flex-col gap-y-4 p-auto mx-auto mt-0 '>
        <div className='w-full grid gap-4 overflow-hidden'>
          <h1 className='w-full bg-[#eff1f3] flex items-center justify-center py-2 font-[700] text-[24px]'>{text}</h1>
          <div className='grid grid-cols-1 gap-y-2 px-4'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}