import * as React from "react";
import { useState } from "react";
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
import DefaultImage from "../../Photo/defaultPost.jpg"
import { Context } from "../../context/Context";
import "./post.styles.css";
export default function Post({ post, isLiked }) {
  const [liked, setLiked] = useState(isLiked);
  const [Src, setSrc] = useState(null);
  const { title, description, updatedAt, _id } = post;
  const { token } = React.useContext(Context);
  const timestamp = new Date(updatedAt).toDateString();
  const handleClick = async () => {
    setLiked(!liked);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (liked === false) {
      await axios.put(
        "http://localhost:5000/api/user/updatelikedposts/",
        {
          title: title,
        },
        config
      );
    } else {
      await axios.post(
        "http://localhost:5000/api/user/deleteunlikedposts/",
        {
          title: title,
        },
        config
      );
    }
  };
  React.useEffect(() => {
    setLiked(isLiked);
    if (post.pic) {
      setSrc(post._id);
    }
  }, [isLiked]);

  return (
    <Card
      sx={{ maxWidth: 300, minWidth: 300, maxHeight: "400px" }}
      style={{ marginTop: "20px", marginLeft: "20px" }}
      className="hover"
    >
      <CardHeader title={title} subheader={`Updated at: ${timestamp}`} />
      <CardMedia
        component="img"
        height="194"
        width="300"
        image={
          Src ? `http://localhost:5000/api/post/${Src}/image` : DefaultImage
        }
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.substring(0, 40)} ......
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
