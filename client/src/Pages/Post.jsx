import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import axios from "axios";
import { Context } from "../context/Context";
export default function Post({ post, isLiked }) {
  const [Src, setSrc] = useState(post._id);
  const [liked, setLiked] = useState(isLiked);
  const { title, description, updatedAt, _id } = post;
  const timestamp = new Date(updatedAt).toDateString();
  const user = React.useContext(Context);
  const handleClick = async () => {
    setLiked(!liked);
    if (liked === false) {
      await axios.put("http://localhost:5000/api/user/updatelikedposts/", {
        title: title,
        username: user.user.user.username,
      });
    } else {
      await axios.post("http://localhost:5000/api/user/deleteunlikedposts/", {
        title: title,
        username: user.user.user.username,
      });
    }
  };
  return (
    <Card
      sx={{ minWidth: 345 }}
      style={{ marginTop: "20px", marginLeft: "20px" }}
    >
      <CardHeader title={title} subheader={`Updated at: ${timestamp}`} />
      <CardMedia
        component="img"
        height="194"
        image={`http://localhost:5000/api/post/${Src}/image`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleClick}>
          <FavoriteIcon
            style={{
              color: liked === true ? "red" : "",
            }}
          />
        </IconButton>
        <Link to={`/post/${_id}`}>
          <Badge style={{ cursor: "pointer" }}>Read More</Badge>
        </Link>
      </CardActions>
    </Card>
  );
}
