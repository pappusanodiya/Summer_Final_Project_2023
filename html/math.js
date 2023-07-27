*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    width: 100%;
    height: 300%;
    background:url("download.jpeg");

    background-repeat: no-repeat;
    background-size: cover;

}
.header{
    height: 10%;
    width: 100%;
    text-align: center;
    justify-content: center;
}
.header img{
    float: right;
    /* margin-left: 87%; */
    margin-top: 0px;
}
.header .heading{
    font-size: 70px;
    color: white;
    text-shadow: 3px 3px red;
    padding-top: 0px;
    padding-bottom: 60px;
    font-family:  'Dancing Script', cursive;
    word-spacing: 15px;
    letter-spacing: 3px;

}
.cards{
    height: 280%;
    width: 100%;
    display: grid;
    grid-gap: 4rem;

    grid-template-rows: 420px 420px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 380px));

    justify-content: space-evenly;

}
.card{


	 /* border: 2px solid black; */
    margin-top: 10px;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    background: white;
   cursor: pointer;
     border-radius: 10px;


 transform-style: preserve-3d;
 box-shadow: 2px 2px 4px 4px rgb(192, 114, 86);
 transition: .3s transform;

