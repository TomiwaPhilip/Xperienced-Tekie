import Link from "next/link";
import Image from "next/image";

const Button = ({ params, name, svg, link}) => {
  return (
    <Link href={ link }>
        <button className={ params }>
            { name }
            { svg }
        </button>
    </Link>
  )
}

export default Button;