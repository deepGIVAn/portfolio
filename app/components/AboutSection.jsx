"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/about-image.png"
          alt="about"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            hic natus vitae officia ipsa inventore sunt consectetur! Optio
            necessitatibus eius ipsam vitae molestias, qui autem, nihil culpa
            incidunt quam, voluptate illum sed hic cum enim aut quibusdam.
            Architecto, aut deserunt. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quis veniam repudiandae eligendi vitae esse
            quibusdam officiis adipisci deleniti possimus dolores.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
