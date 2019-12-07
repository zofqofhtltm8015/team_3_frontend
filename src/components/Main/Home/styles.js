import styled from 'styled-components';
import Like from '../../../img/Main/Like.png';
import Comment from '../../../img/Main/Comment.png';


export const HomeWrapper = styled.div`
    background-color: #fbfbfb;
    height: 887px;
`;

export const MainWrapper = styled.div`
    display: flex;
    width: auto;
    height: 100%;
    max-width: 1140px;
    margin: 0 auto;
    background-color: #ffffff;
`;

export const BoardWrapper = styled.div`
    overflow-y: scroll;
    -ms-overflow-style: none; 
    width: 750px;
    height: 100%;
    box-sizing: border-box;
    border-right: 3px solid rgba(249, 250, 254, 1);
    &::-webkit-scrollbar {
        display:none;
    }
`;

export const SideWrapper = styled.div`
    width: 422px;
`;

export const BoardItemWrapper = styled.div`
    display: flex;
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    min-height: 148px;
    height: auto;
    border-bottom: 3px solid rgba(249, 250, 254, 1);
`;

export const ProfileBlock = styled.div`
    width: 49px;
    min-height: 115px;
    margin: 0;
    img {
        width: 49px;
        height: 49px;
    }
`;

export const ShareBoardWrapper = styled.div`
    width: 856px;
    min-height: 115px;
    margin-left: 15px;
    margin-top: 14px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > textarea {
        overflow: scroll;
        resize: none;
        max-width: 593px;
        min-height: 65px;
        height: auto;
        border: none;
        font-size: 18px;
        text-align: left;
        color: #7f7f7f;
    }
    > input:focus {
        outline: 2px solid blue;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        > label {
            margin: 0;
            width: 24px;
            height: 24px;
            > img {
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
        input {
            width: 0px;
            height: 0px;
            border: none;
        }
        > button {  
            width: 63px;
            height: 39px;
            border: none;
            border-radius: 20px;
            background-color: #737be1;
            color: #ffffff;
            cursor: pointer;
            outline: none;
        }
    }
`;

export const ContentsWrapper = styled.div`
    width: 856px;
    min-height: 115px;
    margin-left: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    header {
        margin-bottom: 7px;
        .name {
            width: 44px;
            height: 18px;
            font-weight: bold;
            margin-right: 15px;
        }
        .date {
            width: 89px;
            height: 16px;
        }
    }
    main {
        margin-bottom: 15px;
    }

    footer {
        display: flex;
        height: 20px;
        div {
            display: flex;
            align-items: center;
            > button {
                margin-right: 8px;
                cursor: pointer;
                outline: none;
                padding: 0;
                width: 20px;
                height: 20px;
                border: none;
                background-size: contain;
                background-color: transparent;

            }
            > span {
                height: 20px;
                line-height: 20px;
            }
            .like {
                background-image: url(${Like});
            }
            .comment {
                background-image: url(${Comment});
            }
        }
        div + div {
            margin-left: 150px;
        }
    }
`;

export const ViewMoreBlock = styled.div`
    width: 360px;
    height: 405px;
    margin: 60px 15px 0 45px;
    padding: 15px 0;
    border-radius: 16px;
    background-color: #dbdeff;
    header { 
        padding: 0 15px;
        height: 37px;
        border-bottom: 2px solid rgba(214, 230, 224, 1);
        box-sizing: border-box;
        h1 {
            margin: 0;
            font-size: 20px;
            font-weight: bold;
        }
    }
    ul {
        padding: 15px;
        margin: 0;
        li {
            height: 50px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h2 {
                margin: 0;
                width: 79px;
                height: 18px;
                font-size: 14px;
                line-height: 1.13;
                letter-spacing: 0;
                text-align: left;
                color: #3b3b3b;
            }
            img {
                cursor: pointer;
                width: 20px;
                height: 20px;
                background-size: contain;
            }
        }
        li ~ li {
            border-top: 2px solid rgba(214, 230, 224, 1);
        }
        div {   
            display: none;
        }
    }
`;