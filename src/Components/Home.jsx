import React from 'react'
import { Element } from 'react-scroll';
import Crousal from './homeComponents/Crousal'
import Cards from './homeComponents/Cards'
import AkhuwatLoanBanner from './homeComponents/AkhuwatLoanBanner'
import ApplyLoanDes from './homeComponents/ApplyLoanDes'
import AkhuwatLoanStatus from './homeComponents/AkhuwatLoanStatus'
import WhyChooseAkhuwat from './homeComponents/WhyChooseAkhuwat'
import AkhuwatLoanInstruction from './homeComponents/AkhuwatLoanInstruction'
import AkhuwatLoanScheme from './homeComponents/AkhuwatLoanScheme'
import AkhuwatAdvantage from './homeComponents/AkhuwatAdvantage'
import AkhuwatImages1 from './homeComponents/AkhuwatImages1'
import AkhuwatImages2 from './homeComponents/AkhuwatImages2'
import AkhuwatImages3 from './homeComponents/AkhuwatImages3'
import StatsCards from './homeComponents/StatsCard'
import AkhuwatPlans from './akhuwatplans'
import Carousal from './carousal'

const Home = ({ triggerWhatsApp }) => {
  return (
    <div>
      <Carousal />
      <StatsCards />
      <AkhuwatImages2 />
       <Element name="servicescards">
      <Cards />
      </Element>
      <AkhuwatImages3 />
      <AkhuwatPlans/>
   <WhyChooseAkhuwat />
   <AkhuwatLoanStatus triggerWhatsApp={triggerWhatsApp}/>
      <AkhuwatLoanInstruction />
      <AkhuwatLoanScheme />
      <AkhuwatAdvantage />
      {/* <AkhuwatImages1 /> */}
    </div>
  )
}

export default Home
