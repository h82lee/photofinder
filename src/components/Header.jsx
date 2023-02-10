import { Typography, AppBar, Toolbar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

const Header = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <ImageIcon color="primary.contrastText" sx={{ mr: 2 }} />
        <Typography variant="h6" noWrap>
          Photo Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
