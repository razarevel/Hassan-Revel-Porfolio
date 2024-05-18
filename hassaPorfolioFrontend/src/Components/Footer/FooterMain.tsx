import FooterEnd from "./FooterComp/FooterEnd";
import FooterList1 from "./FooterComp/FooterList1";
import FooterList2 from "./FooterComp/FooterList2";
import FooterList3 from "./FooterComp/FooterList3";
import FooterLogo from "./FooterComp/FooterLogo";

export default function FooterMain() {
  return (
    <section id="footer" className="bg-heavyBlue text-white">
      <div className="px-[16px] md:px-[23px] pt-[103px] pb-[30px] lg:p-0 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:pt-[8.938vw] lg:max-w-[90vw] lg:mx-auto lg:min-h-[80vh]">
        <FooterLogo />
        <FooterList1 />
        <FooterList2 />
        <FooterList3 />
      </div>
      <FooterEnd />
    </section>
  );
}
