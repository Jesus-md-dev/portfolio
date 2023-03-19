function Iconlink(params) {
    return (
        <a href={params.href} target="_blank" rel="noreferrer">
            {params.svg}
        </a>
    )
}

export default Iconlink;