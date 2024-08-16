type DataProps = {
  header: string;
  subHeader: string;
  description?: string;
};

const CardContentLists = ({ data }: { data: DataProps[] }) => {
  return (
    <>
      {data.map((item, index) => {
        const { header, subHeader, description } = item;
        return (
          <div key={index}>
            <div>
              <h2
                className="text-rose-500 font-medium mt-3"
                style={{
                  fontSize:
                    "calc(15px + (20 - 15) * ((100vw - 300px) / (1300 - 300)))",
                }}
              >
                {header}
              </h2>
              <h3
                className="mt-2"
                style={{
                  fontSize:
                    "calc(13px + (20 - 15) * ((100vw - 300px) / (1300 - 300)))",
                }}
              >
                {subHeader}
              </h3>
              <p className="mt-2">{description}</p>
            </div>
            {index !== data.length - 1 && <hr className="my-6" />}
          </div>
        );
      })}
    </>
  );
};
export default CardContentLists;
