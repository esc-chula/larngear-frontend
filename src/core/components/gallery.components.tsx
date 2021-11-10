import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import Slider, { Settings } from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LazyLoad from "react-lazyload"
import { Link } from "react-router-dom"
import { ITheme } from "../../styles/types"

interface IImage {
  src: string
  topic: string
  description: string
  alt?: string
}

interface HomeGalleryProps {
  images: IImage[]
}

const useStyle = makeStyles((theme: ITheme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.gray[50],
    color: theme.palette.gray[700],
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
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(0)
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
    borderRadius: "20px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "550px",
      objectFit: "cover",
      height: "336px"
    }
  },
  button: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1, 3),
    width: "100%",
    "&>*": {
      fontSize: "1rem"
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
      <Typography variant="h1" className={classes.galleryHeader}>
        GALLERY
      </Typography>
      <div className={classes.galleryRoot}>
        <Slider {...settings}>
          {images.map(({ src, topic, description }, key) => (
            <div>
              <div key={key} className={classes.contentDiv}>
                <LazyLoad height={336} resize={true}>
                  <img className={classes.image} src={(src as unknown) as string} alt="Hello" />
                </LazyLoad>
                <div className={classes.descriptionRoot}>
                  <div>
                    <div className={classes.imageTopic}>
                      <Typography variant="h4">{topic}</Typography>
                    </div>
                    <Typography variant="h6" className={classes.description}>
                      {description}
                    </Typography>
                  </div>
                  <Link to="/profile" className="no-underline">
                    <Button variant="contained" color="primary" className={classes.button}>
                      สมัครเลย! วันนี้ - 8 ธันวาคม 2564
                    </Button>
                  </Link>
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
