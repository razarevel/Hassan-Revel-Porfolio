import { Link } from "react-router-dom";

export default function NavMobileList1() {
  return (
    <div>
      <Link to={"/"}>
        <div className="flex uppercase p-[2vh] text-[2.7vh] sm:text-[3vh] md:text-[3.2vh] font-Medium text-gray-600">
          <p>Hassan</p>
          <p className="text-heavyBlue font-Black">Revel.</p>
        </div>
      </Link>
    </div>
  );
}
