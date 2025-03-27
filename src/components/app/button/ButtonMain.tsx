import styles from "./ButtonMain.module.css";

type ButtonMainProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const ButtonMain: React.FC<ButtonMainProps> = ({ label, className=styles.button, ...props }) => {
  return <button className={className} {...props}>{label}</button>;
};

export default ButtonMain;
