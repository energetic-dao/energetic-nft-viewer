import { useState, useEffect } from "react";
import {PactCommand} from "@kadena/client";
import axios from "axios";

const getIpfsUrl = (hash) => {
    return `https://gateway.pinata.cloud/ipfs/${hash}`;
};

const getNftMetadata = async (tokenHask) => {
    const pactCommand= new PactCommand();

    pactCommand.code = `(free.energetic-plot-staking-center.get-staked-items-on-plot "t:${tokenHask}")`;

    const { result } = await pactCommand.local("https://api.testnet.chainweb.com/chainweb/0.0/testnet04/chain/1/pact", {
        preflight: false,
        signatureVerification: false
    });

    if (result.status  !== 'success')  {
        throw new Error(`Pact command failed: ${result.status}`);
    }

    return result.data;
}

const getPlotMetadata = async (plotTokenHash) => {
    const pactCommand= new PactCommand();

    pactCommand.code = `(n_fa5008565e171dca599c6accfd71d6006ddecce0.ledger.get-uri "t:${plotTokenHash}")`;

    const { result } = await pactCommand.local("https://api.testnet.chainweb.com/chainweb/0.0/testnet04/chain/1/pact", {
        preflight: false,
        signatureVerification: false
    });

    if (result.status  !== 'success')  {
        throw new Error(`Pact command failed: ${result.status}`);
    }

    const uri = result.data;

    return (await axios.get(getIpfsUrl(uri.replace('ipfs://', ''))))?.data;
}

export function useNftLookup(tokenId) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNftMetadata() {
            const staticMetadata = await getPlotMetadata(tokenId);
            const metadata = staticMetadata.properties;
            try {
                setLoading(true);
                const stakedItems = await getNftMetadata(tokenId);
                for (const item of stakedItems) {
                    const { type, amount } = item;
                    metadata[type] = amount;
                }
            } catch (error) {
                console.log(error);
            }
            setResult(metadata);

            setLoading(false);
        }

        if (!tokenId) {
            return
        }
        fetchNftMetadata();
    }, [tokenId]);

    return [result, loading];
}