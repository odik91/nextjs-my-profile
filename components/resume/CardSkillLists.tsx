import { Progress } from "../ui/progress";

type DataProps = {
  header: string;
  subHeader: string;
};
const CardSkillLists = ({ data }: { data: DataProps[] }) => {
  return (
    <>
      {data.map((item, index) => {
        const { header, subHeader } = item;
        return (
          <div key={index}>
            <h2
              className="text-gray-500 font-normal mt-3"
              style={{
                fontSize:
                  "calc(15px + (20 - 15) * ((100vw - 300px) / (1300 - 300)))",
              }}
            >
              {header}
            </h2>
            <Progress value={Number(subHeader)} className="bg-gray-300" />
          </div>
        );
      })}
    </>
  );
};
export default CardSkillLists;
