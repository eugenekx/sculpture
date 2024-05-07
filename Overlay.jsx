import { Scroll, useScroll } from "@react-three/drei";
import React, { useState } from "react";
import "./Style.css";
import { useFrame } from "@react-three/fiber";
import Image from "next/image";

const Section = (props) => {
  return (
    <section
      style={{ opacity: props.opacity }}
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full">
          <div className="text-white flex flex-col gap-5">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const [opacity1, setOpacity1] = useState(1);
  const [opacity2, setOpacity2] = useState(1);

  useFrame(() => {
    setOpacity1(1 - scroll.range(0, 1 / 2));
    setOpacity2(scroll.range(1 / 2, 1 / 2));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacity1}>
          <h1 className="font-extrabold leading-[110%] text-[41px] sm:text-[53px] md:text-[64px] bg-clip-text text-transparent text-center sm:text-start bg-gradient-to-b from-white to-[#AFAFAF]">
            Abstract art museum
          </h1>
          <p className="text-[16px] sm:text-[24px] text-justify sm:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            quis nobis odit dolorum sequi labore non perspiciatis suscipit
            consequatur tenetur quos ratione velit voluptates molestiae omnis
            nam dolorem, numquam unde sapiente dolor. Atque, quae labore ad
          </p>
        </Section>
        <Section opacity={opacity2} right>
          <div className="flex flex-row sm:flex-col justify-center sm:justify-start gap-10 col-span-1 lg:col-span-2">
            <div className="flex gap-6 items-center">
              <a
                href="https://web.telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl min-h-[70px] min-w-[70px] group border overflow-hidden bg-[#2f2f2f] border-gray-700 object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105">
                <Image
                  width={70}
                  height={70}
                  alt="tg"
                  className="object-cover group-hover:opacity-80 transition-all ease-linear duratuion-100"
                  src={"/tg.jpg"}
                />
              </a>
              <div className="hidden sm:flex flex-col justify-between">
                <p className="font-bold text-[24px]">Community Chat</p>
                <p className="text-[20px] flex text-gray-400">
                  Ask general questions and chat with the community on Telegram
                </p>
              </div>
            </div>
            <div className="flex gap-6  items-center">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl group min-h-[70px] min-w-[70px]  border overflow-hidden bg-[#2f2f2f] border-gray-700 object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105">
                <Image
                  width={70}
                  height={70}
                  alt="tg"
                  className="object-cover  group-hover:opacity-80 transition-all ease-linear duratuion-100"
                  src={"/x.png"}
                />
              </a>
              <div className="hidden sm:flex flex-col justify-between">
                <p className="font-bold text-[24px]">Twitter</p>
                <p className="text-[20px] flex text-gray-400">
                  Follow us to get the latest news and updates.
                </p>
              </div>
            </div>
            <div className="flex gap-6  items-center">
              <a
                href="https://medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl group min-h-[70px] min-w-[70px]  border overflow-hidden bg-[#2f2f2f] border-gray-700 object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105">
                <Image
                  width={70}
                  height={70}
                  alt="tg"
                  className="object-cover group-hover:opacity-80 transition-all ease-linear duratuion-100"
                  src={"/medium.png"}
                />
              </a>
              <div className="hidden sm:flex flex-col justify-between">
                <p className="font-bold text-[24px]">Medium</p>
                <p className="text-[20px] flex text-gray-400">
                  A place where we share our thoughts.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
