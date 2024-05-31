import { Link } from "react-router-dom";

export default function HomeHero() {
  const para = `I’m an AI Engineer. I make AI solutions for businesses, researchers, and
    individuals, seamlessly integrating them into existing infrastructures. I also write
    blog posts about projects I create for clients and personal endeavors driven by
    enthusiasm and learning. Additionally, I cover the latest news and updates in the
    ever-evolving world of AI.`;
  const btnContext = [
    { text: "I'm new to Hassan!", link: "/about" },
    { text: "Contact Revel", link: "/contact" },
  ];
  return (
    <section id="homeHero">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[44.81%] lg:order-2 relative">
          <img
            src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.jpg"
            alt=""
            className="w-full "
          />
        </div>
        {/* context */}
        <div className="pt-[82px] px-[30px] pb-[50px] space-y-[30px] lg:pl-[5.125vw] lg:pt-[13.938vw] lg:space-y-[2.313vw] lg:w-[55.18%] lg:order-1">
          {/* heading */}
          <div className="space-y-[-20px] lg:space-y-[-1vw] space-x-[14px] lg:space-x-[4.438vw] uppercase">
            <h1 className="text-[#949494] text-[46px] lg:text-[4.813vw]">
              revel
            </h1>
            <p className="font-Black text-[46px] lg:text-[6.188vw] text-heavyBlue">
              hassan
            </p>
          </div>
          {/* para */}
          <div>
            <p className="border-l-[10px] border-darkBlue py-[30px] px-[33px] text-[16px] lg:py-[1vw] lg:px-[1.2vw] lg:text-[1vw] lg:leading-[2] lg:max-w-[45vw]">
              {para}
            </p>
          </div>
          {/* btn */}
          <div className="space-x-4 flex flex-row">
            {btnContext.map((el, index) => (
              <div key={index}>
                <Link to={el.link}>
                  <div className="text-[11px] sm:text-[14px]  font-SemiBold py-[18px] px-[8px] bg-darkBlue text-white text-center uppercase lg:text-[0.875vw] lg:bg-white lg:text-heavyBlue hero-btn-border lg:px-0 lg:w-[12.5vw] lg:py-[1.313vw] hover:bg-darkBlue hover:text-white duration-300">
                    {el.text}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
