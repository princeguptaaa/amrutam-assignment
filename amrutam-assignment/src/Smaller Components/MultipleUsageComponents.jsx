import PropTypes from 'prop-types';
import Star from "../assets/star.svg"

export const Button = ({ classnames, text, svg }) => {
  return (
    <button className={classnames}>{text}
      <svg className={svg || "hidden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="#3A643B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg></button>
  )
}

// export const SectionUlLi = ({src, text, imgClassname, imgAlt}) => {
//   return (
//     <div>
//       <li>
//         <span className="rounded-full border border-primary-color">
//           <img draggable={false} className= src={src} alt={imgAlt} />
//         </span>
//         <p>{text}</p>
//       </li>
//     </div>
//   )
// }

export const Benefits = ({ src, heading, mainClasses, text1, text2, text3, imgClassname, order, imgAlt, height, width }) => {
  return (
    <>
      <span className={`${mainClasses} flex max-xl:h-full max-md:w-full`}>
        <span className="flex max-xl:p-3 max-xl:rounded-xl items-center max-xl:flex-col max-xl:border max-xl:py-[17px] justify-center max-xl:justify-start gap-4">
          <span className={`${order} space-y-2 max-xl:order-2 flex flex-col max-xl:justify-center max-xl:items-center`}>
            <p className="text-black max-xl:text-center font-DINProBold text-[20px] max-sm:text-[15px]">{heading}</p>
            <span className={`flex flex-col max-xl:justify-center xl:text-right max-xl:items-center  ${order} *:max-sm:text-[13px] `}>
              <p className="text-[#515151] max-xl:ignore-br max-xl:text-center font-DINProLight inline break-words  text-[16px]">{text1}<br/>{text2}</p>
              {/* <p className="text-[#515151] font-DINProLight inline break-words text-[16px]"></p> */}
              <p className="text-[#515151] font-DINProLight inline break-words text-[16px]">{text3 || ""}</p>
            </span>
          </span>
          <span className={`rounded-full p-5 ${imgClassname} order-1`}>
            <img src={src} height={height} width={width} alt={imgAlt} />
          </span>
        </span>
      </span>
    </>
  )
}


export const Card = ({ number, heading, body }) => {
  return (
    <div className="grid min-w-[300px] justify-items-center py-8 bg-creme border-t-4 rounded-[20px] border-primary-color">
      <div className="text-5xl font-DINProBold text-white rounded-full w-[90px] h-[90px] bg-primary-color-light border border-primary-color mb-4 flex items-center justify-center">{number}</div>
      <p className="text-[24px] font-DINProBold primary-color">{heading}</p>
      <p className="text-[20px] p-2 font-DINProLight leading-[120%] text-[#2E2E2E] text-center px-5">{body}</p>
    </div>
  )
}
export const CustomerReview = ({ consultedFor, consultedForStyling, name, location, date, StarsCount, heading, review }) => {
  return (
    <div className="rounded-[20px] shadow-lg border w-full">
      <div className={`font-Nunito text-[18px] font-[700] px-4 py-3 bg-pink-50 rounded-t-[20px] ${consultedForStyling}`}>{consultedFor}</div>

      <div className="py-10 rounded-b-[20px] bg-white px-6 flex flex-col justify-between">
        <div className="flex font-DINMedium justify-between items-center">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-[#515151] rounded-full"></div>
            <span>
              <div>{name}</div>
              <div className="font-NexaLight">{location}</div>
            </span>

          </div>

          <div className="font-NexaLight">{date}</div>
        </div>

        <div className="flex flex-col">
          <div className="flex mt-4">
            {Array.from({ length: StarsCount }, (_, index) => (
              <img key={index} src={Star} alt="" />
            ))}

          </div>

          <h4 className="font-DMSans text-[22px] my-3 font-[700]">{heading}</h4>
          <p className="text-[18px] text-[#555] leading-[30px]">{review}</p>
        </div>


      </div>
    </div>
  )
}


export const ExpertCard = ({ image, name, field, experience, specializedIn }) => {
  return (
    <div className="bg-creme rounded-[40px] w-full">
      <div className="py-7 flex flex-col justify-center items-center px-10 ">
        <div className="overflow-hidden flex flex-col items-center justify-center">
          <img className="object-cover h-[150px] w-[150px] rounded-full" draggable={false} src={image} alt="" />
          <span className="flex rounded-full -translate-y-5 font-DINProBold text-white bg-[#0B0B0B] px-3 py-1">4.5<img src={Star} alt="" /></span>
        </div>
        <div className="font-Gotham text-[20px] font-bold">{name}</div>
        <div className="font-Inter leading-[20px] my-3 text-[#838383] text-[15px]">{field}</div>

        <span className="flex gap-1 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M22.5 10.002V16.002M22.5 10.002L12.5 5.00195L2.5 10.002L12.5 15.002L22.5 10.002Z" stroke="#3A643B" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 12V17C9.5 20 15.5 20 18.5 17V12" stroke="#3A643B" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-Nunito text-base text-[#0C0C0C] -tracking-[0.16px]">{experience}</p>
        </span>

        <div className="flex review-speiciality gap-1 px-[13px] mt-[19px] py-[6px] items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M7.50065 13.6673L14.1673 7.00065C14.4788 6.69537 14.7267 6.33136 14.8967 5.92967C15.0667 5.52798 15.1553 5.09658 15.1575 4.66042C15.1597 4.22426 15.0754 3.79198 14.9095 3.3886C14.7436 2.98521 14.4994 2.61871 14.191 2.3103C13.8826 2.00188 13.5161 1.75766 13.1127 1.59177C12.7093 1.42587 12.2771 1.34159 11.8409 1.34379C11.4047 1.34599 10.9733 1.43464 10.5716 1.6046C10.17 1.77456 9.80594 2.02247 9.50065 2.33399L2.83399 9.00065C2.52247 9.30594 2.27456 9.66995 2.1046 10.0716C1.93464 10.4733 1.84599 10.9047 1.84379 11.3409C1.84159 11.7771 1.92587 12.2093 2.09177 12.6127C2.25766 13.0161 2.50188 13.3826 2.8103 13.691C3.11871 13.9994 3.48521 14.2436 3.8886 14.4095C4.29198 14.5754 4.72426 14.6597 5.16042 14.6575C5.59658 14.6553 6.02798 14.5667 6.42967 14.3967C6.83136 14.2267 7.19537 13.9788 7.50065 13.6673Z" stroke="#3A643B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.16797 5.66699L10.8346 10.3337" stroke="#3A643B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-Nunito text-base text-primary-color">{specializedIn}</p>
        </div>
      </div>

      <button className="font-Nunito text-[20px] leading-[90%] w-full rounded-b-[40px] text-center px-[77px] py-[19px] text-white bg-primary-color -tracking-[0.2px]">Book a session</button>
    </div>
  )
}


Button.propTypes = {
  classnames: PropTypes.string,
  text: PropTypes.string,
  svg: PropTypes.string,
},

  Card.propTypes = {
    number: PropTypes.number,
    heading: PropTypes.string,
    body: PropTypes.string
  },

  ExpertCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    field: PropTypes.string,
    experience: PropTypes.string,
    specializedIn: PropTypes.string
  },

  CustomerReview.propTypes = {
    consultedFor: PropTypes.string,
    consultedForStyling: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    StarsCount: PropTypes.number,
    heading: PropTypes.string,
    review: PropTypes.string
  },

  Benefits.propTypes = {
    src: PropTypes.string,
    heading: PropTypes.string,
    mainClasses: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    imgClassname: PropTypes.string,
    order: PropTypes.string,
    imgAlt: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  }