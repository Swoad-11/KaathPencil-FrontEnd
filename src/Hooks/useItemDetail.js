import { useEffect, useState } from "react";

const useItemDetail = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://peaceful-taiga-28630.herokuapp.com/product/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId]);
    return [item]
}

export default useItemDetail;