import pfp from '/Users/nihaalkonda/Desktop/pfp.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-white md:space-x-20">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
          <Image src={pfp}
            alt="Profile Picture"
            className="rounded-full"
            width={320}
            height={320}
            priority/>
        </div>
        
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi, I'm Nihaal!</h1><br></br>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I'm a sophomore at Cornell majoring in Computer Science with minors in AI and Business.
            I have a passion for development and finding out new ways to use technology for social impact.<br></br><br></br>

            On campus, I'm a Director of Client Relations for Cornell Business Analytics, and I'm also part of
            Cornell Venture Capital and the South Asian Business Association. This past summer, I worked as a Data
            Analyst Intern for SCORE Assocation, an affiliate of the Small Business Administration where I helped restructure
            SCORE's massive database to more easily get resources to small business owners. I'm looking for similar experiences
            that will expose me to software engineering, machine learning and AI, and other emerging technologies while enabling
            me to help my community, which is why I joined Hack4Impact.<br></br><br></br>

            Ask me about: basketball and football, old Bollywood music, rap and R&B music, the Bay Area, and <u>the
            time I made Leon Huang cry</u> after beating him in a debate round.<br></br><br></br>
          </p>
        </div>
      </div>
    </div>
  );
}
