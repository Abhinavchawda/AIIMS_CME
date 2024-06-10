import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Speaker_img from './components/Speaker_img'
import phone_logo from './assets/phone.svg'
import gmail_logo from './assets/gmail.svg'
import map_logo from './assets/map.svg'
import aiims_logo from './assets/aiims_logo.png';
import Dr_Narayan_img from './assets/Dr_Narayan.jpg';
import Dr_Shyam_img from './assets/Dr_Shyam.jpg';
import Dr_Sandeep_img from './assets/Dr_Sandeep.jpg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id='main' className="main overflow-hidden min-h-screen bg-[rgb(245,245,247)] text-white">
      <Navbar />
      <div className='image'>
        <div className='w-full mx-auto h-[110vh] sm:h-[100vh] md:min-h-[100vh] bg-local bg-cover bg-center bg-no-repeat bg-[url(./assets/main_image.jpg)]'><div className='flex flex-col justify-center items-center py-10 mx-5 md:py-30'>
          <div className='text-2xl font-bold mt-5 text-white rounded-xl bg-[rgb(0,30,20,0.7)] md:p-4 md:text-3xl px-3 py-1 font-customFont'>Update on Acute Kidney Injury and CRRT</div>
          <div className='text-2xl text-pretty font-bold mt-5 text-white rounded-xl bg-[rgb(0,30,20,0.7)] md:p-4 md:text-3xl px-3 py-1 font-customFont'>State Level CME on Management of AKI and CRRT hands on</div>
          <div className='text-2xl text-pretty font-bold mt-5 text-white rounded-xl bg-[rgb(0,30,20,0.7)] md:p-4 md:text-3xl px-3 py-1 font-customFont'>Date of the Event: 29th June 2024</div>
          <div className='text-2xl text-pretty font-bold mt-5 text-white rounded-xl bg-[rgb(0,30,20,0.7)] md:p-4 md:text-3xl px-3 py-1 font-customFont'><b>Organized by: </b>Department of Nephrology AIIMS, Bhopal</div>
          <button className='bg-white text-blue-800 shadow-xl text-5xl font-bold rounded-2xl my-10 md:my-5 py-5 px-5 animate-pulse'><a href='https://docs.google.com/forms/d/e/1FAIpQLSfLKfCzl8XbF2mJSCyAljm_7FxUV8pSZ-9YEpQlMXlmBqhRiQ/viewform?usp=sharing'>Register</a></button>
        </div>
        </div>

        <div id='about' className='about my-10 pt-10 pb-28 flex flex-col items-center justify-center min-h-[50vh] text-black border-b border-black'>
          <div className='text-4xl my-10 font-bold'><span className='text-black'>About the</span><span className='text-blue-700'> Event</span></div>
          <div className='w-[90vw] md:w-[70vw] mx-auto text-pretty bg-[rgb(255,255,255)] shadow-xl shadow-slate-300 hover:shadow-slate-400 rounded-3xl p-7'>
            <div className='bg-slate-100 scale-[98.5%] hover:scale-100 text-center rounded-2xl shadow-lg md:mb-5 mb-10 px-4 py-4'>
              <span className='text-xl flex justify-center font-bold text-blue-500'>About the CME</span>
              <br></br>Acute kidney Injury is a very common disorder in ICU and non ICU setting, at primary, secondary or tertiary care provider level. There are lot of updates in management and prevention of AKI i.e. Best type of fluid for resuscitation, volume for resuscitation, modalities for renal replacement i.e. CRRT /SLED/Hemodialysis etc., timing of dialysis initiation. <br></br>
              <br></br>
              CRRT has a special space in management of AKI in ICU settings, regional citrate anticoagulation CRRT is especially useful for patients with coagulation disorders and thrombocytopenia, also it has role as a organ support. <br></br>
            </div>

            <div className='bg-slate-100 scale-[98.5%] hover:scale-100 text-center rounded-2xl shadow-lg md:my-5 my-10 p-4'>
              <span className='text-xl flex justify-center font-bold text-blue-500'>About the Workshop</span><br></br>
              Workshop will provide opportunity of hands on experience with CRRT machine, setting up circuit, explanation about various fluids, dialysate available, anticoagulation-regional citrate and heparin and troubleshooting/ problem solving.
            </div>

            <div className='bg-slate-100 scale-[98.5%] hover:scale-100 text-center rounded-2xl shadow-lg md:my-5 my-10 p-4'>
              <span className='text-xl flex justify-center font-bold text-blue-500'>Who should attend</span><br></br>
              Acute kidney Injury is a very common disorder in ICU and non ICU setting, at primary, secondary or tertiary care provider level. CME and workshop will suit all medicine and surgical practitioners, intensivist and non-intensivist, post graduate students and senior residents of all medical and surgical streams and branches. Dialysis technicians can also register for CRRT workshop.
            </div>
          </div>
        </div>

        <div id='speakers' className='speakers md:my-10 py-10 md:pb-28 flex flex-col flex-wrap items-center min-h-[50vh] text-black border-b border-black'>
          <div className='text-4xl md:my-10 mb-20 font-bold'><span className='text-black'>Who's</span><span className='text-blue-700 font-semibold'> Speaking?</span></div>

          <div className='flex flex-col md:flex-row md:gap-32 items-center justify-center md:flex-wrap md:my-10 w-[80vw] md:w-[90vw] mx-auto'>
            <Speaker_img name="Dr. Shyam Bihari Bansal" post="Secretary - Indian society of Nephrology" post2="Senior Director and head Nephrology Medanta (Medicity Gurgaon)" image={Dr_Shyam_img} img_width={300} />
            <Speaker_img name="Dr. Narayan Prasad" post="Prof and HOD Nephrology SGPGI Lucknow" post2="Deputy Chair South Asia Regional Board International Society of Nephrology" post3="Former Honourable Secretary Indian Society of Nephrology" image={Dr_Narayan_img} img_width={285} />
            <Speaker_img name="Dr. Sandeep Saxena" post="Senior consultant- Nephrology Apollo, Indore" image={Dr_Sandeep_img} img_width={300} />
          </div>
        </div>

        <div className=' border-b border-black'>
          <div className='w-[90vw] md:w-[70vw] my-20 mx-auto text-pretty bg-[rgb(255,255,255)] shadow-xl shadow-slate-300 hover:shadow-slate-400 rounded-3xl p-7'>
            <div id='about' className='about my-10 flex flex-col items-center justify-center min-h-[50vh] text-black'>
              <div className='bg-slate-100 scale-[98.5%] hover:scale-100 rounded-2xl shadow-lg md:my-5 my-10 p-4'>
                <span className='text-xl flex justify-center gap-3 items-center font-bold text-blue-600'>Organising secretary</span>
                <br></br>
                <div className='text-center'>
                  <b><big>Dr. Mahendra Atlani</big></b><br></br>
                  Associate Professor-Nephrology, AIIMS, Bhopal<br></br>
                  <b>Organized by</b><br></br>
                  Department of Nephrology
                  AIIMS, Bhopal
                </div>
              </div>

              <div className='bg-slate-100 scale-[98.5%] hover:scale-100 text-center rounded-2xl shadow-lg md:my-5 mt-10 p-4'>
                <span className='text-xl flex justify-center gap-3 font-bold text-blue-600'>
                  <img src={map_logo}></img>Venue
                </span><br></br>
                Workshop-Dialysis unit 3rd floor Hospital building, AIIMS, Bhopal<br></br>
                <br></br>CME- Lecture theatre - 4, 2nd floor, Sardar vallabh bhai patel building (Medical college building) AIIMS, Bhopal.
              </div>
            </div>
          </div>
        </div>
        
        <div id='contact' className='contact my-10 flex flex-col items-center justify-center min-h-[50vh] text-black'>
          <div className='text-4xl my-10 font-bold'><span className='text-black'>Contact</span><span className='text-blue-700'> Us</span></div>

          <div className='text-md my-10 p-8 flex flex-col justify-center items-center md:w-[40vw] mx-auto rounded-3xl shadow-lg shadow-slate-300 hover:shadow-slate-400 bg-[rgb(255,255,255)] scale-[98.5%] hover:scale-100'>
            <span className='flex gap-5 py-2 px-4 bg-slate-200 text-blue-500 rounded-xl'>
              <img src={phone_logo}></img>
              <b><big>Call us at:</big></b>
            </span><br></br>
            <div className='bg-slate-100 p-5 rounded-2xl shadow-md'>
              <div><b>Mr. Harish:</b> 7728043033</div>
              <div><b>Mr. Alok:</b> 9406540669</div>
              <div><b>Mr. Deepak:</b> 7999779397</div>
            </div>
            <br></br>
            <div className='mt-5 md:mt-10 flex gap-5 py-2 px-4 bg-slate-200 text-blue-500 rounded-xl'>
              <img src={gmail_logo}></img><b><big>Mail us on :</big></b></div><br></br>
            <div className='bg-slate-100 p-5 rounded-2xl shadow-md'>cmeakicrrt@gmail.com</div>
          </div>
        </div>
        <Footer gmail='cmeakicrrt@gmail.com' contact='7728043033' />
      </div>
    </div>
  )
}

export default App
