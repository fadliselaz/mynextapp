
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'


const Layout = (props) => {
    return (
        <>

        <Head>
            <title>MyNextApp</title>
            <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/superhero/bootstrap.min.css" rel="stylesheet" integrity="sha384-rvwYMW9Z/bbxZfgxHQEKx6D91KwffWAG+XnsoYNCGWi/qL1P9dIVYm1HBiHFqQEt" crossOrigin="anonymous" />
        </Head>
        <Navbar />
        <div className="layoutContainer container-fluid">

            {props.children}


    <style jsx global>{`

    html{
        scroll-behavior: smooth;    
        padding : 0px;
    }

    body{
        height: auto;
        overflow-x: hidden;
        padding: 0px !important;
        margin: 0px;
        box-sizing: border-box;
    }

    
    .layoutContainer{
        width : 100%;
        height : 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    
    `}</style>
        

        </div>
        </>
    );
};

export default Layout;