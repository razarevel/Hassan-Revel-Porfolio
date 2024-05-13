interface Props {
  setShow: () => void;
}
export default function NavMobileList2({ setShow }: Props) {
  return (
    <>
      <div
        className="h-full absolute top-0 right-0 text-white flex flex-col items-center justify-center  w-[10vh] md:w-[20vh] space-y-0.5"
        style={{
          background: `url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-right-bg.jpg")`,
        }}
        onClick={setShow}
      >
        <div className="w-[5vh] h-[0.19rem] bg-white"></div>
        <p className="text-[1.5vh]">MENU</p>
        <div className="w-[5vh] h-[0.19rem] bg-white"></div>
      </div>
    </>
  );
}
