import PropTypes from 'prop-types';

export const Button = ({ classnames, text }) => {
  return (
    <button className={classnames}>{text}</button>
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

export const Benefits = ({ src, heading, text, imgClassname, order, imgAlt, height, width }) => {
  return (
    <>
      <span className="flex">
        <span className="flex items-center justify-center">
          <span className={`${order}` }>
            <p className="text-black font-DINProBold">{heading}</p>
            <p className="text-[#515151] font-DINProLight">{text}</p>
          </span>
          <span className={`rounded-full p-5 ${imgClassname} order-1`}>
            <img src={src} height={height} width={width} alt={imgAlt} />
          </span>
        </span>
      </span>
    </>
  )
}


Button.propTypes = {
  classnames: PropTypes.string,
  text: PropTypes.string,
}

Benefits.propTypes = {
  src: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  imgClassname: PropTypes.string,
  order: PropTypes.string,
  imgAlt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}