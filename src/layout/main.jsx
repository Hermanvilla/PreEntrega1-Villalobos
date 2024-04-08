import ItemListContainer from "./ItemListContainer";
import UserCard from "./UserCard";


function Main () {
    return (
        <main className='min-h-screen bg-red-700'>
            <ItemListContainer >
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 user">
                    <UserCard name="Freddy" nivel="N4" greeting="Me alegra mucho tenerte aca"/>
                    <UserCard name="Edwin" nivel="N2" greeting="Trabajemos juntos"/>
                    <UserCard name="Herman" nivel="N5" greeting="Ansioso por ayudarte"/> 
                </section>
            </ItemListContainer>
        </main>
        

    )
}

export default Main