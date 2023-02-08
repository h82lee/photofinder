import { Typography, AppBar, Toolbar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

const Header = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <ImageIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Photo Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
