import { Button } from "../components/Button";
import LogoJordanCortes from "../public/images/jordancortes";
import IconLinkedin from "../public/images/icon-linkedin";
import IconGithub from "../public/images/icon-github";
import IconEmail from "../public/images/icon-email";

export default function Home() {
  return (
    <div className="flex flex-col bg-neutral-900 h-screen">
      <div className="flex flex-col grow justify-center">
        <h1 className="text-white overflow-x-hidden text-3xl font-light">
          <span className="ml-4 mb-4 block">Hi! 👋🏼 I&apos;m</span>
          <LogoJordanCortes className="-ml-9 -mr-9 fill-white" />
          <span className="float-right mr-4 mt-4 block">a web developer</span>
        </h1>

        <div className="flex flex-col self-center space-y-4 mt-8">
          <Button variant="secondary">View Work</Button>
          <Button variant="secondary">View Resume</Button>
        </div>
      </div>
      <div className="flex text-white grow-0 justify-center space-x-8 mb-4">
        <IconEmail className="stroke-white" />
        <IconGithub className="fill-white" />
        <IconLinkedin className="fill-white" />
      </div>
    </div>
  );
}
