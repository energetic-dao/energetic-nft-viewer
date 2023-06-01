import { useState, useEffect } from "react";

const tokens = {
    't:abc': {
        roofPanels: 4,
        standingPanels: 1,
        batteries: 2,
        windTurbines: 1,
        background: 'lightblue',
    },
    't:def': {
        roofPanels: 2,
        standingPanels: 0,
        batteries: 1,
        windTurbines: 0,
        background: 'orange',
    }
}

export function useNftLookup(tokenId) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNftMetadata() {
            try {
                setLoading(true);
                // @todo pact call to get nft metadata
                /*const response = await fetch(
                    ``
                );

                const json = await response.json();
                // console.log(json);*/
                setResult(
                    tokens[tokenId]
                );
            } catch (error) {
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }

        if (!tokenId || !tokens[tokenId]) {
            return
        }

        fetchNftMetadata();

    }, [tokenId]);

    return [result, loading];
}