function UserCard({name, nivel, greeting}) {

    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105 group  bg-slate-50">
            <div className="overflow-hidden aspect-video">
                <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" src="https://picsum.photos/400" alt="card image" />
            </div>
            <h2 className="my-2 font-bold">{name}</h2>
            <p className="text-sm">{nivel}</p>
            <p className="text-sm">{greeting}</p>
        </div>
    )
}

export default UserCard