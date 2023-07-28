
// eslint-disable-next-line react/prop-types
const Button = ({style , func , content}) => {
  return (
    <>
      <button className={style} onClick={func}>
        {content}
      </button>
    </>
  )
}

export default Button