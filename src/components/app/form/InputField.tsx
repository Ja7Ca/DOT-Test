
type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const InputField: React.FC<InputFieldProps> = ({name, type='text', className="form-input", ...props}) => {
  return (
    <input type={type} name={name} className={className} {...props}/>
  )
}

export default InputField