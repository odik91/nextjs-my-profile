import Link from "next/link";
import { Button } from "../ui/button";
import { RiDownloadLine } from "react-icons/ri";

export const MainLinkButton = ({ linkCv }: { linkCv: string }) => {
  return (
    <Button
      asChild
      className="rounded-full bg-rose-500 hover:bg-rose-600 hover:shadow-md hover:shadow-gray-900"
      variant="destructive"
    >
      <Link href={linkCv} target="_blank">
        <RiDownloadLine />
        <span className="ml-2 font-light">Download My CV</span>
      </Link>
    </Button>
  );
};

export const StandartLinkButton = ({
  link,
  text,
}: {
  link: string;
  text: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="text-center font-light text-rose-500 px-2 py-1 rounded-sm text-base border border-rose-500 hover:text-white hover:bg-rose-500 hover:font-normal hover:shadow-md hover:shadow-gray-300"
    >
      {text}
    </Link>
  );
};

export const MainButton = ({
  title,
  handleAction,
}: {
  title: string;
  handleAction?: () => React.ReactNode | void;
}) => {
  return <button className="px-4 py-2 border border-rose-500">{title}</button>;
};
