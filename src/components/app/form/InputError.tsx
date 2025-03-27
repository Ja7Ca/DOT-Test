type InputErrorProps = {
  text: string;
}
const InputError:React.FC<InputErrorProps> = ({text}) => {
  return (
    <p className="input-error">{text}</p>
  )
}

export default InputError