import SkillIcon from "@/components/SkillIcon";
import { ArrowRightToLine } from "lucide-react";

const skills = [
  {
    sId: "01",
    sImage: "/html.svg",
  },
  {
    sId: "02",
    sImage: "/css.svg",
  },
  {
    sId: "03",
    sImage: "/bootstrap.svg",
  },
  {
    sId: "04",
    sImage: "/react.svg",
  },
  {
    sId: "05",
    sImage: "/nodejs.svg",
  },
  {
    sId: "06",
    sImage: "/tailwind.svg",
  },
  {
    sId: "07",
    sImage: "/typescript.svg",
  },
  {
    sId: "08",
    sImage: "/javascript.svg",
  },
  {
    sId: "09",
    sImage: "/nextjs.svg",
  },
  {
    sId: "10",
    sImage: "/git.svg",
  },
  {
    sId: "12",
    sImage: "/npm.svg",
  },
  {
    sId: "13",
    sImage: "/axios.svg",
  },
  {
    sId: "14",
    sImage: "/swiper-logo.svg",
  },
  {
    sId: "15",
    sImage: "/bun.svg",
  },
];

const page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:h-dvh py-12">
        {/* left side start */}
        <div className="w-full">
          <div className="text-5xl font-semibold text-center">
            Know Who <span className="text-purple-600"> I'M </span>
          </div>
          <div className="mt-8 text-xl font-[500] ">
            Hi everyone I am{" "}
            <span className="text-purple-600"> Arko Gain </span> from{" "}
            <span className="text-purple-600"> Kolkata, India. </span> <br /> I
            am currently employed as a Fullstack Development Trainer at Central
            Institute of Technology. I have completed Integrated BSc in Zoology.
          </div>
          <div className="mt-8 text-xl font-[500]">
            <div className="">
              Apart from coding, some other activities that I love to do!
            </div>
            <div className="flex items-center gap-2 mt-4">
              <ArrowRightToLine /> <span> Playing Games</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRightToLine /> <span> Lisenting Music</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRightToLine /> <span> Travelling</span>
            </div>
          </div>
        </div>
        {/* left side end */}

        {/* right side start */}
        <div className="w-full flex justify-center">
          <img src="/about.png" alt="" />
        </div>
        {/* right side end */}
      </div>

      {/* skill set start */}

      <div className="text-center font-bold text-5xl mb-12">
        Professional <span className="text-fuchsia-700"> Skillset </span>{" "}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {skills.map((skill) => {
          return <SkillIcon key={skill.sId} info={skill} />;
        })}
      </div>

      <div className="text-center font-bold text-5xl mt-[6rem] mb-12">
        <span className="text-fuchsia-700">Tools</span> I use
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[7rem] pb-[5rem]">
        <div className="border hover:border-2 border-fuchsia-700 rounded-lg p-6 duration-500 hover:scale-110 hover:duration-500">
          <img src="/windows.svg" alt="" width={60} />
        </div>
        <div className="border hover:border-2 border-fuchsia-700 rounded-lg p-6 duration-500 hover:scale-110 hover:duration-500">
          <img src="/vscode.svg" alt="" width={60} />
        </div>
        <div className="border hover:border-2 border-fuchsia-700 rounded-lg p-6 duration-500 hover:scale-110 hover:duration-500">
          <img src="/vercel1.svg" alt="" width={60} />
        </div>
      </div>

      {/* skill set end */}
    </>
  );
};

export default page;
