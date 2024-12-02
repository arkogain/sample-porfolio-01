import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const page = () => {
  return (
    <>
      {/* hero start */}
      <div className="flex h-[90dvh] flex-col items-center justify-center gap-4">
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
        <div className="motion-preset-typewriter-[27] text-4xl font-semibold motion-duration-2000">
          I am a <span className="text-purple-600">Fullstack Developer.</span>
        </div>
      </div>

      {/* hero end */}

      {/* introdution start */}
      <div className="flex h-dvh items-center gap-[10rem]">
        <div className="w-full">
          <div className="flex justify-center text-5xl font-semibold">
            LET ME
            <span className="mx-2 text-purple-600"> INTRODUCE </span> MYSELF
          </div>
          <div className="mt-16 text-xl">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </div>
          <div className="mt-6 text-xl">
            I am fluent in{" "}
            <span className="font-bold italic text-purple-600">
              {" "}
              Javascript.{" "}
            </span>
          </div>
          <div className="mt-6 text-xl">
            My field of Interest's are building new{" "}
            <span className="font-bold italic text-purple-600">
              {" "}
              Web Technologies and Products{" "}
            </span>{" "}
            and developing products with{" "}
            <span className="font-bold italic text-purple-600">
              {" "}
              Node.js{" "}
            </span>{" "}
            and{" "}
            <span className="font-bold italic text-purple-600">
              {" "}
              Modern Javascript Library and Frameworks{" "}
            </span>{" "}
            like{" "}
            <span className="font-bold italic text-purple-600">
              {" "}
              React.js
            </span>{" "}
            and
            <span className="font-bold italic text-purple-600"> Next.js</span>
          </div>
        </div>
        <div className="">
          <img src="/introduce.svg" alt="" />
        </div>
      </div>
      {/* introdution end */}

      {/* contact */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-5xl font-semibold">FIND ME ON</div>
        <div className="mt-2">
          Feel free to <span className="text-purple-600"> connect </span> with
          me
        </div>
        <div className="mb-[6rem] mt-6 flex items-center justify-center gap-4">
          <span className="flex items-center justify-center rounded-full bg-white p-2 hover:motion-preset-expand">
            <Github className="text-purple-600" size={24} />
          </span>

          <span className="flex items-center justify-center rounded-full bg-white p-2 hover:motion-preset-expand">
            <Facebook className="text-purple-600" size={24} />
          </span>
          <span className="flex items-center justify-center rounded-full bg-white p-2 hover:motion-preset-expand">
            <Instagram className="text-purple-600" size={24} />
          </span>
          <span className="flex items-center justify-center rounded-full bg-white p-2 hover:motion-preset-expand">
            <Linkedin className="text-purple-600" size={24} />
          </span>
        </div>
      </div>
      {/* contact */}
    </>
  );
};

export default page;
