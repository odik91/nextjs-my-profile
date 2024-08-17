'use client'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
}) => {
  const {isVisible, elementRef} = useIntersectionObserver(0.1, true)
  return (
    <Card className={`relative rounded-none mb-6 transition-all duration-1000 ease-in-out delay-75 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`} ref={elementRef}>
      <CardHeader>
        <CardTitle className="text-xl text-gray-700 font-medium capitalize">
          {title}
        </CardTitle>
        <div className="max-w-[50px] text-rose-400 shadow-md shadow-white absolute -top-8 bg-white">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <p
          className="opacity-80 text-gray-700"
          style={{
            fontSize:
              "calc(13px + (14 - 13) * ((100vw - 300px) / (1300 - 300)))",
          }}
        >
          You want to create a website or a website-based application. You can
          rely on me as a web developer to create websites and applications that
          will help you promote your business and simplify your operations. You
          don&apos;t have to wait any longer. I have these abilities, as
          evidenced by the attachments to my portfolio.
        </p>
      </CardContent>
    </Card>
  );
};
export default ServiceCard;
