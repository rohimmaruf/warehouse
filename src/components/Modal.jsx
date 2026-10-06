const Modal = ({children}) => {
    return(
        <div className="  fixed bg-black/30 inset-0 z-50  justify-center items-center flex flex-col">
            <div className="bg-white shadow-2xl  p-4 gap-4 items-start flex flex-col w-fit h rounded-2xl">
               {children}
            </div>
        </div>
    )
}

export default Modal