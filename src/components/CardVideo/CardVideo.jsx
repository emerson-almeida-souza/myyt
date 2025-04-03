import './CardVideo.css'

export const CardVideo = () => {
    return (
        <div className='card-container'>
            <iframe
                src="https://www.youtube.com/embed/uPD0QOGTmMI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="300"
            />
            <h2 className="card-title">Título</h2>
            <p className="card-description">Descrição</p>
            <h3 className="card-category">Categoria</h3>
        </div>
    )
}
