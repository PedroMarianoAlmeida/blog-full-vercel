import Link from "next/link";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <p>Simple blog using full Vercel stack:</p>
      <ul>
        <li>NextJS 13</li>
        <li>Next Auth</li>
        <li>Vercel Postgres</li>
      </ul>
      Repository available on{" "}
      <Link href="https://github.com/PedroMarianoAlmeida/blog-full-vercel">
        <span className="text-orange-600">Github</span>
      </Link>
    </>
  );
};

export default About;
