import React from 'react'
import SkeletonElement from './SkeletonElement';

const channelPSkeleton = () => {
  return (
    <section className="flex space-x-4 ">
      <div>
        <SkeletonElement type='avatar-lg'/>
      </div>
      <div className="space-y-4 w-80">
        <SkeletonElement type='h1-lg' />
        <SkeletonElement type='p'/>
        <SkeletonElement type='p'/>
      </div>
    </section>
  );
}

export default channelPSkeleton