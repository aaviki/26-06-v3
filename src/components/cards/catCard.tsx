import "../../App.css"

export function CatCard(props:any){
    const { name, img, owner, title, bio } = props.cat;


    return(
        <div className="main card">
        
        <h1>Name:{name}</h1>
        <picture>
            <img src="" alt="breed"/>
                    </picture>
                    <h3>Owner:{owner}</h3>
                    <h2>{title}</h2>
                    <p>{bio}</p>
        
        </div>
    )
}