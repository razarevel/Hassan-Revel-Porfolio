import NavDeskList1 from "./NavDeskList1";
import NavDeskList2 from "./NavDeskList2";

export default function NavDesktop() {
  return (
    <section id="navDesktop" className="hidden lg:block">
      <div className="flex items-center justify-between">
        {/* list 1 */}
        <NavDeskList1 />
        {/* list 2 */}
        <NavDeskList2 />
      </div>
    </section>
  );
}
