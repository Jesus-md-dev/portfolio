import "./Avatar.css";

function Avatar(params) {
    return (
        <div className="Avatar">
            <img src={params.user.avatarUrl} alt={params.user.name + " " + params.user.surname}/>
        </div>
    )
}

export default Avatar;