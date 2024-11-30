import React, { useContext } from 'react'
import { myContext } from '../../../utils/Context'
import { Backdrop } from '@mui/material'
import { GpsFixed, Language, OndemandVideo, RecordVoiceOver, TrendingUp } from '@mui/icons-material'

const MoreInfo = ({channelDetail}) => {

  const {open, handleOpen} = useContext(myContext)

  return (
   <Backdrop
          open={open}
          onClick={handleOpen}
          className="z-30"
        >
          <div className="rounded-2xl max-w-[500px] scroll-w shadow-sm bg-white p-10 space-y-4 cursor-default">
            <h1 className="text-2xl font-semibold">About</h1>
            <h1 className="text-sm text-gray-400">
              {channelDetail.snippet.description}
            </h1>
            <h1 className="text-2xl font-semibold tracking-wider">
              Channel Details
            </h1>
            <div className="space-y-4 pl-5">
              <div className="flex space-x-3 ">
                <Language className='text-gray-600'/>
                <h1 className="text-gray-400">{`www.youtube.com/${channelDetail.snippet.customUrl}`}</h1>
              </div>
              <div className="flex space-x-3 ">
                <RecordVoiceOver className='text-gray-600'/>
                <h1 className="text-gray-400">{`${parseInt(
                  channelDetail.statistics.subscriberCount
                ).toLocaleString()} suscribers`}</h1>
              </div>
              <div className="flex space-x-3 ">
                <OndemandVideo className='text-gray-600'/>
                <h1 className="text-gray-400">{`${parseInt(
                  channelDetail.statistics.videoCount
                ).toLocaleString()} videos`}</h1>
              </div>
              <div className="flex space-x-3 ">
                <TrendingUp className='text-gray-600'/>
                <h1 className="text-gray-400">{`${parseInt(
                  channelDetail.statistics.viewCount
                ).toLocaleString()} videos`}</h1>
              </div>
              <div className="flex space-x-3 ">
                <GpsFixed className='text-gray-600'/>
                <h1 className="text-gray-400">{channelDetail.snippet.country}</h1>
              </div>
            </div>
          </div>
        </Backdrop>
  )
}

export default MoreInfo