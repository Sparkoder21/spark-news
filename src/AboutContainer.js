import React from "react";
import {Link, Typography} from "@material-ui/core";

function AboutContainer(){
	return (
		<Typography style={{marginTop: "80px", marginLeft: "50px", marginRight: "50px"}} variant="h6" color="textSecondary" align="center"paragraph> This web app SparkNews is made by Sparkoder as an experiment project. This web app makes news available in shorter form to people who have less time or want to save their time. Make sure to check the project <Link href={"https://github.com/Sparkoder21/spark-news"} target="_blank" rel="noopener noreferrer"> here</Link>. </Typography>
	);
}

export default AboutContainer;