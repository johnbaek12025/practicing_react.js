import {useEffect, useState} from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const[coins, setCoins]  = useState([]);    
    const[selected, setSelected] = useState(1);
    const selectedcoin = (c) => {
        setSelected(c.target.value.split(" ").at(-2).replace("$", ''));
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
            <h1>{selected}</h1>
            <select onChange={selectedcoin}>
                <option></option>
                {coins.map((coin) => (
                    <option key={coin.id}>
                    {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                    </option>
                    )
                    )
                }
            </select>
            <ul>
                {coins.map((coin) => (
                    <li key={coin.id}>
                    {coin.name} ({coin.symbol}): {(selected/coin.quotes.USD.price).toFixed(1)}개
                    </li>
                    )
                    )
                }
            </ul>                       
        </div>        
    )
}

export default App;