import SingleWordUnderline from "../global/SingleWordUnderline";
import SocialMedia from "../global/SocialMedia";

const PersonalInfo = () => {
  return (
    <div className="p-[60px] border-x border-gray-200">
      <h3 className="text-3xl">Personal Info</h3>
      <SingleWordUnderline />
      <ul className="block text-gray-700">
        <li className="pb-2 box-border text-sm">
          <span className="font-bold">Birth date</span>: 1991/01/17
        </li>
        <li className="pb-2 box-border text-sm">
          <span className="font-bold">Email</span>: ali.shoddiqien@gmail.com
        </li>
        <li className="pb-2 box-border text-sm">
          <span className="font-bold">Phone</span>: +62-852-2001-2237
        </li>
        <li className="pb-2 box-border text-sm">
          <span className="font-bold">Address</span>: Baloi Harapan 2 Kampung
          Bawean Blok A No.126 RT.01 RW.03, Batam, Indonesia
        </li>
      </ul>

      {/* link social media */}
      <SocialMedia page="other" />
    </div>
  );
};
export default PersonalInfo;
