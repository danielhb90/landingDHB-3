
const API_URL_random = 'https://api.thedogapi.com/v1/images/search?limit=2&api_key=live_tMU3OaJc3maeoBa4oao50V3WAKlqFmiSqPu89546jJIC6I817aFEhlrvVO2SYSom';
const API_URL_favorite = 'https://api.thedogapi.com/v1/favourites?limit=2';

const spanError = document.getElementById('error');

async function loadRandomDogs() {

    const res = await fetch(API_URL_random);
    const data = await res.json();
    console.log("RANDOM");
    console.log(data)
        
    if (res.status === 200) {
        spanError.innerText = 'Hubo un error: ' + res.status +' '+ data.message;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        img1.src = data[0].url;
        img2.src = data[1].url; 
    }
  
}

// async function loadFavoriteDogs() {

//     const res = await fetch(API_URL_favorite);
//     const data = await res.json();
//     console.log("FAVORITES");
//     console.log(data)
//     console.log(res.status)

//     if (res.status !== 200) {
//         spanError.innerHTML = 'Hubo un error: ' ;
//     }

// }

// async function saveFavoriteDogs() {
//     const res = await fetch(API_URL_favorite, {
//         method: 'POST',
//         header: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             image_id: 12
//         }),
//     });
//     const data = await res.json();
//     console.log('SAVE AS FAVORITE')
//     console.log(res)

//     if (res.status !== 200) {
//         spanError.innerHTML = 'Hubo un error: ' + res.status +' '+ data.message;
//     }


// }



loadRandomDogs();

