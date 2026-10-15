import { useEffect, ReactPropTypes } from "react"


const Toast = ({ message, type, onClose }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [onClose])

  const style =
    type === "SUCCESS"
      ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 rounded-md bg-green-500 text-white max-w-md transition-transform"
      : "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 rounded-md bg-red-500 text-white max-w-md transition-transform";



  return (
    <div className={style}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">
          {message}
        </span>
      </div>
    </div>
  )
}

export default Toast