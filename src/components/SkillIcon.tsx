import { SkillType } from "@/utils/type";

const SkillIcon = ({ info }: { info: SkillType }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="border hover:border-2 border-fuchsia-700 rounded-lg p-6 duration-500 hover:scale-110 hover:duration-500">
          <img src={info.sImage} alt="" width={60} />
        </div>
      </div>
    </>
  );
};

export default SkillIcon;
