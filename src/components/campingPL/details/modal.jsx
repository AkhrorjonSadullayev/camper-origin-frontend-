import React, { useState } from 'react';
import '../details/popup'
import { Video_ConTainer } from '../details/popup';
import { Box, Button, Modal, Typography } from '@mui/material';
import play from '../../../assets/clarity_play-solid.svg'
import styled from 'styled-components';




const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const modals = [
    { id: 1, title: "First Video Title", videoSrc: "https://www.youtube.com/embed/oQmY0FI2Qko?si=I_iqrSDRGspMGbo-", imageSrc: "https://st3.depositphotos.com/1000647/18441/i/450/depositphotos_184414464-stock-photo-family-vacation-travel-rv-holiday.jpg"},
    { id: 2, title: "Second Video Title", videoSrc: "https://www.youtube.com/embed/9NpSU-j6eV8?si=yXATR9RD9Ryf7zG6", imageSrc: "https://img.freepik.com/premium-photo/scenic-landscape-with-campervan-serene-lake-majestic-mountains-travel-adventure-concept-idyllic-outdoor-exploration-ai_372197-31570.jpg"},
    { id: 3, title: "Third Video Title", videoSrc: "https://www.youtube.com/embed/n7Y3SZan-lg?si=ROI1tnkso8ZOkFHD", imageSrc: "https://res.cloudinary.com/hqxyevlf6/image/upload/c_fit,f_auto,h_1200,q_auto,w_1200/n5vcwecgmrzpopcwbw22.jpg"},
    { id: 4, title: "Fourth Video Title", videoSrc: "https://www.youtube.com/embed/v0rN-75OlEo?si=nuHq-IZYiqKN-WYc", imageSrc: "https://res.cloudinary.com/hqxyevlf6/image/upload/c_fit,f_auto,h_1200,q_auto,w_1200/yaqstiazlaahh1qp0jyn.jpg"},
    { id: 5, title: "Fifth Video Title", videoSrc: "https://www.youtube.com/embed/gYn6_ls662Q?si=MWvyLiXx55hBxnC_", imageSrc: "https://cdn.vox-cdn.com/thumbor/RIBWyNdFvgJU9D6DlhsKcHSc4kw=/0x0:5760x3840/1200x800/filters:focal(2420x1460:3340x2380)/cdn.vox-cdn.com/uploads/chorus_image/image/59293591/OSV18_01_PowerStation_Hero.0.jpg"},
    { id: 6, title: "Sixth Video Title", videoSrc: "https://www.youtube.com/embed/T4YNhHjFGSQ?si=dyQG-DopOb_nXiDo", imageSrc: "https://www.motortrend.com/uploads/2023/04/037-Outside-Van-Approach-2023-Mercedes-Benz-Sprinter-170.jpg?w=768&width=768&q=75&format=webp"},
    { id: 7, title: "seventh Video Title", videoSrc: "https://www.youtube.com/embed/BtSKtWjPPho?si=iVJLt1p6AtDCLLvF", imageSrc: "https://i.insider.com/61f2f7d82fd30f0018aeeb8e?width=700"},
    { id: 8, title: "Eighth Video Title", videoSrc: "https://www.youtube.com/embed/aBKn04RHZvU?si=BR2ksItLMNMdTmOe", imageSrc: "https://www.motortrend.com/uploads/2023/07/003-SandyVans-Sprinter.jpg"},
  ];

  return (
    <Video_ConTainer>  
       
      <div  className='video_con_2'>
        {modals.map((modal, index) => (

          <div key={index}  className='video_con_3'>   

            <div className='img_wrap-2'>
            <img  className='img_wrap-3'
              src={modal.imageSrc}
              alt={`Image ${index + 1}`}
              onClick={() => setSelectedIndex(modal.id)}
              style={{
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                borderRadius:'20px',
                border:'none',
                backgroundColor: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)',
                
              }}
              // onClick={() => setSelectedIndex(modal.id)}
            /></div>

            <div className='img_wrap'
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
              onClick={() => setSelectedIndex(modal.id)}
            >
             <Button> <img src={play} alt="" /></Button>
            </div>
          </div>
        ))}
      </div>
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          open={selectedIndex === modal.id}
          onClose={() => setSelectedIndex(null)}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              maxWidth: '850px',
              height: '480px',
              borderRadius: '20px',
              bgcolor: 'background.paper',
              boxShadow: 1,
              p: 4,
            }}
          >
            <Typography
              variant="h6"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {modal.title}
              <h4 onClick={() => setSelectedIndex(null)} style={{ cursor: 'pointer' }}>
                x
              </h4>
            </Typography>

            <Box sx={{ mt: 2.5, position: 'relative', paddingBottom: '0%', height: 0 }}>
              <iframe
                src={modal.videoSrc}
                title={modal.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: '20px',
                  width: '100%',
                  maxWidth: '790px',
                  height: '360px',
                }}
              />
            </Box>
          </Box>
        </Modal>
      ))}
    
    </Video_ConTainer>
  );
};

export default App;