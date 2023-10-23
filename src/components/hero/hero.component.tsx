// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from "@styles";
import { discount, robot } from "@assets/index";
import { GetStarted } from "@components/get-started/get-started.component";

export const Hero = () => {
  return (
    <section
      className={`${styles.paddingY} flex md:flex-row flex-col`}
      id="home"
    >
      <div
        className={`flex-1 flex-col px-6 sm:px-16 xl:px-0 ${styles.flexStart}`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20% </span>
            <span>Discount for</span>
            <span className="text-white"> 1 Month </span>
            <span>Account</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="hidden sm:block" />
            <span className="text-gradient"> Generation </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex flex-1 ${styles.flexCenter} my-10 md:my-0 relative`}
      >
        <img
          src={robot}
          alt="Robot"
          className="w-[100%] h-[100%] z-[5] relative"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};
