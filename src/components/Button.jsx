
const Button = ({name , onClickFun}) => {
  return (
    <button onClick={onClickFun}>
            {name}
    </button>
  )
}

export default Button