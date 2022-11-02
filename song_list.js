//song list
let All_song = [
   {
     name: "Centimeter",
     path: "https://github.com/Alfajris/Bot-WA/raw/main/RentaGirlfriend%20%20Opening%20FullCentimeterby%20the%20peggies.mp3",
     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhF-a6x9p-0bfGpNfvqnVJTlh4UgkNHOweOCsVTxTzYaSOEJfNYyQ1-P7B4_xTpKyyH3_crtao408skAsCasCX49kV4aXAKcD5RflT89FshcIlO77h4e-Dp0dcvNBsMH0uhBhzXVT2A3y7iSLnwLBc02_-KCGmDblexDDiOU1ykzCpBB-svh81aULmx/s318/Kanojo%20Oka.jpg",
     singer: "The Peggies"
   },
   {
     name: "Nakanoke di Itsutsugo",
     path: "https://github.com/Alfajris/Bot-WA/raw/main/Gotoubun%20no%20katachi%20Lyrics%20%20Gotoubun%20No%20Hanayome%20Season%202%20OP.mp3",
     img: "https://cdn.myanimelist.net/images/anime/1819/97947.jpg",
     singer: "Gotoubun No Hanayome"
   },
   {
     name: "Crossing Field",
     path: "https://github.com/Alfajris/Bot-WA/raw/main/LiSA-Crossing%20Field%20Sword%20Art%20Online.mp3",
     img: "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
     singer: "LiSA"
   },
   {
     name: "No Friends",
     path: "https://github.com/Alfajris/Bot-WA/raw/main/Nightcore%20%20Stick%20Together.mp3",
     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNcfLpnKcIP6puzCtDHaTZWq6WazzFdlllv4-yjJf6gR_qpmz2RmAhOPjs5B6KuIdpwb0ITCT0H5U7Vj3Yp2BKyjcu40VbJ5lAYh80jK0BtHgj6Sc3rjMXJFzXnnc8CaTCv0MOns7hkCYdjobpQfKwcB0YBUZNgvOt98FIhapsV_08SoOkz2pbvp_D/s900/no%20friends.jpg",
     singer: "Nightcore"
   },
   {
     name: "Stick Together",
     path: "https://github.com/Alfajris/Bot-WA/raw/main/Nightcore%20%20No%20Friends%20Lyrics.mp3",
     img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7TqpL62Nb8AA4OqcFRLDT1TmSDuxAwbgahAQ3ApJ5W_sKswUKVaVLTVPPTjDx2cdFZhYTIZcK4LFYDc8O_ASB7IFx5piT0nkIljI4MdZEWosR8u86ttjfZEPsrH3XWCCaBlwBIj6F475mmqMixlcvdbk2KHxUxeyoT9nw3X6AOtPCCottpUFaoTI8/s728/2.jpg",
     singer: "Nightcore"
   },
   {
    name: "Marry Me",
    path: "https://github.com/Alfajris/Bot-WA/raw/main/Nightcore%20%20Marry%20Me.mp3",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiI6oPa6uNO8VNn3NwRqC118zg1ZG8QXW6UzrllbcM1zksjwRjQIGgNuMZ_50zOmx_WG0P2-idK9Pjq_qj6F-QHSx3eEm2xMf7gWxpD-pXKyPry6USD8_T9CWzmrNZZ1mNTYvuPh2DM_rkCSThsW-zGDfmDeQXq1ntD7yGlsRUhIp5G5TwrUS3zcwLH/s1920/3.jpg",
    singer: "Nightcore"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/
