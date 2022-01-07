function Card({id,name,image,type,price}) {
    return (
        <div style={{

           
            display: 'flex',
            gap: 2,
            padding: 5,
            margin: 2,
            border: '5px solid blcak',
            background: 'aqua',
            
        }}>
            <img src={image} alt={id}/>
            <div style={{display: 'flex', flexDirection: 'column', gap: 3, margin: 2, padding:2}}>
                <h3>{name}</h3>
                <h2>Price : {price}₹</h2>
                <p>{type}</p>
            </div>

        </div>
    );
}

export default Card;