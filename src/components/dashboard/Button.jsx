const Button = ({title, variant=""}) => {

    const buttonVarian = {
        primary : "bg-amber-600 text-white",
        secondary : "bg-amber-800 text-amber-500",
    
    }

    return <button className={`rounded-xl px-4 py-2 w-fit ${buttonVarian[variant]}`}>
        {title}
    </button>
}

export default Button