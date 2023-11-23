import Link from "next/link";

const Button = ({ params, name, svg, link }) => {
  return (
    <Link href={link}>
      <button className={params}>
        {name}
        {svg}
      </button>
    </Link>
  );
};

export default Button;
