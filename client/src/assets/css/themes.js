import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    c1: "#262",
    c2: "#222",
    c3: "#ddd",
    pic: "background",
    card: {
        bg: "#fff",
        text: "#000",
        quote: "#F8F8F5",
    },
    button: {
        c1: "#373",
        c2: "#151",
    },
    link: {
        c1: "#373",
        c2: "#151",
    },
    weakButton: {
        c1: "#fff",
        c2: "#eee",
    },
}

export const darkTheme = {
    c1: "#262",
    c2: "#222",
    c3: "#111",
    pic: "background-dark",
    card: {
        bg: "#2c2c2c",
        text: "#fff",
        quote: "#2c2c2c"
    },
    button: {
        c1: "#373",
        c2: "#151",
    },
    link: {
        c1: "#3A3",
        c2: "#171",
    },
    weakButton: {
        c1: "#fff",
        c2: "#eee",
    },
}

export const GlobalStyles = createGlobalStyle`
    .navbar {
        background-color: ${(props) => props.theme.c1};
    }

    a {
        text-decoration: none;
    }

    #banner, .formInput, img, #myInput {
        width: 100%;
    }

    .bg-theme {
        background-color: ${(props) => props.theme.c1};
    }

    body { 
        background-color: ${(props) => props.theme.c3};
    }

    .btn-block {
        display: block;
        width: 100%;
        min-height: 100%;
    }

    .btn:focus {
        box-shadow: none;
    }

    .btn-theme {
        color: #fff;
        background-color: ${(props) => props.theme.button.c1};
        border: none;
    }

    .btn-theme:hover, .btn-theme:focus {
        color: #fff;
        background-color: ${(props) => props.theme.button.c2};
        border: none;
    }

    .btn-weak {
        color: #000;
        background-color: ${(props) => props.theme.weakButton.c1};
        border: 0.1rem solid;
        border-color: #ccc!important;
    }

    .btn-weak:hover {
        color: #000;
        background-color: ${(props) => props.theme.weakButton.c2};
        border: 0.1rem solid;
        border-color: #ccc!important;
    }

    .card, .modal-content, #quote-page {
        background-color: ${(props) => props.theme.card.bg};
        color: ${(props) => props.theme.card.text};
    }

    .card-footer .btn {
        border-color: #fff;
    }

    .card-title {
        font-weight: 600;
    }

    .col-05 {
        flex: 0 0 auto;
        width: 4%;
    }

    .floating-side-button-left, .floating-side-button-right {
        font-size: 3rem;
        opacity: 0.1;
        top:5%;
        position: absolute;
    }

    .floating-side-button-left:hover, .floating-side-button-right:hover {
        opacity: 0.6;
        transition: all 0.5s ease;
    }

    .floating-side-button-left, .float-left {
        float: left;
    }

    .floating-side-button-right {
        left: 85%;
        float: right;
    }

    .fitter {
        background: rgba(40,40,40,0.4);
        border-radius: 25px;
        position: sticky;
        top: 13vh;
        max-width: 26px;
        max-height: 90vh;
        min-height: 74vh;
    }

    .font-poppins {
        font-family: 'Poppins', sans-serif;
    }

    #footer-img {
        width: 70%;
    }

    .link-theme {
        color: ${(props) => props.theme.link.c1};
    }

    .link-theme:hover {
        color: ${(props) => props.theme.link.c2};
    }

    .mainBody {
        min-height: 67vh;
    }

    .navbar, .footer {
        width: 100%!important;
    }

    .navbar-brand {
        max-width: 7%;
    }

    .navbar-toggler:focus, .btn-light:focus, .btn-check:focus, .btn-primary:focus, .btn-weak:focus {
        box-shadow: none;
    }

    .navPage-body {
        max-width: 100%
    }

    .hoverable {
        border-top: 0.1rem solid;
        border-bottom: 0.1rem solid;
        border-color: ${(props) => props.theme.c1};
    }

    .hoverable:hover {
        border-color: white;
        transition: all 0.7s ease;
    }

    .quote-body, .quote-preview {
        font-weight: 500;
    }

    #quote-page, .quote-card {
        background-image: url("/assets/images/thumbnails/${(props) => props.theme.pic}.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: ${(props) => props.theme.card.quote};
    }

    .smaller-text {
        font-size: 14px;
        font-weight: 650;
    }

    .share-button {
        font-size: 1.8rem;
        transition: all 0.4s ease;
    }

    #share-twitter {
        color: #1DA1F2 !important;
    }

    #share-twitter:hover {
        color: #0d476b !important;
    }

    #share-facebook {
        color: #4867AA !important;
    }

    #share-facebook:hover {
        color: #1c315e !important;
    }

    #share-reddit {
        color: #fc5011 !important;
    }

    #share-reddit:hover {
        color: #782c10 !important;
    }

    .sidebar-text {
        font-size: 0.5rem;
    }

    .subtext {
        color: #777;
        font-size: 14px;
    }

    .text-theme {
        color: ${(props) => props.theme.card.text};
    }

    // .wrapper {
    //     position: absolute;
    // }
`