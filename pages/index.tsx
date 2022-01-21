import { Button } from "../components/Button";
import LogoJordanCortes from "../public/images/jordancortes";
import IconLinkedin from "../public/images/icon-linkedin";
import IconGithub from "../public/images/icon-github";
import IconEmail from "../public/images/icon-email";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-neutral-900 h-screen">
      <div className="flex flex-col grow justify-center">
        <h1 className="text-white overflow-x-hidden text-3xl font-light md:text-4xl">
          <span className="ml-4 mb-4 block">Hi! 👋🏼 I&apos;m</span>
          <LogoJordanCortes className="-ml-9 -mr-9 fill-white md:-ml-20 md:-mr-20" />
          <span className="float-right mr-4 mt-4 block">a web developer</span>
        </h1>

        <div className="flex flex-col self-center space-y-4 mt-8 md:flex-row md:space-y-0 md:space-x-8 md:mt-12">
          <Button variant="secondary" disabled>
            View Work
          </Button>
          <Button variant="secondary" disabled>
            View Resume
          </Button>
        </div>
      </div>
      <div className="flex text-white grow-0 justify-center space-x-8 mb-4 md:mb-12">
        <Link href="mailto:hello@jordancortes.com">
          <a>
            <IconEmail className="stroke-white active:stroke-primary" />
          </a>
        </Link>
        <Link href="https://github.com/jordancortes">
          <a>
            <IconGithub className="fill-white active:fill-primary" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/jordancortesg/">
          <a>
            <IconLinkedin className="fill-white active:fill-primary" />
          </a>
        </Link>
      </div>
    </div>
  );
}
