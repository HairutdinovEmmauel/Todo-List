function Car (props) {
    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={props.car.img}
                    alt={props.car.name} />
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price} $</p>
        </div>
    ) 
}

ReactDOM.render(<Car car={{ name: 'BMW M2 Coupe', price: 2000, img: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjJ9Kuc84TlAhWltIsKHXs1CqsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.drom.ru%2Fcatalog%2Fbmw%2Fm2%2Fg_2015_4006%2F&psig=AOvVaw3i53qkIEs-CMUcDNomejtU&ust=1570357368009968' }} />, document.getElementById('root'))




























