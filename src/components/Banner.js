import Avatar from "../components/Avatar.js";

function Banner(params) {
    return (
        <div className={"py-10 " + params.className}>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <Avatar user={params.user} />
                    <div className="text-center mt-3">
                        <h1>{params.user.name}  {params.user.surname}</h1>
                        <h3>{params.user.degree}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;