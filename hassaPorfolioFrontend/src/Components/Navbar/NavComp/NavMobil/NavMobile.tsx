import { useState } from "react";
import NavMobileList1 from "./NavMobileList1";
import NavMobileList2 from "./NavMobileList2";
import NavMobileList3 from "./NavMobileList3";
import { AnimatePresence, motion } from "framer-motion";

export default function NavMobile() {
  const [show, setShow] = useState(false);
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed bg-black w-full left-0 top-0 h-[100%] z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <section
        id="navmobil"
        className="lg:hidden absolute top-0 left-0 w-full h-[8vh]"
        style={{
          background: `url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-left-bg.jpg")`,
        }}
      >
        <div className="relative h-full flex items-center">
          {/* list 1 */}
          <NavMobileList1 />
          {/* list 2 */}
          <NavMobileList2 setShow={() => setShow(true)} />
          {/* list 3 */}
          <NavMobileList3 show={show} setShow={() => setShow(false)} />
        </div>
      </section>
      <div className="h-[8vh] lg:hidden"></div>
    </>
  );
}
