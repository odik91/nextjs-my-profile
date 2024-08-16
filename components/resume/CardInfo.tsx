'use client'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import SingleWordUnderline from "../global/SingleWordUnderline";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CardContentLists from "./CardContentLists";
import CardSkillLists from "./CardSkillLists";

type DataProps = {
  header: string;
  subHeader: string;
  description?: string;
};

type typeContentProp = 'content' | 'skill'

const CardInfo = ({
  title,
  type,
  data,
}: {
  title: string;
  type: typeContentProp;
  data: DataProps[];
}) => {
  const {isVisible, elementRef} = useIntersectionObserver(0.1, false)
  return (
    <Card className={`shadow-md shadow-gray-300 transition-all duration-1000 ease-in-out delay-75 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`} ref={elementRef}>
      <CardHeader>
        <CardTitle className="text-2xl font-medium capitalize">
          {title}
        </CardTitle>
        <SingleWordUnderline />
      </CardHeader>
      <CardContent className="mb-3">
        {type === "content" && <CardContentLists data={data} />}
        {type === "skill" && <CardSkillLists data={data} />}
      </CardContent>
    </Card>
  );
};
export default CardInfo;
