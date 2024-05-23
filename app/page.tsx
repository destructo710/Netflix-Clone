import { HomepageForm } from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      {/* hero section */}
      <section className=" max-h-[700px] md:h-[700px] relative">
        <div className="absolute h-full max-h-[700px] md:h-[700px]">
          
          <Image
            src="/assets/hero_small.jpg"
            alt="mobile hero image"
            width={1210}
            height={700}
            className="sm:hidden h-full object-cover object-center"
          />
          <Image
            src="/assets/hero_medium.jpg"
            alt="tablet hero image"
            width={1210}
            height={700}
            className=" hidden sm:flex md:hidden h-full object-cover object-center"
          />
          <Image
            src="/assets/hero_large.jpg"
            alt="desktop hero image"
            width={2420}
            height={1400}
            className=" hidden md:flex object-cover object-center h-full"
          />
          
        </div>
        <div className="bg-gradient-to-b from-black/90 via-black/30 to-black/90 relative md:h-[700px]">
          <header className=" h-20 flex items-center">
            <nav className=" w-full">
              <ul className=" w-10/12 mx-auto flex flex-wrap items-center justify-between">
                <li className=" w-24 h-6 block m-1">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/netflix.svg"
                    alt="Next.js Logo"
                    width={89}
                    height={24}
                  />
                </li>
                <div className=" flex">
                  <li className=" m-1">
                    <Select>
                      <SelectTrigger className="w-[64px]  bg-inherit sm:w-32">
                        <Image
                          src={"/language.svg"}
                          alt="Lang logo"
                          width={20}
                          height={20}
                        />
                        <SelectValue
                          className="placeholder:invisible md:placeholder:visible"
                          placeholder={"English"}
                        />
                      </SelectTrigger>
                      <SelectContent className="w-[64px]">
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                      </SelectContent>
                    </Select>
                  </li>
                  <li className=" m-1">
                    <Link href={"/login"}>
                      <Button className="w-[75px]" variant="netflix">
                        Sign In
                      </Button>
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
          </header>
          <div className=" pt-10 pb-8 w-10/12 mx-auto flex flex-col items-center text-center">
            <h1 className=" text-3xl font-bold">The biggest Indian hits. The best Indian stories. All streaming here.</h1>
            <p className="mt-4 font-normal">Watch anywhere. Cancel anytime.</p>
            <div className="pt-6 px-6">
              <h3 className=" font-normal text-lg">Ready to watch? Enter your email to create or restart your membership.</h3>
              <HomepageForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
