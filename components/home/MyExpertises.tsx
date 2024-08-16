import { RiBrushLine, RiCodeBoxLine, RiUploadCloud2Line } from "react-icons/ri"
import { Card, CardContent, CardHeader } from "../ui/card"
import SingleWordUnderline from "../global/SingleWordUnderline"

const MyExpertises = () => {
  return (
    <div className="p-[60px]">
        <h3 className="text-3xl">My Expertises</h3>
        <SingleWordUnderline />
        <Card className="mb-3">
          <CardHeader>
            <div className="flex justify-stretch items-center">
              <div className="max-w-[50px] text-rose-500">
                <RiCodeBoxLine className="text-3xl" />
              </div>
              <div className="text-base font-medium pl-2">Web Development</div>
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
              Designing, building, and integrating databases and third-party
              applications into a website to create a web-based application
            </p>
          </CardContent>
        </Card>
        <Card className="mb-3">
          <CardHeader>
            <div className="flex justify-stretch items-center">
              <div className="max-w-[50px] text-rose-500">
                <RiUploadCloud2Line className="text-3xl" />
              </div>
              <div className="text-base font-medium pl-2">Web Deployment</div>
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
              Designing, building, and integrating databases and third-party
              applications into a website to create a web-based application
            </p>
          </CardContent>
        </Card>
        <Card className="mb-3">
          <CardHeader>
            <div className="flex justify-stretch items-center">
              <div className="max-w-[50px] text-rose-500">
                <RiBrushLine className="text-3xl" />
              </div>
              <div className="text-base font-medium pl-2">Graphic Design</div>
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
              Designing, building, and integrating databases and third-party
              applications into a website to create a web-based application
            </p>
          </CardContent>
        </Card>
      </div>
  )
}
export default MyExpertises