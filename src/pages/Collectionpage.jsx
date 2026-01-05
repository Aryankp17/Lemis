import React, { use, useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Bookmark } from 'lucide-react';
import { removefromCollection,addtoCollection,setloading,stoploading,seterror } from '../redux/features/collectionslice'
import {useNavigate} from 'react-router-dom'

const Collectionpage = () => {
  const {Collection,loading,error} = useSelector((Store)=>Store.Collection);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
  },[Collection])

  const removecollection = (item)=>{
    dispatch(removefromCollection(item))
  }
  
  const collectionresult = (
    <div  className="h-[70vh] overflow-auto flex mt-2 lg:mt-0 grid mx-auto lg:grid-cols-5 relative z-10 grid-cols-2 px-4 py-2 justify-items-center gap-y-5 w-full">
      {loading && (
        <h1 className="absolute inset-0 bg-black/50 text-white flex items-center justify-center z-1">Loading...</h1>
      )}
      {error && (
        <h1 className="absolute inset-0 bg-black/50 text-white flex items-center justify-center z-1">
          Something went wrong!</h1>
      )}
      {!loading && !error && Collection.length === 0 && (
        <h1 className="absolute inset-0 bg-black/50 text-white flex items-center justify-center z-1">No Items in Collection</h1>
      )}
      {!loading && !error && Collection.length >0 && Collection.map((item,idx)=>{
        return <div key={idx} id='box' className='lg:w-[200px] w-[180px] aspect-[1/1.3] lg:aspect-[1/1] relative cursor-pointer rounded'>
            {(item.type === "photos" || item.type === "gif") ? (
              <img className='w-full h-full object-cover overflow-auto' src={item.url} alt="img" />
            ) :
              <video className='w-full h-full object-cover overflow-auto' muted autoPlay loop>
                <source src={item.url} type="video/mp4"/>
              </video>
            }
            <div id='box-info' className='absolute flex items-center py-8 px-3  gap-2 bottom-0 w-full lg:h-20 h-15 bg-black'>
              <div className='flex items-center gap-3 w-full'>
                <img className='lg:w-5 lg:h-5 w-5 h-5 rounded-3xl  object-cover' src='https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg' alt="profile" />
                <h2 className='font-semibold lg:text-sm text-sm overflow-hidden text-white'>{item.name}</h2>
              </div>
              <Bookmark color='white' onClick={()=> removecollection(item) }  className={`active:scale-90 ${Collection.find((i)=>i.id === item.id) ? "fill-white" : "fill-none"}`}/>
            </div>
          </div>


      })}
    </div>
    
  )

  return(
    <>
    <button title='Back' className=' flex inline-block px-3 py-2 my-3 mx-10 active:scale-95 bg-green-600 hover:bg-green-700 text-white font-semibold cursor-pointer' onClick={() => Navigate(-1)}>Back</button>
    {collectionresult}
    </>
    
  )
}

export default Collectionpage