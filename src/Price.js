import {useEffect, useState} from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const[coins, setCoins]  = useState([]);        
    const[price, setPrice] = useState(0);
    const[flipped, setFlipped] = useState(false);
    const[selected, setSelected] = useState(1);
    const onChange = (e)=>{        
        setPrice(e.target.value)
    }
    const selectedcoin = (c) => {
        setSelected(c.target.value.split(" ").at(-2).replace("$", ''));
    }
    const flip = () =>{
        setFlipped((cur)=>!cur)
    }
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response)=>response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <h1>The Coins! {loading? "": `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong>: null}
            <select onChange={selectedcoin}>
                <option>option</option>
                {coins.map((coin) => (
                    <option key={coin.id}>
                    {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                    </option>
                    )
                    )
                }
            </select>
            <form>
                    <div>
                        <label>Money</label>
                        <input
                            onChange={onChange}
                            id="money"
                            type="number"                            
                            value={flipped ? price * selected : price}
                            placeholder="money(dollar)"
                            disabled={flipped}
                        />
                    </div>
                    <div>
                        <label>Coin</label>
                        <input
                            onChange={onChange}
                            id="coin"
                            type="number"
                            value={flipped ? price : price / selected}
                            placeholder="coin"
                            disabled={!flipped}
                        />
                    </div>
                </form>
                <button onClick={flip}>
                    {!flipped ? "money->coin" : "coin->money"}
                </button>
        </div>        
    )
}

export default App;