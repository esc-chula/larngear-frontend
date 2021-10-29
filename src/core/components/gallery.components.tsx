import React, { useState } from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import Slider, { Settings } from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface IImage {
  src: string
  topic: string
  description: string
  alt?: string
}

interface HomeGalleryProps {
  images: IImage[]
}

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(4, 0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(5, 0)
  },
  contentDiv: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    height: "fit-content",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  descriptionRoot: {
    display: "flex",
    marginLeft: theme.spacing(3),
    justifyContent: "space-between",
    flexDirection: "column",
    maxWidth: "470px",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3)
    }
  },
  imageTopic: {
    display: "flex",
    marginBottom: theme.spacing(2),
    margin: "auto"
  },
  galleryRoot: {
    maxWidth: "100vw",
    width: "100%"
  },
  image: {
    width: "100%",
    maxWidth: "470px",
    height: "auto",
    borderRadius: "20px"
  },
  button: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1, 6),
    width: "100%",
    "&>*": {
      fontSize: "1.1rem"
    },
    "&:disabled": {
      backgroundColor: grey[400],
      color: grey[200]
    }
  },
  galleryHeader: {
    marginBottom: theme.spacing(5)
  },
  description: {
    fontWeight: 300
  }
}))

const HomeGallery: React.FC<HomeGalleryProps> = props => {
  const { images } = props
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  }

  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.galleryHeader}>
        Gallery
      </Typography>
      <div className={classes.galleryRoot}>
        <Slider {...settings}>
          {images.map(({ src }, key) => (
            <div>
              <div key={key} className={classes.contentDiv}>
                <img className={classes.image} src={(src as unknown) as string} alt="Hello" />
                <div className={classes.descriptionRoot}>
                  <div>
                    <div className={classes.imageTopic}>
                      <Typography variant="h5">ค่ายที่ไม่เหมือนใคร และไม่มีใครเหมือน !</Typography>
                    </div>
                    <Typography variant="h6" className={classes.description}>
                      หากน้อง ๆ มีความฝันและอยากมาร่วมสัมผัสบรรยากาศของวิศวฯ จุฬาฯ โดยตรง ค่ายลานเกียร์ยินดีต้อนรับน้อง ๆ ทุกคนเข้าสู่บ้านของเรา
                      อย่ารอช้า ! ประสบการณ์และความสนุกอันล้ำค่ากำลังรออยู่ :3
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>
                      สมัครเลย! วันนี้ - 18 ตุลา 2021
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HomeGallery
