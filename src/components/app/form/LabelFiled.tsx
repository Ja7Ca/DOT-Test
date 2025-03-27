type LabelFieldProps = {
  title: string;
  htmlFor: string;
};

const LabelField: React.FC<LabelFieldProps> = ({ title = "Label", htmlFor = "for" }) => {
  return <label htmlFor={htmlFor} className="form-label">{title}</label>;
};

export default LabelField;
