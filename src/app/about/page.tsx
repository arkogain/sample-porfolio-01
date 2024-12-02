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
      <div className="flex flex-col items-center justify-center gap-6 py-12 md:h-dvh md:flex-row">
        {/* left side start */}
        <div className="w-full">
          <div className="text-center text-5xl font-semibold">
            Know Who <span className="text-purple-600"> I'M </span>
          </div>
          <div className="mt-8 text-xl font-[500]">
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
            <div className="mt-4 flex items-center gap-2">
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
        <div className="flex w-full justify-center">
          <img src="/about.png" alt="" />
        </div>
        {/* right side end */}
      </div>

      {/* skill set start */}

      <div className="mb-12 text-center text-5xl font-bold">
        Professional <span className="text-fuchsia-700"> Skillset </span>{" "}
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
        {skills.map((skill) => {
          return <SkillIcon key={skill.sId} info={skill} />;
        })}
      </div>

      <div className="mb-12 mt-[6rem] text-center text-5xl font-bold">
        <span className="text-fuchsia-700">Tools</span> I use
      </div>

      <div className="flex flex-col items-center justify-center gap-4 pb-[5rem] md:flex-row md:gap-[7rem]">
        <div className="rounded-lg border border-fuchsia-700 p-6 duration-500 hover:scale-110 hover:border-2 hover:duration-500">
          <img src="/windows.svg" alt="" width={60} />
        </div>
        <div className="rounded-lg border border-fuchsia-700 p-6 duration-500 hover:scale-110 hover:border-2 hover:duration-500">
          <img src="/vscode.svg" alt="" width={60} />
        </div>
        <div className="rounded-lg border border-fuchsia-700 p-6 duration-500 hover:scale-110 hover:border-2 hover:duration-500">
          <img src="/vercel1.svg" alt="" width={60} />
        </div>
      </div>

      {/* skill set end */}
    </>
  );
};

export default page;
