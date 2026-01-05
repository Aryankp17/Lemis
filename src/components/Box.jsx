import React from 'react'
import { Bookmark } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCollection,removefromCollection } from '../redux/features/collectionslice';


const Box = ({item,idx}) => {
  const dispatch = useDispatch();
  const {Collection} = useSelector((Store)=>Store.Collection); 

  const Addtocollection = (item)=>{
    if(!Collection.find((i)=>i.id === item.id)){
      dispatch(addtoCollection(item));
    }else{
      dispatch(removefromCollection(item))
    }
  }
  return (
    <div key={idx} id='box' className='lg:w-[300px] w-[180px] aspect-[1/1.3] lg:aspect-[1/1] relative cursor-pointer rounded'>
      {(item.type === "photos" || item.type === "gif") ? (
        <img className='w-full h-full object-cover overflow-auto' src={item.url} alt="img" />
      ) :
        <video className='w-full h-full object-cover overflow-auto' muted autoPlay loop>
          <source src={item.url} type="video/mp4"/>
        </video>
      }
      <div id='box-info' className='absolute flex items-center py-8 px-3  gap-2 bottom-0 w-full lg:h-20 h-15 bg-black'>
        <div className='flex items-center gap-3 w-full'>
          <img className='lg:w-7 lg:h-7 w-5 h-5 rounded-3xl  object-cover' src='https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg' alt="profile" />
          <h2 className='font-semibold lg:text-lg text-sm overflow-hidden text-white'>{item.name}</h2>
        </div>
        <Bookmark  color='white' onClick={()=>Addtocollection(item)}  className={`active:scale-90 ${Collection.find((i)=>i.id === item.id) ? "fill-white" : "fill-none"}`}/>
      </div>
    </div>
  )
} 

export default Box