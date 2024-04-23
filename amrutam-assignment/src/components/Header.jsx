import headerLaptop from "../assets/header laptop.png"
import { Benefits, Button, Card, CustomerReview, ExpertCard } from "../Smaller Components/MultipleUsageComponents"
import DoctorSVG from "../assets/DoctorSVG.png"
import prescriptionSVG from "../assets/prescription.svg"
import speechBubbleSVG from "../assets/speech-bubble.svg"
import shieldSVG from "../assets/shield.svg"
import roundDesign from "../assets/rounddesign.svg"
import Girl from "../assets/girl.png"
import Heart from "../assets/Heart.png"
import Ribbon from "../assets/ribbon.png"
import LotusPositon from "../assets/lotus position.png"
import HolisticHealing from "../assets/Holistic_Healing.png"
import Remedies from "../assets/remedies.png"
import Strong from "../assets/strong.png"
import TwoGirls from "../assets/two girls.jpeg"
import Product from "../assets/product.png"
import GirlWProduct from "../assets/girl with product.jpeg"
import LandscapeProduct from "../assets/landscape_product.jpeg"
import ExpertImg from "../assets/expertimg.png"
import phonemockup from "../assets/phonemockup.png"
import AppStore from "../assets/appstore.svg"
import PlayStore from "../assets/playstore.svg"
import { Link } from "react-router-dom"
import head_smalldevices from "../assets/head_smalldevices.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, EffectFade } from 'swiper/modules';
import { useSwiper } from 'swiper/react';


