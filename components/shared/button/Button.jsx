import Link from "next/link";

const Button = ({ name, svg, link }) => {
  const params = "rounded-xl bg-pink-200 border-blue-900 border-4 pl-2 mt-5";
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
