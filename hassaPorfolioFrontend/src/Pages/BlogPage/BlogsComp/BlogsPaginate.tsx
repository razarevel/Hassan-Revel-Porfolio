import { FaChevronLeft } from "react-icons/fa";

export default function BlogsPaginate() {
  return (
    <div className="px-[16px] sm:px-[30px] lg:px-[5.125vw] my-[56px] flex items-center justify-between max-w-[35vw] mx-auto">
      <div className="border rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-heavyBlue group relative">
        <FaChevronLeft className="group-hover:hidden absolute" />
        <FaChevronLeft
          className="hidden absolute group-hover:block"
          color="#fff"
        />
      </div>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={
            " rounded-full w-[40px] h-[40px] flex items-center justify-center " +
            (index === 0 && " bg-heavyBlue text-white")
          }
        >
          <p>{index + 1}</p>
        </div>
      ))}
      <div className="rotate-180 border rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-heavyBlue group relative">
        <FaChevronLeft className="group-hover:hidden absolute" />
        <FaChevronLeft
          className="hidden absolute group-hover:block"
          color="#fff"
        />
      </div>
    </div>
  );
}
