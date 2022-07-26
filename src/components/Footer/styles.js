import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #1d1d1d;
    color: #8b8e94;
    padding: 5rem 2rem;

    @media only screen and (max-width: 600px){
        display:flex;
        flex-direction: column;
        width: 100%;
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

export const Description = styled.div`
    h3{
        color: #fff;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    p{
        width: 80%;
        line-height: 1.3rem;
    }

    width: 50%;

    @media only screen and (max-width: 600px){
        width: 100%;
        text-align: center;

        p{
            width: 100%;
        }
    }
`;

export const Links = styled.div`
    width: 50%;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    p{
        color: #fff;
        width: 80%;
    }

    a{
        color: #8b8e94;
        transition: 0.5s;
        font-size: 14px;

        &:hover {
            color: #fff;
        }
    }

    li{
        margin-bottom: .5rem;
    }

    @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 3rem;

        p{
            text-align: center;
            padding-bottom: 1.3rem;
        }

        a{
            font-size: 16px;
        }
    }
`;

export const Copy = styled.div`
    width: 100%;
    margin-top: 3rem;

    p{
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 600px){
        text-align: center;
    }
`;