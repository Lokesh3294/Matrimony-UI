import { Button, Box, Typography } from '@mui/material';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      <Box className="container">
        <Box
          component="main"
          sx={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2022/03/09/09/16/wedding-7057465_1280.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '400px',
            position: 'relative',
            marginTop: '-10px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontSize: '44px',
              position: 'absolute',
              top: '90px',
              left: '23%',
              color: 'black'
            }}
          >
            World's No.1 Matrimony service
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              fontSize: '26px',
              position: 'absolute',
              top: '135px',
              left: '30%',
              color: 'black'
            }}
          >
            Search by City, Profession & Community
          </Typography>
          <Box
            className="container"
            sx={{
              display: 'flex',
              gap: 2,
              width: '880px',
              padding: '10px 20px 15px',
              borderRadius: '10px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              top: '200px',
              left: '15%',
            }}
          >
            {/* Select Fields */}
            {[
            {
                label: "I'm Looking for a",
                options: ["Men", "Women", "Others"]
            },
            {
                label: "Aged",
                options: Array.from({ length: 32 }, (_, i) => i + 19) // Generates age options from 18 to 99
            },
            {
                label: "To",
                options: Array.from({ length: 32 }, (_, i) => i + 19) // Generates age options from 18 to 99
            },
            {
                label: "of Religion",
                options: ["Hindu", "Muslim", "Christian", "Sikh", "Others"]
            },
            {
                label: "and Mother Tongue",
                options: [
                "Hindi",
                "English",
                "Telugu",
                "Tamil",
                "Bengali",
                "Marathi",
                "Punjabi",
                "Others"
                ]
            }
            ].map((field, index) => (
            <Box key={index} className={`field${index + 1}`}>
                <Typography
                variant="body2"
                sx={{ color: 'white', marginBottom: '5px' }}
                >
                {field.label}
                </Typography>
                <select
                style={{
                    height: '30px',
                    width: '120px',
                    marginTop: '5px',
                    border: 'none',
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    color: 'black'
                }}
                >
                <option>Select</option>
                {field.options.map((option, idx) => (
                    <option key={idx} value={option}>
                    {option}
                    </option>
                ))}
                </select>
            </Box>
            ))}

              <Button
                variant="contained"
                sx={{
                    backgroundColor: 'red',
                    height: '30px',
                    width: '100px',
                    marginTop: '30px',
                    color: 'white',
                    fontSize: '9px',
                    '&:hover': {
                    backgroundColor: 'darkred', // Optional hover effect
                    },
                }}
                >
                Let's Begin
                </Button>
          </Box>
          <Box
            className="section2"
            sx={{
                height: '250px',
                width: '880px',
                margin: 'auto',
                marginTop: '50px',
                borderRadius: '10px',
                position: 'absolute',
                top: '280px',
                left: '15%',
                backgroundColor: 'white',
                boxShadow: '0px 4px 4px 0px #00000040',
            }}
            >
        <Box
            className="box"
            sx={{
            display: 'flex',
            justifyContent: 'space-around',
            }}
        >
            <Box
            className="box1"
            sx={{
                width: '200px',
                paddingLeft: '20px',
                textAlign: 'center',
                marginTop: '70px',
            }}
            >
            <AssignmentIndOutlinedIcon
                sx={{
                height: '40px',
                color: 'black',
                width: '40px',
                }}
            />
            <Typography
                variant="h6"
                sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'black'
                }}
            >
                100 %
            </Typography>
            <Typography
                sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'black'
                }}
            >
                Mobile - Verified profiles
            </Typography>
            </Box>

            <Box
            className="vertical-line"
            sx={{
                borderLeft: '2px solid grey',
                marginTop: '70px',
                height: '120px',
                color: 'black'
            }}
            />

            <Box
            className="box2"
            sx={{
                width: '200px',
                paddingLeft: '20px',
                textAlign: 'center',
                marginTop: '70px',
            }}
            >
            <VerifiedUserOutlinedIcon
                sx={{
                height: '40px',
                width: '40px',
                color: 'black'
                }}
            />
            <Typography
                variant="h6"
                sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'black'
                }}
            >
                4 crores +
            </Typography>
            <Typography
                sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'black'
                }}
            >
                Customers are Served
            </Typography>
            </Box>

            <Box
            className="vertical-line"
            sx={{
                borderLeft: '2px solid grey',
                marginTop: '70px',
                height: '120px',
            }}
            />

            <Box
            className="box3"
            sx={{
                width: '200px',
                paddingLeft: '20px',
                textAlign: 'center',
                marginTop: '70px',
            }}
            >
            <HandshakeOutlinedIcon
                sx={{
                height: '40px',
                width: '40px',
                color: 'black'
                }}
            />
            <Typography
                variant="h6"
                sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'black'
                }}
            >
                24 Years
            </Typography>
            <Typography
                sx={{
                fontSize: '13px',
                fontWeight: 500,
                color: 'black'
                }}
            >
                Off Successfull Matchmaking
            </Typography>
            </Box>
        </Box>

        {/* <Box
            component="img"
            src="/images/ritual.jpg"
            sx={{
            height: '300px',
            width: '400px',
            objectFit: 'contain',
            marginLeft: '25%',
            marginTop: '-60px',
            }}
        /> */}
        </Box>

        </Box>
      </Box>
    </>
  );
};


export default HeroSection;