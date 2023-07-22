export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'd0c60faf6amshd2e3ebb8b2528c1p18f5f8jsn1cc6d8d21b22'
        // 'X-RapidAPI-Key': process.env.FITNESS_APP_API_KEY
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd0c60faf6amshd2e3ebb8b2528c1p18f5f8jsn1cc6d8d21b22',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();

    return data
}

// exerciseDb
// url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
// youtube search and download
// url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
