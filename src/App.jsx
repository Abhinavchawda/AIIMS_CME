import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Speaker_img from './components/Speaker_img'
import phone_logo from './assets/phone.svg'
import gmail_logo from './assets/gmail.svg'
import map_logo from './assets/map.svg'
import aiims_logo from './assets/aiims_logo.png';

function App() {
  const [count, setCount] = useState(0)
  const read_ref = useRef(0);
  const btn_ref = useRef(0);

  const readMore = () => {
    if (read_ref.current.style.display != "hidden") {
      read_ref.current.style.display = "flex";
      btn_ref.current.style.display = "hidden";
    }
    else
      read_ref.current.style.display = "hidden";
  }

  return (
    <div id='main' className="main overflow-hidden min-h-screen bg-[rgb(245,245,247)] text-white">
      <Navbar />
      <div className='image'>
        <div className='w-full mx-auto h-[60vh] md:h-screen bg-fixed bg-cover bg-no-repeat bg-[url(./assets/Designer.png)]'>

          <div className='flex flex-col justify-center items-center py-10 md:py-60'>
            <div className='text-2xl font-bold italic mt-28 text-orange-500 rounded-xl bg-white px-3 py-1'>The Countdown is finished!</div>
            <div className='text-2xl text-pretty font-bold italic mt-5 text-orange-500 rounded-xl bg-white px-3 py-1'>National CME</div>
            <button className='bg-white text-blue-800 shadow-xl text-5xl font-bold rounded-2xl my-10 py-5 px-5 animate-pulse'><a href='https://google.com'>Register</a></button>
          </div>
        </div>

        <div id='about' className='about my-10 pb-28 flex flex-col items-center justify-center min-h-[50vh] text-black border-b border-black'>
          <div className='text-4xl my-10 font-bold'><span className='text-black'>About the</span><span className='text-orange-500'> Event</span></div>
          <div className='w-[90vw] md:w-[70vw] mx-auto text-pretty bg-[rgb(255,255,255)] shadow-xl shadow-slate-300 hover:shadow-slate-400 rounded-3xl p-7'>
            <span className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>About the CME</span><br></br>
            <br></br><b>“Update on Acute Kidney Injury and CRRT“</b><br></br>
            <b>National CME on management of AKI and CRRT hands on 29th June 2024</b>
            <br></br>Acute kidney Injury is a very common disorder in ICU and non ICU setting, at primary, secondary or tertiary care provider level. It could be community acquired or hospital acquired. Sepsis is one of leading cause of AKI. There are lot of updates in management and prevention of AKI i.e. Best type of fluid for resuscitation, (Balanced solutions versus non balanced) volume for resuscitation (Is high volume deleterious), modalities for renal replacement i.e. CRRT /SLED/Hemodialysis etc., timing of dialysis initiation (Early or Late). <br></br>
            <br></br>
            CRRT has a special space in management of AKI in ICU settings, regional citrate anticoagulation CRRT is especially useful for patients with coagulation disorders and thrombocytopenia, also it has role as a organ support. <br></br>
            <br></br>
            CME and workshop focuses on learning CRRT basics, its indications, its modalities, CVVHD, CVVHDF, its dose, anticoagulation and practical problems in running CRRT. <br></br>
            <br></br>
            CME will also provide updates on burning topics of AKI mentioned above. <br></br>
            <br></br><br></br>

            <span className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>About the Workshop</span><br></br>
            <br></br>Workshop will provide opportunity of hands on experience with CRRT machine, setting up circuit, explanation about various fluids, dialysate available, anticoagulation-regional citrate and heparin and troubleshooting/ problem solving.<br></br>
            <br></br>

            <br></br>
            <div ref={read_ref} className='hidden flex-col'>
            <span className='text-xl flex gap-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
              <img src={map_logo}></img>Venue
            </span><br></br>
            <br></br>Workshop-Dialysis unit 3rd floor Hospital building, AIIMS, Bhopal<br></br>
            <br></br>CME- Lecture theatre - 4 2nd floor, Sardar vallabh bhai patel building (Medical college building) AIIMS, Bhopal.<br></br>
            <br></br>
              <span className='text-xl flex gap-3 items-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500'>Organising secretary</span>
              <br></br>
              <b><big>Dr. Mahendra Atlani</big></b>
              Associate Professor-Nephrology, AIIMS, Bhopal.<br></br>
              <b>Organized by</b>
              Department of Nephrology
              AIIMS, Bhopal
            </div>
          </div>
          <div><button ref={btn_ref} className='bg-orange-500 font-semibold rounded-xl mt-5 p-2' onClick={readMore}>Read More</button></div>
        </div>

        <div id='speakers' className='speakers md:my-10 py-10 md:pb-28 flex flex-col flex-wrap items-center min-h-[50vh] text-black border-b border-black'>
          <div className='text-4xl md:my-10 mb-20 font-bold'><span className='text-black'>Who</span><span className='text-orange-500 font-semibold'><i> Speaking?</i></span></div>

          <div className='flex flex-col md:flex-row md:gap-32 items-center justify-center md:flex-wrap md:my-10 w-[80vw] md:w-[90vw] mx-auto'>
            <Speaker_img name="Dr. Shyam Bihari Bansal" post="President - Indian society of Nephrology" image="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png" />
            <Speaker_img name="Dr. Acharya" post="Senior consultant nephrology - Nagpur" image="https://t4.ftcdn.net/jpg/06/32/90/79/360_F_632907920_9mUAJdojy5L613RzjvC5UJZfddYFF2iO.jpg" />
            <Speaker_img name="Dr. Gopesh Modi" post="Senior consultant Nephrology-Bhopal" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zBk9y5UyxFqs4ArBVDjs1ddK6Va9BRczSVQxO_7_jz68g57kjBBLMiceCmeh0lw0suU&usqp=CAU" />
          </div>
        </div>

        <div id='contact' className='contact my-10 flex flex-col items-center justify-center min-h-[50vh] text-black'>
          <div className='text-4xl my-10 font-bold'><span className='text-black'>Contact</span><span className='text-orange-500'> Us</span></div>

          <div className='text-md my-10 p-8 flex flex-col justify-center items-center md:w-[40vw] mx-auto rounded-3xl shadow-lg shadow-slate-300 hover:shadow-slate-400 bg-[rgb(255,255,255)] scale-[98.5%] hover:scale-100'>
            <span className='flex gap-5 md:py-5 py-1 px-4 bg-slate-200 text-blue-500 rounded-xl'>
              <img src={phone_logo}></img>
              <b><big>Call us at:</big></b>
            </span><br></br>
            <div className='bg-slate-100 p-5 rounded-2xl shadow-md'>
              <div><b>Mr. Harish:</b> 7728043033</div>
              <div><b>Mr. Alok:</b> 9406540669</div>
              <div><b>Mr. Deepak:</b> 7999779397</div>
            </div>
            <br></br>
            <div className='mt-5 md:mt-10 flex gap-5 py-1 px-4 bg-slate-200 text-blue-500 rounded-xl'>
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
