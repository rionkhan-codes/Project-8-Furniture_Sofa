import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SingleDelivery } from '../common/SingleDelivery'
import { CiDeliveryTruck } from "react-icons/ci";
import { LuDatabaseBackup } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";

export const ContactComp2 = () => {
  return (
    <>
    <section id='contactComp' className='mt-[70px] py-[95px] bg-[#FAF4F4]'>
        <div className='container'>
            <div className='row flex justify-between'>
                <div>
                    <SingleDelivery icon={<CiDeliveryTruck className='text-[37px]' />} h2={'Free Delivery'} p={'For all oders over $50, consectetur adipim scing elit.'}/>
                </div>
                <div>
                    <SingleDelivery icon={<LuDatabaseBackup className='text-[37px]' />} h2={'90 Days Return'} p={'If goods have problems, consectetur adipim scing elit.'}/>
                </div>
                <div>
                    <SingleDelivery icon={<RiSecurePaymentLine className='text-[37px]' />} h2={'Secure Payment'} p={'100% secure payment, consectetur adipim scing elit.'}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
