import { HTMLProps, useEffect } from 'react';
import styled from 'styled-components';

declare const window: any;

const AdContainer = ({slotID}: any) => {
    useEffect(() => {
        let adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});

    }, [])


    return (
        <Container>
            <ins className="adsbygoogle"
                style={{display:"block"}}
                data-ad-client="ca-pub-1034524975771842"
                data-ad-slot="3468851388"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </Container>
    );
};

const Container = styled.div`
    width: 100px;
    height: 100%;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default AdContainer