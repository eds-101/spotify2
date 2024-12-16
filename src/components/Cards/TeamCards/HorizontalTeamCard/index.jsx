/**
 =========================================================
 * Material Kit 2 PRO React - v2.1.1
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-pro-react
 * Copyright 2024 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import fallbackImage from "/noImg.png";
import MKButton from "components/MKButton/index.jsx";

const SpotifyPlayButton = ({href}) => {
    return (
        <MKButton
            component="a"
            href={href}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="success"
            size="small"
            sx={{mt: 2}}
        >
            Listen on Spotify
        </MKButton>
    )
}

function HorizontalTeamCard({image, name, position, description, href}) {
    return (
        <Card sx={{mt: 3}}>
            <Grid container>
                <Grid item xs={12} md={6} lg={4} sx={{mt: -6}}>
                    <MKBox width="100%" pt={2} pb={1} px={2}>
                        <MKBox
                            component="img"
                            src={image || fallbackImage}
                            onError={(event) => {
                                event.currentTarget.src = fallbackImage;
                            }}
                            alt={name}
                            width="100%"
                            borderRadius="md"
                            shadow="lg"
                        />
                    </MKBox>
                </Grid>
                <Grid item xs={12} md={6} lg={8} sx={{my: "auto"}}>
                    <MKBox pt={{xs: 1, lg: 2.5}} pb={2.5} pr={4} pl={{xs: 4, lg: 1}} lineHeight={1}>
                        <MKTypography variant="h5">{name}</MKTypography>
                        <MKTypography variant="h6" color={position.color} mb={1}>
                            {position.label}
                        </MKTypography>
                        <MKTypography variant="body2" color="text">
                            {description}
                        </MKTypography>
                        {href &&
                            <SpotifyPlayButton href={href} />
                        }
                    </MKBox>
                </Grid>
            </Grid>
        </Card>
    );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.shape({
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "light",
        ]),
        label: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default HorizontalTeamCard;