const Header = () => {
    // alert(window.innerWidth)
    const swiper = useSwiper();


    const breakpointsforBenefits = {
        500: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 2,
        },
        1201: {
            slidesPerView: 4,
        }
    };

    const breakpoints = {
        500: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 2,
        },
        1201: {
            slidesPerView: 3,
        }
    };

    const styles = {
        h3: "inline leading-[40px] mb-[30px] max-sm:text-[32px] text-center text-primary-color capitalize font-DINProBold text-5xl px-6 border-b-[5px] border-underline-color"
    }
    return (
        <div>
            <section className="flex items-center relative w-[100%] p-0 m-0 ">

                <div className={`${window.innerWidth > 550 ? "header" : "onPhone_header_gradient"} xxsm:h-[590px] flex w-[100%]`}>
                    <div className="w-[658px] bg-[#951D1C] blur-[0.15px]"></div>
                    <div className="w-[658px] bg-[#951D1C] blur-[0.15px]"></div>
                    <img rel="preload" src={window.innerWidth > 550 ? headerLaptop : head_smalldevices} className="float-right select-none object-fill sm:h-[565px]" draggable={false} alt="" />
                </div>

                <div className="w-[70%] max-[350px]:w-full xsm:w-[80%] xsm:mx-6 sm:mx-6 sm:w-[90%] mx-24 absolute *:text-white space-y-12 ">
                    <div className="gap-4 sm:space-y-4 xsm:space-y-[16px]">
                        <p className="font-NexaLight xsm:text-[18px] sm:text-xl text-[1.8rem]  text-creme">Namaste, Welcome to Amrutam</p>
                        <p className="font-DINProBold text-5xl sm:text-[30px] text-white xsm:text-[26px] leading-[140%]">Step into Holistic Healing with <span className="border-b-2 xsm:after:line-clamp-1 border-white text-creme">Ayurveda</span> Book Consultation with certifed Experts.</p>
                        <p className="font-DINProLight xsm:text-base text-[1.3rem] text-littleGrey leading-[28px]">Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
                    </div>

                    <Button text={"Book an Appointment"} classnames={"btn-primary xsm:text-base"} />
                </div>

            </section>


            {/* HAVE TO REPLACE THIS WITH REUSABLE COMPONENTS */}
            <section className="bg-creme flex justify-center">
                <ul className="section-ul *:flex *:justify-center max-sm:justify-start *:space-x-4 *:items-center flex max-sm:flex-col w-[85%] max-sm:w-full [&>li>p]:font-DINProBold *:border-t *:border-b min-sm:*:border-l min-sm:*:border-r *:border-border-color *:p-4 *:py-5 max-sm:px-0 min-sm:*:border-[#FFF1CF] max-sm:[&>li>p]:w-[60%] [&>li>div]:bg-white ">

                    <li>
                        <div className="rounded-full border border-primary-color">
                            <img width={80} draggable={false} className=" p-3" src={speechBubbleSVG} alt="" />
                        </div>
                        <p className="capitalize text-primary-color">convenient online &
                            In-clinic consultations</p>
                    </li>
                    {/* <SectionUlLi src={speechBubbleSVG} text={"convenient online & In-clinic consultations"} imgClassname={"p-2"} imgAlt={"prescription"} /> */}
                    <li>
                        <div className="rounded-full border border-primary-color">
                            <img width={80} draggable={false} className=" p-3" src={shieldSVG} alt="" />
                        </div>
                        <p className="capitalize text-primary-color">Safe and effective treatment</p>
                    </li>
                    <li>
                        <div className="rounded-full overflow-hidden border border-primary-color">
                            <img width={80} draggable={false} className="p-2" src={DoctorSVG} alt="" />
                        </div>
                        <p className="capitalize text-primary-color">Experienced Ayurvedic Practitioners</p>
                    </li>
                    <li>
                        <div className="rounded-full border border-primary-color">
                            <img width={80} draggable={false} className=" translate-x-1 p-3" src={prescriptionSVG} alt="" />
                        </div>
                        <p className="capitalize text-primary-color">personalized Treatment
                            Plans & Guidance</p>
                    </li>
                </ul>
            </section>
            {/* -------------------------------------------------- */}



            <section className="flex flex-col relative justify-center items-center my-12">
                <div className="flex flex-col gap-6">
                    <h3 className="inline leading-[40px] max-sm:text-[32px] text-center text-primary-color capitalize font-DINProBold text-5xl px-6 border-b-[5px] border-underline-color">Discover Ayurveda’s magic with us</h3>
                    <p className="inline max-sm:ignore-br max-sm:px-9 text-[#666666] max-sm:text-[14px] font-DINProLight font-[500] text-[20px] leading-7 text-center ">
                        Ayurvedic treatment aims to balance your body and mind, bringing harmony<br />
                        and vitality. It&apos;s like a journey to better health using ancient wisdom,<br />
                        a totally effective approach for a better life.
                    </p>
                </div>


                <div className="my-8 flex justify-evenly items-center">
                    <span className="flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:mx-1 max-xl:order-1 max-sm:flex-col">
                        <span className="max-xl:grid max-xl:justify-items-center max-xl:items-start xsm:grid-cols-2 grid-cols-3 lg:grid max-xl:gap-6 max-xl:mx-4 xl:flex flex-col max-xl:flex-row flex-wrap items-center xl:gap-10 xl:justify-center max-xl:row-span-*">
                            <Benefits
                                src={Heart}
                                mainClasses={""}
                                heading={"Personalized Wellness"}
                                text1={"Get treatments made just for you"}
                                text2={" based on your individual doshas"}
                                text3={"( body type)"}
                                imgClassname={"bg-[#EDF5FA] max-xl:order-1 "}
                                imgAlt={"yuhi"}
                                order={"items-end"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={Ribbon}
                                mainClasses={"xl:transform xl:-translate-x-10"}
                                heading={"Focus on prevention"}
                                text1={"Stop problems even"}
                                text2={" before they start."}
                                imgClassname={"bg-[#EAF2EA] max-xl:order-1 "}
                                order={"items-end "}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={LotusPositon}
                                heading={"Mind-Body Connection"}
                                text1={"Keep your mind and body in sync"}
                                text2={"for a happy life."}
                                imgClassname={"bg-[#FCF1F1] max-xl:order-1 "}
                                order={"items-end"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={HolisticHealing}
                                mainClasses={"xl:hidden"}
                                heading={"Holistic Healing"}
                                order={"order-2"}
                                text1={"Fix the root problem for"}
                                text2={"long-lasting health."}
                                imgClassname={"bg-[#F5F3FC]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={Remedies}
                                mainClasses={"xl:hidden"}
                                heading={"Natural Remedies"}
                                order={"order-2"}
                                text1={"Using herbs and natural "}
                                text2={"therapies for healing."}
                                imgClassname={"bg-[#FEF6ED]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={Strong}
                                heading={"Boosting immunity"}
                                mainClasses={"xl:hidden"}
                                order={"order-2"}
                                text1={"Stay strong and healthy for life, "}
                                text2={"not just for today."}
                                imgClassname={"bg-[#EAF2EA]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                        </span>

                        <div className="relative max-xl:w-[80%] max-xl:mb-10 flex max-xl:order-[-1] justify-center items-center">
                            <img className="animate-pulse" src={roundDesign} alt="" />
                            <img className="absolute" width={340} height={80} src={Girl} alt="" />
                        </div>


                        <div className="flex flex-col max-xl:hidden xl:flex gap-10 max-sm:order-3">
                            <Benefits
                                src={HolisticHealing}
                                heading={"Holistic Healing"}
                                order={"order-2"}
                                text1={"Fix the root problem for"}
                                text2={"long-lasting health."}
                                imgClassname={"bg-[#F5F3FC]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <div className="transform translate-x-10">
                                <Benefits
                                    src={Remedies}
                                    heading={"Natural Remedies"}
                                    order={"order-2"}
                                    text1={"Using herbs and natural "}
                                    text2={"therapies for healing."}
                                    imgClassname={"bg-[#FEF6ED]"}
                                    imgAlt={"yuhi"}
                                    height={55}
                                    width={65}
                                />
                            </div>
                            <Benefits
                                src={Strong}
                                heading={"Boosting immunity"}
                                order={"order-2"}
                                text1={"Stay strong and healthy for life, "}
                                text2={"not just for today."}
                                imgClassname={"bg-[#EAF2EA]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                        </div>
                    </span>
                </div>
            </section>



            <section className="bg-creme py-16">
                <div className="text-center flex flex-col items-center justify-center">
                    <h3 className={`inline leading-[40px] text-primary-color capitalize font-DINProBold text-5xl px-6 border-b-[5px] border-underline-color ${styles.h3}`}>What sets Ayurvedic consultations apart?</h3>



                    <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 min-sm:grid-cols-4 gap-4 justify-self-start">
                        <div className="card min-h-[220px] grid col-span-10 min-xsm:col-start-1 min-xsm:col-end-3 xsm:col-start-1 xsm:col-end-1 flex-col items-center text-center bg-white rounded-[20px] border-t-4 border-primary-color p-6 gap-[19px]">
                            <p className="font-InkNut text-[32px]">स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।&quot;</p>
                            <p className="text-lg">[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</p>
                        </div>
                        <div className="card max-w-[100%] max-h-[285px] xsm:Objectfit sm:h-full Objectfit overflow-hidden rounded-[20px]">
                            <img className="object-fill object-center xsm:Objectfit" src={TwoGirls} alt="" />
                        </div>
                        <div className="card flex gap-5 flex-col items-start bg-white rounded-[20px] border-t-4 border-primary-color p-6 py-8">
                            <p className="font-DINProBold text-2xl">Precise Diagnosis</p>
                            <p className="font-DINProLight font-[600] text-[#414141] text-start pr-2 text-[20px]">Ayurveda&apos;s core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                        </div>
                        <div className="card flex flex-col items-start bg-white rounded-[20px] border-t-4 border-primary-color p-6 py-8 gap-5">
                            <p className="font-DINProBold text-2xl">Zero side-effects</p>
                            <p className="font-DINProLight font-[600] text-[#414141] text-start pr-2 text-[20px]">Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs</p>
                        </div>
                        <div className="card overflow-hidden max-h-[285px]  h-full w-full rounded-[20px]">
                            <img className="scale-125" src={Product} alt="" />
                        </div>
                        <div className="card flex flex-col items-start justify-start bg-white rounded-[20px] border-t-4 border-primary-color p-6 py-8 gap-5">
                            <p className="font-DINProBold text-2xl">Individual Treatment
                            </p>
                            <p className="font-DINProLight font-[600] text-pretty w-[110%] text-[#414141] text-start pr-2 text-[20px]">all Treatments are personalized based on a person&apos;s unique constitution and health concerns.</p>
                        </div>
                        <div className="card overflow-clip max-h-[285px]  rounded-[20px]">
                            <img className="object-cover" src={GirlWProduct} alt="" />
                        </div>
                    </div>

                </div>
            </section>



            <section className=" relative flex items-center justify-center">
                <div className="overflow-hidden relative z-10 max-h-[590px] linear-gradient">
                    <img className="object-fill object-right-bottom min-md:-translate-y-[37rem]" src={LandscapeProduct} alt="" />

                    <div className="z-50 flex flex-col gap-[48px] items-center text-center justify-center absolute min-lg:w-[70%] md:w-[80%] left-0 right-0 mx-auto top-36">
                        <h3 className="inline leading-[120%] border-none text-creme text-center font-[500] font-DINProMedium min-md:text-[64px] px-6 xsm:text-[32px] sm:text-[45px] md:text-[45px]">Ready to restore harmony in your mind, body and spirit?</h3>
                        <Button text={"Book a consultation"} classnames={"btn-primary text-[24px]"} />
                    </div>
                </div>
            </section>


            <section className="pt-24 max-md:pt-[3rem] pb-16">
                <div className="text-center flex flex-col justify-center items-center min-md:gap-6">
                    <h3 className={` ${styles.h3} inline leading-[40px] text-primary-color capitalize font-DINProBold text-5xl border-b-[5px] border-underline-color`}>Our ayurvedic approach</h3>
                    <p className="text-[#323232] text-[20px] max-md:w-full max-md:px-10 max-md:text-[16px] w-[60%]">At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.</p>
                </div>

                <Swiper
                    modules={[Pagination, EffectFade]}
                    breakpoints={breakpointsforBenefits}
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                    style={{ padding: "50px 30px", width: "95%", display: "grid", minHeight: "300px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
                >
                    <SwiperSlide>
                        <Card number={1} heading={"Make Appointment"} body={"You must make an appointment in advance, to choose the service and date."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card number={2} heading={"Consultations"} body={"The next stage involves a thorough consultation with an Ayurveda practitioner."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card number={3} heading={"Treatment Planning"} body={"The Ayurvedic practitioner creates a personalized treatment plan for you"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card number={4} heading={"Maintenance"} body={"These visits allow for assessment of progress, adjustments to the treatment."} />
                    </SwiperSlide>
                </Swiper>



            </section>


            <section className="flex flex-col bg-creme items-center justify-center">
                <h3 className={` ${styles.h3} mt-10`}>Stories from our valued customers!</h3>

                <Swiper
                    modules={[Pagination, EffectFade]}
                    breakpoints={breakpoints}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    style={{ padding: "50px 30px", width: "100%", display: "grid", minHeight: "300px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
                >
                    <SwiperSlide>
                        <CustomerReview
                            consultedFor={"Consulted for Skin"}
                            name={"Sophie Moore"}
                            location={"Chennai"}
                            date={"17/02/24"}
                            StarsCount={5}
                            heading={"“One of a kind service”"}
                            review={"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomerReview
                            consultedFor={"Consulted for Hair"}
                            consultedForStyling={"bg-[#ebfee7]"}
                            name={"Sophie Moore"}
                            location={"Chennai"}
                            date={"17/02/24"}
                            StarsCount={5}
                            heading={"“One of a kind service”"}
                            review={"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomerReview
                            consultedFor={"Consulted for Hair"}
                            consultedForStyling={"bg-[#ebfee7]"}
                            name={"Sophie Moore"}
                            location={"Chennai"}
                            date={"17/02/24"}
                            StarsCount={5}
                            heading={"“One of a kind service”"}
                            review={"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis."} />
                    </SwiperSlide>
                </Swiper>
            </section>



            <section className="flex flex-col justify-center items-center">
                <h3 className={`inline leading-[40px] my-20 text-primary-color font-DINProBold text-5xl px-6 border-b-[5px] border-underline-color ${styles.h3}`}>Meet our Ayurveda experts </h3>

                <div className="flex gap-10 w-[85%] items-center justify-center">
                    <svg onClick={() => {
                        swiper.slidePrev();
                    }} className="cursor-pointer max-xl:hidden rounded-full border p-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 16" fill="none">
                        <path d="M0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM24 7L1 7L1 9L24 9L24 7Z" fill="#A5A5A5" />
                    </svg>

                    <div className="flex flex-col items-center justify-center">

                        <Swiper
                            modules={[Pagination, EffectFade]}
                            breakpoints={breakpoints}
                            pagination={{ clickable: true }}
                            spaceBetween={50}
                            style={{ padding: "50px 30px", width: "100%", display: "grid", minHeight: "300px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
                        >
                            <SwiperSlide>
                                <ExpertCard
                                    image={ExpertImg}
                                    name={"Dr. Vaishali Sharma"}
                                    field={"Ayurveda Practitioner (BAMS, MD)"}
                                    experience={"25 years of experience"}
                                    specializedIn={"Skin Specialist"} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExpertCard
                                    image={ExpertImg}
                                    name={"Dr. Vaishali Sharma"}
                                    field={"Ayurveda Practitioner (BAMS, MD)"}
                                    experience={"25 years of experience"}
                                    specializedIn={"Skin Specialist"} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExpertCard
                                    image={ExpertImg}
                                    name={"Dr. Vaishali Sharma"}
                                    field={"Ayurveda Practitioner (BAMS, MD)"}
                                    experience={"25 years of experience"}
                                    specializedIn={"Skin Specialist"} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExpertCard
                                    image={ExpertImg}
                                    name={"Dr. Vaishali Sharma"}
                                    field={"Ayurveda Practitioner (BAMS, MD)"}
                                    experience={"25 years of experience"}
                                    specializedIn={"Skin Specialist"} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ExpertCard
                                    image={ExpertImg}
                                    name={"Dr. Vaishali Sharma"}
                                    field={"Ayurveda Practitioner (BAMS, MD)"}
                                    experience={"25 years of experience"}
                                    specializedIn={"Skin Specialist"} />
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    <svg onClick={() => {
                        swiper.slideNext();
                    }} className="cursor-pointer max-xl:hidden rotate-180 rounded-full border p-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 16" fill="none">
                        <path d="M0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM24 7L1 7L1 9L24 9L24 7Z" fill="#A5A5A5" />
                    </svg>


                </div>

                <div className="flex flex-col items-center justify-center my-10 gap-10">
                    <Button classnames={"btn-secondary gap-2 slightish-green  text-[24px] flex items-center text-center justify-center"} text={"Find more experts"} svg={"flex translate-y-[2px]"} />
                </div>



            </section>



            <section className="bg-creme w-full flex mt-4 justify-between items-center">
                <div className="flex max-xl:flex-col justify-evenly xl:w-[90%]  gap-20 items-center">
                    <div className="w-[45%] flex flex-col overflow-hidden text-center items-center xl:items-start justify-center max-xl:w-[100%] pt-24 px-3">
                        <h3 className={`inline border-none max-xl:text-center leading-[140%] text-primary-color font-DINProBold text-5xl px-6 border-b-[5px] border-underline-color ${styles.h3}`}>Amrutam Home App</h3>
                        <p className="font-DINProLight my-[16px] xl:text-start text-[#676767] text-base -leading-[0.16px] ">The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                        <div className="w-[300px] translate-x-[60px]  overflow-hidden object-contain xl:hidden left-0 right-0 mx-auto">
                            <img draggable={false} className="select-none max-w-full max-h-full" src={phonemockup} alt="" />
                        </div>
                        <p className="font-DINProMedium xl:text-start max-xl:text-[20px] text-black text-[28px] capitalize leading-[140%] max-xl:w-[80%]">Get a diet & lifestyle consultation with ayurvedic experts across the globe </p>

                        <div className="flex flex-col my-[65px] gap-[33px]">
                            <h5 className="font-DINProBold text-[36px] leading-[140%] capitalize text-black">Get the App now</h5>
                            <span className="flex max-xl:flex-col gap-3 max-xl:gap-4">
                                <Link aria-label="Get it on Google Play" to={"https://play.google.com/store/apps/details?id=com.amrutam&hl=en_IN&gl=US&pli=1"}><img src={PlayStore} alt="" /></Link>
                                <Link aria-label="Get it on App Store" to={"https://apps.apple.com/in/app/amrutam-ayurveda/id1604393598"}><img src={AppStore} alt="" /></Link>
                            </span>

                        </div>
                    </div>
                    <div className="flex m-0 flex-col ">
                        <div className="h-[258px] max-xl:hidden -translate-x-16 relative w-[258px] bg-[#3A643B29] rounded-full"></div>
                        <div className="absolute z-50 max-xl:hidden overflow-x-hidden">
                            <img draggable={false} className="select-none" src={phonemockup} alt="" />
                        </div>
                        <div className="h-[258px] max-xl:hidden z-10 translate-x-40 w-[258px] bg-[#3A643B29] rounded-full"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
