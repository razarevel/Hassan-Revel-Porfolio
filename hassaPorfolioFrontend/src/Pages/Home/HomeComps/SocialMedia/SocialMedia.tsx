import SocialGrid from "./SocialGrid";
import SocialHeading from "./SocialHeading";

export default function SocialMedia() {
  return (
    <section
      id="socialMedia"
      className="bg-[#1C1C1F] text-white pt-[70px] pb-[65px] space-y-[76px]"
    >
      <h1 className="text-[40px] font-Black px-[30px] lg:px-[3.2vw] lg:text-[3vw]">
        R.
      </h1>
      <SocialGrid />
      <SocialHeading />
    </section>
  );
}
