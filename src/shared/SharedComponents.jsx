import './SharedComponent.scss'

const SectionLabel = ({className = '' , children}) => {
    return (
        <span className={`${className} section-label`}>{children}</span>
    )
}

const SectionTitle = ({className = '' , children}) => {
    return (
        <span className={`${className} section-title`}>{children}</span>
    )
}

const ImageCreator = ({className , src , alt='image'}) => {
    return (
    <img src={src} alt={alt} className={className}/>
    )
}

export  {SectionLabel , SectionTitle , ImageCreator};