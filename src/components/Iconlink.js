function Iconlink(params) {
    return (
        <a href={params.href} target="_blank" rel="noreferrer">
            <div>{params.svg}</div>
        </a>
    )
}

export default Iconlink;