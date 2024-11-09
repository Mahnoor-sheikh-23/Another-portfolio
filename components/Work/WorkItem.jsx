import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";
import { Badge } from '../ui/badge';

const WorkItem = ({ href, category, img, title }) => {
  return (
    <Link href={href} className='group'>
      <div className='workItem-first-div'>
        <Badge className="badge-of-workItems">{category}</Badge>
        <Image src={img} fill priority quality={100} alt='' className='actual-image-of-wrok-sections' />
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex-1'>
          <h3 className='h3'>{title}</h3>
        </div>
        <button className='button-of-work' ><FiArrowRight className='text-2xl' /></button>
      </div>
    </Link>
  )
}

export default WorkItem
