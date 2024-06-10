import FooterEnd from "./FooterComp/FooterEnd";
import FooterList1 from "./FooterComp/FooterList1";
import FooterList2 from "./FooterComp/FooterList2";
import FooterList3 from "./FooterComp/FooterList3";
import FooterLogo from "./FooterComp/FooterLogo";
interface Props {
  img?: boolean | false;
}
export default function FooterMain({ img }: Props) {
  return (
    <section id="footer" className=" text-white bg-heavyBlue relative">
      {img && <div className="w-full h-full absolute footer-img z-10"></div>}
      {img && (
        <div className="w-full h-full absolute bg-[#121275] opacity-[.85] z-20"></div>
      )}
      <div className="px-[16px] md:px-[23px] pt-[103px] pb-[30px] lg:p-0 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:pt-[8.938vw] lg:max-w-[90vw] lg:mx-auto lg:min-h-[80vh] relative z-40">
        <FooterLogo />
        <FooterList1 />
        <FooterList2 />
        <FooterList3 />
      </div>
      <div className="relative z-40">
        <FooterEnd />
      </div>
    </section>
  );
}
