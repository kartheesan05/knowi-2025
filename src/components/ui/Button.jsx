function Button({ href, className = '', children, ...props }) {
  const baseClasses = 'btn'
  const combinedClasses = `${baseClasses} ${className}`.trim()

  if (href) {
    return (
      <a className={combinedClasses} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
