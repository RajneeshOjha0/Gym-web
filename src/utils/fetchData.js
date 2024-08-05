export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key':'fde66b4810mshd8f289fe1a1448bp169e47jsne41835d0feb8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }

  
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key':'fde66b4810mshd8f289fe1a1448bp169e47jsne41835d0feb8',
    },
  };
export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}