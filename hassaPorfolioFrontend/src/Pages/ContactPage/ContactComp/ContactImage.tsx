export default function ContactImage() {
  const img = `https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/images/contactformImage.png`;
  return (
    <>
      <div className="relative lg:order-2 lg:w-[44.82%]">
        <img src={img} alt="" className="relative w-full" />
        <img
          src={img}
          alt=""
          className="absolute w-full top-4 scale-x-95 origin-right opacity-30 z-[-10] lg:scale-x-100 lg:scale-y-95 lg:top-0 lg:-left-5"
        />
      </div>
    </>
  );
}
