import React from 'react'
import { SingleSideTable } from '../common/SingleSideTable'
import proimg from '../assets/images/proimg.png'
import proimg2 from '../assets/images/proimg2.png'
export const SideTable = () => {
  return (
    <>
    <section id='sideTable' className='py-[53px] bg-[#FAF4F4] hidden lg:block'>
        <div className='container'>
            <div className='row flex justify-between'>
                <div>
                    <SingleSideTable proImg={proimg} proName={'Side table'}/>
                </div>
                <div>
                    <SingleSideTable proImg={proimg2} proName={'Side table'}/>
                </div>
            </div>
        </div>
    </section>

    {/* ---------- responsive ------------- */}

    <section className='lg:hidden py-[15px] bg-[#FAF4F4]'>
        <div className='container'>
            <div className='row flex justify-between'>
                <div className='ml-[-30px]'>
                    <SingleSideTable proImg={proimg} proName={'Side table'}/>
                </div>
                <div>
                    <SingleSideTable proImg={proimg2} proName={'Side table'}/>
                </div>
            </div>
        </div>
    </section>

    


    
    </>

    
  )
}
