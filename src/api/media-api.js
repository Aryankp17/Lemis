import axios from 'axios'
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXEL_KEY = import.meta.env.VITE_PIXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY

export async function fetchphoto(query,page = 1,per_page = 20){
    const res =  await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return res.data.results.map((i)=>({
            id:i.id,
            url:i.urls.regular,
            title:i.alt_description,
            type:"photos",
            name:i.user.name,
            thumbnail:i.urls.thumb,
          }))
    
}
export async function fetchvideo(query,per_page = 20){
    const res =  await axios.get('https://api.pexels.com/videos/search',{
        params:{query,per_page},
        headers:{Authorization:PEXEL_KEY}
    })
    return res.data.videos.map((i)=>({
            id:i.id,
            url:i.video_files.find(file => file.quality === "sd").link,
            title:i.user.name || "video",
            type:"videos",
            name:i.user.name,
            thumbnail:i.image,
          }))
}
export async function fetchgif(query,limit = 20){
    const res =  await axios.get('https://tenor.googleapis.com/v2/search',{
        params:{q:query,key:TENOR_KEY,limit}
    })
    return res.data.results.map((i)=>({
            id:i.id,
            url:i.media_formats.gif.url,
            title:i.content_description || "gif",
            type:"gif",
            name:"tenor",
            thumbnail:i.media_formats.gifpreview.url,
          }))
}