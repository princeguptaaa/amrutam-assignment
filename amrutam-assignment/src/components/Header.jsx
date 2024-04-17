import headerLaptop from "../assets/header laptop.png"
import { Benefits, Button } from "../Smaller Components/MultipleUsageComponents"
import DoctorSVG from "../assets/doctor.svg"
import prescriptionSVG from "../assets/prescription.svg"
import speechBubbleSVG from "../assets/speech-bubble.svg"
import shieldSVG from "../assets/shield.svg"
import roundDesign from "../assets/rounddesign.png"
import Girl from "../assets/girl.png"
import Heart from "../assets/Heart.png"
import Ribbon from "../assets/ribbon.png"
import LotusPositon from "../assets/lotus position.png"
import HolisticHealing from "../assets/Holistic_Healing.png"
import Remedies from "../assets/remedies.png"
import Strong from "../assets/strong.png"

const Header = () => {
    return (
        <div>
            <section className="flex items-center relative w-[100%] p-0 m-0 ">

                <div className="header flex w-[100%]">
                    <div className="w-[658px] bg-[#951D1C] blur-[0.15px]"></div>
                    <div className="w-[658px] bg-[#951D1C] blur-[0.15px]"></div>
                    <img src={headerLaptop} className="float-right select-none object-contain" draggable={false} alt="" />
                </div>




                <div className="w-[70%] mx-24 absolute *:text-white space-y-12">
                    <div className="gap-4">
                        <p className="font-NexaLight text-[28px] text-creme">Namaste, Welcome to Amrutam</p>
                        <p className="font-DINProBold text-5xl text-creme  leading-[140%]">Step into Holistic Healing with <span className="border-b-2">Ayurveda</span> Book Consultation with certifed Experts.</p>
                        <p className="font-DINProLight text-[20px] text-littleGrey leading-[28px]">Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
                    </div>

                    <Button text={"Book an Appointment"} classnames={"btn-primary"} />
                </div>

            </section>


            {/* HAVE TO REPLACE THIS WITH REUSABLE COMPONENTS */}
            <section className="bg-creme flex justify-center">
                <ul className="section-ul *:flex *:justify-center *:space-x-4 *:items-center flex items-center w-[85%] [&>li>p]:font-DINProBold *:border *:border-border-color *:p-4 *:py-5">

                    <li>
                        <span className="rounded-full border border-primary-color">
                            <img width={80} draggable={false} className=" p-3" src={speechBubbleSVG} alt="" />
                        </span>
                        <p className="capitalize text-primary-color">convenient online &
                            In-clinic consultations</p>
                    </li>
                    {/* <SectionUlLi src={speechBubbleSVG} text={"convenient online & In-clinic consultations"} imgClassname={"p-2"} imgAlt={"prescription"} /> */}
                    <li>
                        <span className="rounded-full border border-primary-color">
                            <img width={80} draggable={false} className=" p-3" src={shieldSVG} alt="" />
                        </span>
                        <p className="capitalize text-primary-color">Safe and effective treatment</p>
                    </li>
                    <li>
                        <span className="rounded-full overflow-hidden border border-primary-color">
                            <img width={80} draggable={false} className="translate-y-1 p-1" src={DoctorSVG} alt="" />
                        </span>
                        <p className="capitalize text-primary-color">Experienced Ayurvedic Practitioners</p>
                    </li>
                    <li>
                        <span className="rounded-full border border-primary-color">
                            <img width={80} draggable={false} className=" translate-x-1 p-3" src={prescriptionSVG} alt="" />
                        </span>
                        <p className="capitalize text-primary-color">personalized Treatment
                            Plans & Guidance</p>
                    </li>
                </ul>
            </section>
            {/* -------------------------------------------------- */}



            <section className="flex flex-col relative justify-center items-center my-12">
                <span className="flex flex-col gap-6">
                    <h3 className="inline leading-[40px] text-primary-color capitalize font-DINProBold text-5xl px-6 border-b-[5px] border-underline-color">Discover Ayurveda’s magic with us</h3>
                    <p className="inline text-[#666666] font-DINProLight font-[500] text-[20px] leading-7 text-center ">
                        Ayurvedic treatment aims to balance your body and mind, bringing harmony<br />
                        and vitality. It&apos;s like a journey to better health using ancient wisdom,<br />
                        a totally effective approach for a better life.
                    </p>
                </span>


                <div className="my-8 flex justify-evenly items-center">
                    <span className="flex">
                        <div className="flex flex-col items-center justify-center">
                            <Benefits
                                src={Heart}
                                heading={"Personalized Wellness"}
                                text={"Get treatments made just for you <br/> based on your individual doshas ( body type)"}
                                imgClassname={"bg-[#EDF5FA]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={Ribbon}
                                heading={"Focus on prevention"}
                                text={"Stop problems even before they start."}
                                imgClassname={"bg-[#EAF2EA]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={LotusPositon}
                                heading={"Mind-Body Connection"}
                                text={"Keep your mind and body in sync for a happy life."}
                                imgClassname={"bg-[#FCF1F1]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                        </div>

                        <div className="relative flex justify-center items-center">
                            <img className="" src={roundDesign} alt="" />
                            <img className="absolute" width={340} height={80} src={Girl} alt="" />
                        </div>
                        <div>



                            <Benefits
                                src={HolisticHealing}
                                heading={"Holistic Healing"}
                                order={"order-2"}
                                text={"Fix the root problem for long-lasting health."}
                                imgClassname={"bg-[#F5F3FC]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={Remedies}
                                heading={"Natural Remedies"}
                                order={"order-2"}
                                text={"Using herbs and natural therapies for healing."}
                                imgClassname={"bg-[#FEF6ED]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                            <Benefits
                                src={Strong}
                                heading={"Boosting immunity"}
                                order={"order-2"}
                                text={"Stay strong and healthy for life, not just for today."}
                                imgClassname={"bg-[#EAF2EA]"}
                                imgAlt={"yuhi"}
                                height={55}
                                width={65}
                            />
                        </div>




                    </span>
                </div>


            </section>
        </div>
    )
}

export default Header
