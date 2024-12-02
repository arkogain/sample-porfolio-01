import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const page = () => {
  return (
    <>
      {/* hero start */}
      <div className="h-[90dvh] flex justify-center items-center flex-col gap-4">
        <div className="">
          <Avatar className="h-[10rem] w-[10rem]">
            <AvatarImage
              className="h-[10rem] w-[10rem] bg-blue-500"
              src="/avatar1.png"
              alt="@shadcn"
            />
          </Avatar>
        </div>
        <div className="text-4xl font-semibold">Hi There ! </div>
        <div className="text-4xl font-semibold">
          I'M <span className="text-purple-600"> ARKO GAIN </span>{" "}
        </div>
        <div className="motion-preset-typewriter-[27] motion-duration-2000 text-4xl font-semibold">
          I am a <span className="text-purple-600">Fullstack Developer.</span>
        </div>
      </div>

      {/* hero end */}

      {/* introdution start */}
      <div className="flex  items-center gap-[10rem] h-dvh">
        <div className="w-full">
          <div className="text-5xl flex justify-center font-semibold">
            LET ME
            <span className="text-purple-600 mx-2"> INTRODUCE </span> MYSELF
          </div>
          <div className="text-xl mt-16">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </div>
          <div className="text-xl mt-6">
            I am fluent in{" "}
            <span className="text-purple-600 font-bold italic">
              {" "}
              Javascript.{" "}
            </span>
          </div>
          <div className="text-xl mt-6">
            My field of Interest's are building new{" "}
            <span className="text-purple-600 font-bold italic">
              {" "}
              Web Technologies and Products{" "}
            </span>{" "}
            and developing products with{" "}
            <span className="text-purple-600 font-bold italic">
              {" "}
              Node.js{" "}
            </span>{" "}
            and{" "}
            <span className="text-purple-600 font-bold italic">
              {" "}
              Modern Javascript Library and Frameworks{" "}
            </span>{" "}
            like{" "}
            <span className="text-purple-600 font-bold italic">
              {" "}
              React.js
            </span>{" "}
            and
            <span className="font-bold text-purple-600 italic"> Next.js</span>
          </div>
        </div>
        <div className="">
          <img src="/introduce.svg" alt="" />
        </div>
      </div>
      {/* introdution end */}

      {/* contact */}
      <div className="flex justify-center items-center flex-col">
        <div className="text-5xl font-semibold">FIND ME ON</div>
        <div className="mt-2">
          Feel free to <span className="text-purple-600"> connect </span> with
          me
        </div>
        <div className="flex justify-center items-center gap-4 mt-6 mb-[6rem]">
          <span className="bg-white rounded-full p-2 flex justify-center items-center hover:motion-preset-expand">
            <Github className="text-purple-600 " size={24} />
          </span>

          <span className="bg-white rounded-full p-2 flex justify-center items-center hover:motion-preset-expand">
            <Facebook className="text-purple-600 " size={24} />
          </span>
          <span className="bg-white rounded-full p-2 flex justify-center items-center hover:motion-preset-expand">
            <Instagram className="text-purple-600" size={24} />
          </span>
          <span className="bg-white rounded-full p-2 flex justify-center items-center hover:motion-preset-expand">
            <Linkedin className="text-purple-600" size={24} />
          </span>
        </div>
      </div>
      {/* contact */}
    </>
  );
};

export default page;
