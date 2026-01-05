import React from 'react'
import { setActivetab } from '../redux/features/searchslice';
import { useDispatch, useSelector } from 'react-redux';

const Tabs = () => {
  const dispatch = useDispatch();
  const Activetab = useSelector((state)=>state.Search.Activetab);
  const tabs = ['Photo', 'Video', 'GIF'];
  const handeltab = (item)=>{
    dispatch(setActivetab(item));
  }
  return (
    <div className='flex w-full px-4 lg:px-8 py-2 mb-2 font-semibold gap-5'>
      {tabs.map((item,idx)=>{
        return <div key={idx}>
          <button
          onClick={()=>{
            handeltab(item)
          }}
           className={`${(Activetab === item) ? 'bg-sky-500':'bg-gray-700'} px-3 py-1 lg:px-3 text-white active:scale-95 cursor-pointer rounded`}>{item}</button>
        </div>
      })}
    </div>
  )
}

export default Tabs