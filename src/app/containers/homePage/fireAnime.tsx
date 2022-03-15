import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const FireAnimeContainer = styled.div`
    max-width:1280px;
    height:100%;
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    
`;

const AnimeCover = styled.div`
    width: auto;
    height: 15em;
    img{
        width: auto;
        height:100%;
    }
`;

const AnimeContainer = styled.div`
    width: 14em;
    height:18em;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:1em;
`;

const AnimeTitle = styled.h6`
    margin-top: 8px;
    font-size: 1.1em;
    color: #000;
    font-weight: 500;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
    animePage
}));

export function FireAnime(){
    const { animePage } = useAppSelector(stateSelector);

    const isEmptyAnimePage = !animePage || !animePage.media ||animePage.media.length === 0

    if(isEmptyAnimePage)
        return null;
        // RETURN DIV PUT A VIDEO/GIF <<<<<<<<<<<<<<<<<<<<<<<<<

    return <FireAnimeContainer>
        {animePage && animePage.media && animePage.media.map((anime) => (
            <AnimeContainer>
                <AnimeCover>
                    <img src={anime?.coverImage?.large || " "} />
                </AnimeCover>
                <AnimeTitle>{anime?.title?.english}</AnimeTitle>
                {/* <b>Average Score: {anime?.averageScore}</b> */}
            </AnimeContainer>
        ))}
    </FireAnimeContainer>

}