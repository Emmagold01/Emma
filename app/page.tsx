import Image from 'next/image';
import blue from '@/app/assets/Blue.png';
import green from '@/app/assets/Green.png';

export default function Home() {
  return (
    <>
      {/* Gradient Blobs */}
      <div className="absolute inset-0">
        <Image
          src={blue}
          alt="Gradient Shape"
          className="absolute bottom-0 z-0 right-[11rem]"
        />
        <Image
          src={green}
          alt="Gradient Shape"
          className="absolute bottom-0 z-0 right-0"
        />
      </div>

      {/* Home Content */}
      <div className="flex flex-col space-y-4 justify-center items-center text-center min-h-full relative z-10 pt-40">
        <h1 className="font-roboto font-medium text-[45px] max-w-4xl">
          Crafting interfaces so smooth, you’ll forget the code exist
        </h1>
        <p className="text-indigo-500 text-[30px] font-fira tracking-tighter">
          &gt; Front-end developer
        </p>
        <div className="pt-5">
          <p className="font-fira text-gray-400 text-[16px] tracking-tighter">
            {'// find my profile on Github:'}
          </p>
          <p className="font-fira text-[16px]">
            <span className="text-indigo-500">const </span>
            <span className="text-teal-400">githubLink </span>
            <span>= </span>
            <a
              href="https://github.com/Emmagold01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#ffa1ad] underline decoration-2 underline-offset-4 hover:text-rose-400 transition-colors">
                &quot;https://github.com/Emmagold01&quot;
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
