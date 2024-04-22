import React from "react";
import Link from "next/link";
import MetaSeo from "../components/MetaSeo";
import http from "../utilities/http";
import constant from "../utilities/constant";
import Typewriter from "typewriter-effect";
// import Image from "next/image";

export default function Home({ setting }) {
  return (
    <div className="flex justify-center h-[90vh] xl:items-center xl:flex-row flex-col-reverse">
      <MetaSeo
        // title="Hello World, i`m Harithya Wisesa"
        title="Frankl AI"
        // description="Hello World, nama saya Harithya Wisesa, saat ini saya bekerja di sebuah IT Contsultant di Tasikmalaya sebagai fullstack developer. Tapi untuk saat ini saya lebih cenderung bekerja di bagian mobile developer dan juga fontend menggunakan ekosistem React baik itu React JS ataupun React Native."
      />
      <div className="xl:w-7/12" data-aos="fade-up">
        <h1 className="font-doodle h-20 lg:h-auto  tracking-widest xl:text-4xl text-3xl  text-center xl:text-left AquilineTwo">
          <Typewriter
            options={{
              // strings: setting.title.split("|"),
                strings: [
                  "Hi, I'm Victor Frankl",
                  "Everyone needs a friend",
                  // "We all deserve the warmest intros."
                ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="mt-5 mb-4 text-center xl:text-left leading-7 Bookerly">
    <Link href="#"><a>My job</a></Link> is to learn everything about <Link href="https://journal.frankl.ai/"><a>you</a></Link>. I want to know you better than you know yourself, because my job is to introduce you to people who are going to love you. But be warned, I’m a tough judge of character, and I have to want to introduce you to my friends. That said, I think I'm gonna love you.
        </p>

      </div>

      <div className="xl:w-5/12 flex xl:justify-end justify-center h-80 ">


        <img
          src='/img/frankl.webp'
          alt="BG-Image"
          // BG-Image
          width="500"
          height="600"
          className={`object-contain mb-10 xl:mb-0 dark:invert invert-0`}
          type="image/webp"
            >
</img>

      </div>

    </div>
  );
}

export async function getStaticProps() {
  const req = await http.get("/item/home");
  return {
    props: {
      setting: req.data,
    },
  };
}
