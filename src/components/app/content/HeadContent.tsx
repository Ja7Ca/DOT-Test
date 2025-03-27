type HeadContentProps = {
  title: string
  children: React.ReactNode; 
}

const HeadContent: React.FC<HeadContentProps> = ({children, title}) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default HeadContent