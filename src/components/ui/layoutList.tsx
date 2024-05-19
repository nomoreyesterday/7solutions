interface LayoutListProps {
  children : React.ReactNode
}

export const LayoutList = ({ children } : LayoutListProps) => {
  return (
    <div className="min-h-[80vh] todolist grid grid-cols-1 gap-y-1">
      <div className='flex flex-col gap-y-2 sm:gap-y-4'>
        {children}
      </div>
    </div>
  )
}