import "./banner.css"

export default function Banner({ title1, title2 }) {
    return <div className="banner"><h2 className="banner-title">{title1} <span>{title2}</span></h2></div>
}