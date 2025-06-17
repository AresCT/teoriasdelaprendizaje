const Section = ({
    titulo,
    descripcion,
    imagen,
    estiloTitulo = {},
    estiloTexto = {},
    estiloImagen = {},
    estiloTarjeta = {}
}) => (
    <section
        style={{
            background: 'linear-gradient(135deg,rgba(24, 129, 226, 0.31), #f3e9ff)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            margin: '2rem 2rem',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            ...estiloTarjeta, // permite sobreescribir estilos externos
        }}
    >
        <h2
            style={{
                fontSize: '2rem',
                margin: 0,
                textAlign: 'center',  // ← esto centra horizontalmente
                ...estiloTitulo,
            }}
        >
            {titulo}
        </h2>


        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
            }}
        >
            <p
                style={{
                    flex: 1,
                    fontSize: '1.3rem',
                    maxWidth: '600px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textAlign: 'justify',
                    ...estiloTexto,
                }}
            >
                {descripcion}
            </p>
            {imagen && (
                <img
                    src={imagen}
                    alt={titulo}
                    style={{
                        maxWidth: '200px',
                        height: 'auto',
                        borderRadius: '10px',
                        flexShrink: 0,
                        ...estiloImagen,
                    }}
                />
            )}

        </div>

    </section>
);

export default Section;