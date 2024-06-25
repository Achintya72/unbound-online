const isProd = process.env.NODE_ENV === 'production'

export default function Image({ src, ...props}) {
    return <img src={`${isProd ? "/unbound-online" : ""}${src}`} {...props} />;
}