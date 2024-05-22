import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <section>
        <header>
          <nav>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/netflix.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </nav>
        </header>
      </section>
    </main>
  );
};

export default HomePage;
