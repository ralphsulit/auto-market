interface ButtonProps {
  title?: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <div className="h-10 px-1 py-2 m-10 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-red-600 focus:outline-none focus:bg-blue-400 w-64 cursor-pointer">
      {title}
    </div>
  )
}

export default Button;