import Link from "next/link";
import Image from "next/image";

const Button = ({ params, name, svg}) => {
  return (
    <Link href="/">
        <button className={ params }>
            { name }
            { svg }
        </button>
    </Link>
  )
}

export default Button;