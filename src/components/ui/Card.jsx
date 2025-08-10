function Card({ className = '', children, ...props }) {
  return (
    <div className={`k-card ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export default Card
