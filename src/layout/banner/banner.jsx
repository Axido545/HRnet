import "./banner.css"
import PropTypes from 'prop-types';

export default function Banner({ title1, title2 }) {
    return <div className="banner"><h2 className="banner-title">{title1} <span>{title2}</span></h2></div>
}

Banner.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
}

