export interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Datos estructurados. El JSON se serializa escapando `<` para que un valor de
 * contenido no pueda cerrar la etiqueta script e inyectar marcado.
 */
const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
);

export default JsonLd;
