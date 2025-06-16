// src/components/Section.js
const Section = ({ titulo, descripcion, imagen, video }) => (
    <section className="section">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <div className="media">
            <img src={imagen} alt={titulo} />
            <video controls src={video}></video>
        </div>
    </section>
);

export default Section;
