const Button = ({onClick = () => {}, title='', icon = null, varian="primary"}) => {   
    
    const buttonVarian = {
        primary : 'text-white font-normal hover:bg-warehouse-sidebar-dark   bg-warehouse-sidebar-active',
        secondary : 'text font-bold bg-white border-2 border-gray-400 hover:bg-gray-500'
    }

    return (
        <button className={`rounded-xl py-2 px-4 flex items-center cursor-pointer gap-2 ${buttonVarian[varian]}`} onClick={onClick}>{icon}{title}</button>
    )
}

export default Button