function Avatar(params) {
    return (
        <img className="rounded-full w-1/2 max-w-80 shadow-xl"
            src={params.user.avatarUrl}
            alt={params.user.name + " " + params.user.surname}
        />
    )
}

export default Avatar;